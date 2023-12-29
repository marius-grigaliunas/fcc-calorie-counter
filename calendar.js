let date = new Date();
let year = date.getFullYear();
let month = date.getMonth();

const day = document.querySelector(".calendar-dates");
const currentMonth = document.querySelector(".current-month");
const navButtons = document.querySelectorAll(".calendar-navigation span");

const months = ["January", "February", "March", "April", "May", "June", "July", "August",
                "September", "October", "November", "December"];

const generateCalendar = () => {

    //get the last date of the previous month
    let dateLast_MonthPrev = new Date(year, month, 0).getDate();
    //get the last date of the month
    let dateLast = new Date(year, month+1, 0).getDate();
    
    // get the name of the first day of the month. 0 - sunday, 1- monday ...
    let dayFirst = new Date(year, month, 1).getDay();
    //get the name of the last day of the month
    let dayLast = new Date(year, month, dateLast).getDay();

    let calendarString = "";


    for(let i = dayFirst; i > 0; i--) {
    }
};

generateCalendar();