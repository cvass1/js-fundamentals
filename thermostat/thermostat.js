class Thermostat {
    constructor() {
        this.defaultTemp = 20
        this.temperature = this.defaultTemp
        this.maxTemp = 25
        this.minTemp = 10
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
        if (this.temperature > this.minTemp) {
            this.temperature -= 1
        }
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

    energyUsage() {
        if (this.temperature < 18) {
            return 'low-usage';
        } else if (this.temperature <=25) {
            return 'medium-usage';
        } else {
            return 'high-usage';
        };
    }

};

module.exports = Thermostat;

