'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {

    const remainder = amount - contribution;
    function countMonths(startDate, endDate) {
        let months;
        months = (endDate.getFullYear() - startDate.getFullYear()) * 12;
        months -= startDate.getMonth();
        months += endDate.getMonth();
        return months <= 0 ? 0 : months;
    }
    const nowDate = new Date();
    const paymentMonths = countMonths(nowDate, date);
    const monthlyPercent = percent / 100 / 12;
    const payment = remainder * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, paymentMonths) - 1));
    console.log(+(payment * paymentMonths).toFixed(2));
    return +(payment * paymentMonths).toFixed(2);
};


function getGreeting(name) {
    console.log(`Привет, мир! Меня зовут ${name ? name : 'Аноним'}`);
    return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}`;
};