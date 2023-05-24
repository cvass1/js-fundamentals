const { describe } = require('node:test')
const Thermostat = require('./thermostat.js') 

describe('Thermostat', () => {
    it('returns the default temperature', () => {
        const thermostat = new Thermostat();
        expect(thermostat.getTemperature()).toBe(20);
    });

    it('increases the temperature', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        expect(thermostat.getTemperature()).toBe(22);
    });

    it('decreases the temperature', () => {
        const thermostat = new Thermostat();
        thermostat.up();
        thermostat.up();
        thermostat.down();
        expect(thermostat.getTemperature()).toBe(21);
    });

    it('has a max temp of 25 when power-saving mode is on', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(true);
        for (let i = 0; i< 10; i++){
            thermostat.up();
        };
        expect(thermostat.getTemperature()).toBe(25);
    });

    it('can have a temp over 25 when power-saving mode is off', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i< 6; i++){
            thermostat.up();
        };
        expect(thermostat.getTemperature()).toBe(26);
    });

    it('has a max temp of 32 when power-saving mode is off', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i< 20; i++){
            thermostat.up();
        };
        expect(thermostat.getTemperature()).toBe(32);
    });

    it('can reset the temp back to 20', () => {
        const thermostat = new Thermostat();
        thermostat.setPowerSavingMode(false);
        for (let i = 0; i< 20; i++){
            thermostat.up();
        };
        thermostat.reset();
        expect(thermostat.getTemperature()).toBe(20);
    });

});