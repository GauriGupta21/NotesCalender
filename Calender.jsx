import React from "react";
import { useEffect } from "react";

export default function Calender(props) {
  useEffect(() => {
    const currentDate = document.querySelector(".cdate");
    const daysTag = document.querySelector(".days");
    const prevNextIcon = document.querySelectorAll(".icons");
    let date = new Date(),
      currYear = date.getFullYear(),
      currMonth = date.getMonth();
    console.log(date, currYear, currMonth); //1
    const month = [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ]; //3
    const renderCalender = () => {
      let firstDayofMonth = new Date(currYear, currMonth, 1).getDay(); //getting first day of months
      let lastDateofMonth = new Date(currYear, currMonth + 1, 0).getDate(); //getting last date of months
      let lastDayofMonth = new Date(
        currYear,
        currMonth,
        lastDateofMonth
      ).getDay(); //getting last day of months
      let lastDateofLastMonth = new Date(currYear, currMonth, 0).getDate(); //getting last date of  previous months

      let liTag = "";
      for (let index = firstDayofMonth; index > 0; index--) {
        liTag += `<li className="inactive">${lastDateofLastMonth - index}</li>`;
      }
      for (let index = 1; index <= lastDateofMonth; index++) {
        let isToday =
          index === date.getDate() &&
          currMonth === new Date().getMonth() &&
          currYear === new Date().getFullYear()
            ? "active"
            : "";
        // console.log(index);
        liTag += `<li className=${isToday}>${index}</li>`;
      }
      for (let index = lastDayofMonth; index < 6; index++) {
        liTag += `<li className="inactive">${index - lastDayofMonth + 1}</li>`;
      }

      //   console.log(lastDateofMonth);
      currentDate.innerText = `${month[currMonth]}${currYear} `;
      daysTag.innerHTML = liTag;
    }; //2
    renderCalender();
    prevNextIcon.forEach((icon) => {
      icon.addEventListener("click", () => {
        currMonth = icon.id === "prev" ? currMonth - 1 : currMonth + 1;
        if (currMonth < 0 || currMonth > 11) {
          date = new Date(currYear, currMonth);
          currYear = date.getFullYear();
          currMonth = date.getMonth();
        } else {
          date = new Date();
        }
        renderCalender();
        // console.log(icon);
      });
    });

    document.querySelectorAll(".days li").forEach((date) => {
      date.addEventListener("click", () => {
        props.setCurrDate(
          date.innerText + "-" + month[currMonth] + "-" + currYear
        );
        // console.log(date.innerText, month[currMonth], currYear);
        // props.getAllNotes(
        //   date.innerText + "-" + month[currMonth] + "-" + currYear,
        //   props.allnote
        // );
        console.log(props.allnote)
        for (let i = 0; i < props.allnote.length; i++) {
          if (
            props.allnote[i].date ==
            date.innerText + "-" + month[currMonth] + "-" + currYear
          ) {
        }
        console.log(props.allnote[i]);
        }
        console.log(props.allnote)
      }); //jis bhi date pe click krne me
    });
  }, []);

  return (
    <>
      <div className="wrapper">
        <header>
          <p className="cdate">January 2024</p>
          <div className="icons">
            <span id="prev" className="material-symbols-outlined">
              keyboard_arrow_left
            </span>
            <span id="next" className="material-symbols-outlined">
              keyboard_arrow_right
            </span>
          </div>
        </header>
        <div className="calender">
          <ul className="weeks">
            <li>Sun</li>
            <li>Mon</li>
            <li>Tue</li>
            <li>Wed</li>
            <li>Thu</li>
            <li>Fri</li>
            <li>Sat</li>
          </ul>
          <ul className="days"></ul>
        </div>
      </div>
    </>
  );
}
