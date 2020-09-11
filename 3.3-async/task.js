class AlarmClock {
    constructor() {
        this.alarmCollection = [];
        this.timerId = null;
    };

    addClock(time, callback, id) {
        if (!id) {
            throw new Error('Не передан параметр id');
        };

        if (this.alarmCollection.some(obj => obj.id === id)) {
            return console.error('Звонок с таким id уже существует!');
        };
        this.alarmCollection.push({ id: id, time: time, callback: callback });
    };

    removeClock(id) {
        if (this.alarmCollection = this.alarmCollection.filter(obj => obj.id != id)) {
            return true;
        } else {
            return false;
        };
    };

    getCurrentFormattedTime() {
        // return new Date().getHours() + ':' + ('0' + new Date().getMinutes()).slice(-2);
        return (new Date()).toLocaleString('ru', {hour: 'numeric', minute: 'numeric'});
    };

    start() {
        function checkClock(alarm) {
            if (alarm.time == this.getCurrentFormattedTime()) {
                alarm.callback();
            } else if (!this.timerId) {
                this.timerId = setInterval(this.alarmCollection.forEach(alarm => checkClock(alarm)), 5000);
            };
        };
    };

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    };

    printAlarms() {
        return this.alarmCollection.forEach(obj => console.log(`id: ${obj.id} - time: ${obj.time}`))
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
};