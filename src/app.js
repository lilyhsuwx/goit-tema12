const targetDate = new Date("Mar, 8, 2027");

const daysEl = document.querySelector('[data-value="days"]');
const hoursEl = document.querySelector('[data-value="hours"]');
const minutesEl = document.querySelector('[data-value="mins"]');
const secondsEl = document.querySelector('[data-value="secs"]');

const day = ["неділя","понеділок","вівторок", "середа","четвер","п'ятниця","субота"]

const month = ["Січень","Лютий","Березень", "Квітень","Травень","Червень","Липень","Серпень", "Вересень","Жовтень","Листопад","Грудень"]

const id = setInterval(() => {
    const currentDate = new Date();
    const time = (targetDate - currentDate);

    if (time <= 0) {
        clearInterval(id);
        return
    }


    const days = Math.floor(time / (1000 * 60 * 60 * 24));
    const hours = Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const secs = Math.floor((time % (1000 * 60)) / 1000);

    daysEl.textContent = days;
    hoursEl.textContent = hours;
    minutesEl.textContent = mins;
    secondsEl.textContent = secs;
}, 1000);