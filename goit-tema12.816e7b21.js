const targetDate = new Date("Mar 8, 2026");
const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minutesEl = document.querySelector('[data-value="mins"]');
const secondsEl = document.querySelector('[data-value="secs"]');
const day = [
    "\u043D\u0435\u0434\u0456\u043B\u044F",
    "\u043F\u043E\u043D\u0435\u0434\u0456\u043B\u043E\u043A",
    "\u0432\u0456\u0432\u0442\u043E\u0440\u043E\u043A",
    "\u0441\u0435\u0440\u0435\u0434\u0430",
    "\u0447\u0435\u0442\u0432\u0435\u0440",
    "\u043F'\u044F\u0442\u043D\u0438\u0446\u044F",
    "\u0441\u0443\u0431\u043E\u0442\u0430"
];
const month = [
    "\u0421\u0456\u0447\u0435\u043D\u044C",
    "\u041B\u044E\u0442\u0438\u0439",
    "\u0411\u0435\u0440\u0435\u0437\u0435\u043D\u044C",
    "\u041A\u0432\u0456\u0442\u0435\u043D\u044C",
    "\u0422\u0440\u0430\u0432\u0435\u043D\u044C",
    "\u0427\u0435\u0440\u0432\u0435\u043D\u044C",
    "\u041B\u0438\u043F\u0435\u043D\u044C",
    "\u0421\u0435\u0440\u043F\u0435\u043D\u044C",
    "\u0412\u0435\u0440\u0435\u0441\u0435\u043D\u044C",
    "\u0416\u043E\u0432\u0442\u0435\u043D\u044C",
    "\u041B\u0438\u0441\u0442\u043E\u043F\u0430\u0434",
    "\u0413\u0440\u0443\u0434\u0435\u043D\u044C"
];
const id = setInterval(()=>{
    const currentDate = new Date();
    const time = targetDate - currentDate;
    if (time <= 0) {
        clearInterval(id);
        return;
    }
    const days = Math.floor(time / 86400000);
    const hours = Math.floor(time % 86400000 / 3600000);
    const mins = Math.floor(time % 3600000 / 60000);
    const secs = Math.floor(time % 60000 / 1000);
    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = mins;
    secondsEl.textContent = secs;
}, 1000);

//# sourceMappingURL=goit-tema12.816e7b21.js.map
