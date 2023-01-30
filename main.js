const hourHand = document.querySelector('.hour-hand');
const minHand = document.querySelector('.min-hand');
const secondHand = document.querySelector('.sac-hand');
const setDate = () => {
    const date = new Date();
    const secondRotate = ((date.getSeconds() / 60) * 360);
    console.log(date.getMinutes())
    secondHand.style.transform = `rotate(${secondRotate + 90}deg)`;
    const minRotate = ((date.getMinutes() / 60) * 360);
    minHand.style.transform = `rotate(${minRotate + 90}deg)`;
    const hourRotate = ((date.getHours() / 12) * 360);
    hourHand.style.transform = `rotate(${hourRotate + 90}deg)`;
}

setInterval(() => {
    setDate()
}, 1000)