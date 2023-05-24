class Thermostat {
    constructor() {
        this.defaultTemp = 20
        this.temperature = this.defaultTemp
        this.maxTemp = 25
    }

    getTemperature() {
        return this.temperature
    }

    up() {
        if (this.temperature <  this.maxTemp) {
            this.temperature += 1
        }
    }

    down() {
        this.temperature -= 1
    }

    setPowerSavingMode(status) {
        if (status === true) {
            this.maxTemp = 25
        } else {
            this.maxTemp = 32
        }
    }

    reset() {
        this.temperature = this.defaultTemp
    }

};

module.exports = Thermostat;

