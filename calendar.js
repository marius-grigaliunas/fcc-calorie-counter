let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();
let today = date.getDate();

const calendar = document.querySelector(".calendar-body");
const currentMonth = document.querySelector(".current-month");
const currentYear = document.querySelector(".current-year");
const navButtons = document.querySelectorAll(".calendar-navigation span");

const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];

const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

currentMonth.textContent = months[month];
currentYear.textContent = year;

const currentFullDate = document.getElementById("current-full-date");
currentFullDate.innerText = `${days[new Date(year, month, today).getDay()]}  ${today} ${months[month]} ${year}`

const generateCalendar = () => {

    //get the last date of the previous month
    let dateLast_MonthPrev = new Date(year, month, 0).getDate();
    //get the last date of the month
    let dateLast = new Date(year, month+1, 0).getDate();
    
    // get the name of the first day of the month. 0 - sunday, 1- monday ...
    let dayFirst = new Date(year, month, 1).getDay();
    //get the name of the last day of the month
    let dayLast = new Date(year, month, dateLast).getDay();

    for(let i = 1; i <= dateLast; i++) {
        let day = new Date(year, month, i).getDay();

        // if first day of the months isn't monday fill it with the last month's dates
        if(i === 1 && day !== 1) {
            let lastMonthDate;

            if(day !== 0) {
                lastMonthDate = dateLast_MonthPrev - day + 1;
            } else {
                lastMonthDate = dateLast_MonthPrev - 7 + 1;
                dayFirst = 7;
            }

            for(let j = 1; j < dayFirst; j++) {
                if(j === 6) {
                    calendar.insertAdjacentHTML('beforeend', `<div class="day weekend last-month">${lastMonthDate + j}</div>`); 
                } else {
                    calendar.insertAdjacentHTML('beforeend', `<div class="day workday last-month">${lastMonthDate + j}</div>`);
                }        
            }

        }

        // if day is weekend day name different classes for coloring
        if(day === 0 || day === 6) {
            if(i === today) {
                calendar.insertAdjacentHTML('beforeend', `<div class="day today weekend">${i}</div>`);
            } else {
                calendar.insertAdjacentHTML('beforeend', `<div class="day weekend">${i}</div>`);
            } 
        } else {
            if(i === today) {
                calendar.insertAdjacentHTML('beforeend', `<div class="day today workday">${i}</div>`);
            } else {
                calendar.insertAdjacentHTML('beforeend', `<div class="day workday">${i}</div>`);
            }
        }

    }

    //if the last day of the month isn't sunday, fill the rest of the week with the next month dates 
    if(dayLast !== 0) {
        for(let i = dayLast + 1; i <= 7; i++) {
            if(i === 6 || i === 7) {
                calendar.insertAdjacentHTML('beforeend', `<div class="day weekend next-month">${i - dayLast}</div>`); 
            } else {
                calendar.insertAdjacentHTML('beforeend', `<div class="day workday next-month">${i - dayLast}</div>`);
            }
        }
    }
};

generateCalendar();

navButtons[0].addEventListener("click", () => {
    if(month === 0) {
        year--;
        month = 11
    } else {
        month--;
    }

    currentMonth.textContent = months[month];
    currentYear.textContent = year;

    calendar.innerHTML = "";
    generateCalendar();
});

navButtons[1].addEventListener("click", () => {
    if(month === 11) {
        year++;
        month = 0;
    } else {
        month++;
    }

    currentMonth.textContent = months[month];
    currentYear.textContent = year;

    calendar.innerHTML = "";
    generateCalendar();
});