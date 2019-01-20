'use strict';

class Clock {

    constructor() {
        setInterval(() => this.theTime(), 1000);
    }

    theTime() {
        let date = new Date(),
            hour = date.toLocaleTimeString();
        return console.log('La hora es: ' + hour);
    }
}
// exportamos nuestra clase
module.exports = Clock;