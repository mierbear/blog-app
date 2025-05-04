'use strict';

const clockEl = document.querySelector(`.clock`);

const setTime = (time) => {
    clockEl.textContent = time;
}

setTime(new Date().toLocaleTimeString())

setInterval(() => {
    setTime(new Date().toLocaleTimeString())
}, 1000);

const postStar = document.querySelectorAll(`.post-star`);

postStar.forEach((star) => {
    star.addEventListener(`click`, () => {
        star.src = `/svg/starlike.svg`;
    })
});

const deletePost = function(postId) {
    fetch(`/delete/${postId}`, { method: "DELETE" })
    .then(() => window.location.reload());
}