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
        return (new Date()).toLocaleString('ru', { hour: 'numeric', minute: 'numeric' });
    };

    start() {
        let checkClock = alarm => (alarm.time == this.getCurrentFormattedTime() && alarm.callback());
        (!this.timerId) && (this.timerId = setInterval(() => this.alarmCollection.forEach(alarm => checkClock(alarm)), 5000));
    };

    stop() {
        if (this.timerId) {
            clearInterval(this.timerId);
            this.timerId = null;
        };
    };

    printAlarms() {
        console.log(`Печать всех будильников в количестве: ${this.alarmCollection.length}`);
        return this.alarmCollection.forEach(obj => console.log(`Будильник №${obj.id} заведен на ${obj.time}`))
    };

    clearAlarms() {
        this.stop();
        this.alarmCollection = [];
    };
};

function testCase() {
    let phoneAlarm = new AlarmClock();

    phoneAlarm.addClock(phoneAlarm.getCurrentFormattedTime(), () => console.log("Пора вставать!"), 1);
    phoneAlarm.addClock(new Date(Date.now() + 60000).toTimeString().substr(0, 5), () => { console.log("Да встань ты уже"); phoneAlarm.removeClock(2) }, 2);
    phoneAlarm.addClock(new Date(Date.now() + 2 * 60000).toTimeString().substr(0, 5), () => { console.log("Ну наканецтаааа"); phoneAlarm.clearAlarms(); phoneAlarm.printAlarms() }, 3);

    phoneAlarm.printAlarms();

    phoneAlarm.start();
};

testCase();