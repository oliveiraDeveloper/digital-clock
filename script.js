const toggleBtn = document.querySelector(".toggle-btn");
const toggleContainer = document.querySelector(".watch-toggle-theme");
const bodyTheme = document.querySelector("body");

toggleContainer.addEventListener("click", () => {
    toggleBtn.classList.toggle("toggle");
    bodyTheme.classList.toggle("dark");
});

const hours = document.getElementById("hours");
const minutes = document.getElementById("minutes");
const seconds = document.getElementById("seconds");
const days = document.getElementById("days");
const months = document.getElementById("months");
const years = document.getElementById("years");

function digitalClock() {
    const strMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September" ,"October", "November", "December"]
    const dateNow = new Date();
    const displayHours = dateNow.getHours();
    const displayMinutes = dateNow.getMinutes();
    const displaySeconds = dateNow.getSeconds();
    const displayDays = dateNow.getDate();
    const displayMonths = dateNow.getMonth();
    const displayYears = dateNow.getFullYear();

    hours.innerHTML = String(displayHours).padStart(2, "0");
    minutes.innerHTML = String(displayMinutes).padStart(2, "0");
    seconds.innerHTML = String(displaySeconds).padStart(2, "0");
    days.innerHTML = String(displayDays).padStart(2, "0");
    months.innerHTML = strMonths[displayMonths];
    years.innerHTML = displayYears;
}


digitalClock()
setInterval(digitalClock, 1000);