'use strict';
function calculateTotalMortgage(percent, contribution, amount, date) {
    if(Number.isNaN(percent)) {
        return `Параметр Процент содержит неправильное значение ${percent}`;
    } else if (Number.isNaN(contribution)) {
        return `Параметр первоначального взноса содержит неправильное значение ${contribution}`;
    } else if (Number.isNaN(amount)) {
        return `Параметр суммы кредита содержит неправильное значение ${amount}`;
    } else if (Number.isNaN(date)) {
        return `Параметр даты содержит неправильное значение ${date}`;
    };
    const remainder = amount - contribution;
    const paymentMonths = date.getMonth() - new Date().getMonth() + (12 * (date.getFullYear() - new Date().getFullYear()));
    const monthlyPercent = percent / 100 / 12;
    const payment = remainder * (monthlyPercent + monthlyPercent / (Math.pow(1 + monthlyPercent, paymentMonths) - 1));
    console.log(+(payment * paymentMonths).toFixed(2));
    return +(payment * paymentMonths).toFixed(2);
};


function getGreeting(name) {
    console.log(`Привет, мир! Меня зовут ${name ? name : 'Аноним'}`);
    return `Привет, мир! Меня зовут ${name ? name : 'Аноним'}`;
};