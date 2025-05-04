'use strict';

const clockEl = document.querySelector(`.clock`);

const setTime = (time) => {
    clockEl.textContent = time;
}

setTime(new Date().toLocaleTimeString())

setInterval(() => {
    setTime(new Date().toLocaleTimeString())
}, 1000);

console.log(`meow`);

const postStar = document.querySelector(`.post-star`);

postStar.addEventListener(`click`, () => {
    postStar.src = `/svg/starlike.svg`;
})