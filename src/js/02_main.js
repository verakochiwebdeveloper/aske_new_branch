const nowTime = new Date(),
  date = nowTime.getDate(),
  month = nowTime.getMonth(),
  monthLast = nowTime.getMonth() - 1 == -1 ? 11 : nowTime.getMonth() - 1,
  monthNext = nowTime.getMonth() + 1 == 12 ? 0 : nowTime.getMonth() + 1,
  year = nowTime.getFullYear(),
  daysInMonth = new Date(year, month + 1, 0).getDate(),
  daysInMonthLast = new Date(year, month, 0).getDate(),
  daysInMonthBeforeLast = new Date(year, month, 0).getDate(),
  daysInMonthNext = new Date(year, month + 2, 0).getDate(),
  daysWeek0 = new Date(`${year}-${month + 1}-1`).getDay(),
  daysWeek1 = new Date(`${year}-${month + 2}-1`).getDay(),
  daysWeek2 = new Date(`${year}-${month}-1`).getDay(),
  daysWeekCurrent = daysWeek0 == 0 ? 7 : daysWeek0,
  daysWeekNext = daysWeek1 == 0 ? 7 : daysWeek1,
  daysWeekLast = daysWeek2 == 0 ? 7 : daysWeek2,
  tableDate = document.querySelectorAll(".calendar_day"),
  calendar = document.querySelector(".calendar_days"),
  calendarMonth = document.querySelector(".calendar_month"),
  strelkaLast = document.querySelectorAll(".calendar_strelka")[0],
  strelkaNext = document.querySelectorAll(".calendar_strelka")[1],
  dataTitle = document.querySelector(".invent_title"),
  inventListBlock = document.querySelector(".calendar_invent"),
  closeInvent = document.querySelector(".calendar_close"),
  inventNone = document.querySelector(".inventlist-none"),
  inventCompleted = document.querySelector(".inventlist-comleted"),
  inventlistFull = document.querySelector(".inventlist-full"),
  nameMonth = {
    0: "Января",
    1: "Февраля",
    2: "Марта",
    3: "Апреля",
    4: "Мая",
    5: "Июня",
    6: "Июля",
    7: "Августа",
    8: "Сентября",
    9: "Октября",
    10: "Ноября",
    11: "Декабаря",
  },
  nameMonthTitle = {
    0: "Январь",
    1: "Февраль",
    2: "Март",
    3: "Апрель",
    4: "Май",
    5: "Июнь",
    6: "Июль",
    7: "Август",
    8: "Сентябрь",
    9: "Октябрь",
    10: "Ноябрь",
    11: "Декабарь",
  },
  nameMonthNumer = {
    0: "01",
    1: "02",
    2: "03",
    3: "04",
    4: "05",
    5: "06",
    6: "07",
    7: "08",
    8: "09",
    9: "10",
    10: "11",
    11: "12",
  };

// для backenda , с этого объекта получаю данные для календаря
const objInvent = {
  17.01: [
    ["артем", "нарвская", "17:45"],
    ["артем", "нарвская", "18:45"],
  ],
  29.01: [
    ["никита", "нарвская", "17:45"],
    ["андрей", "нарвская", "18:45"],
  ],
  "05.02": [["артем", "нарвская", "17:45"]],
  "06.02": [["артем", "нарвская", "17:45"]],
  "09.02": [
    ["артем", "нарвская", "18:45"],
    ["артем", "нарвская", "17:45"],
    ["артем", "нарвская", "19:45"],
  ],
  17.02: [
    ["артем", "автово", "17:45"],
    ["артем", "автово", "18:45"],
  ],
  "08.03": [["артем", "автово", "18:45"]],
  25.03: [
    ["артем", "автово", "18:45"],
    ["артем", "ветеранов", "18:45"],
    ["артем", "автово", "18:45"],
    ["артем", "ветеранов", "18:45"],
    ["артем", "автово", "18:45"],
    ["артем", "ветеранов", "18:45"],
    ["артем", "автово", "18:45"],
    ["артем", "ветеранов", "18:45"],
    ["артем", "автово", "18:45"],
    ["артем", "ветеранов", "18:45"],
    ["артем", "автово", "18:45"],
    ["артем", "ветеранов", "18:45"],
  ],
};

let monthCount = 0;

// отрисовка дат и месяца

const calendarFunc = () => {
  function fullDate(mas, elementLast, currentMonth, elementDaysLast) {
    let count = 1,
      countMinus = elementLast + 2 - elementDaysLast,
      countPlus = 1;

    for (let i = 1; i <= mas.length; i++) {
      const element = mas[i - 1];
      if (i >= elementDaysLast && currentMonth >= count) {
        element.textContent = count++;
      } else if (i < elementDaysLast) {
        element.textContent = countMinus++;
        element.classList.add("othermonth");
      } else {
        element.textContent = countPlus++;
        element.classList.add("othermonth");
      }
    }
  }

  function calendarMonthVisible(element) {
    calendarMonth.textContent = nameMonthTitle[element];
  }

  function ClearningText(mas) {
    for (let i = 0; i < mas.length; i++) {
      const element = mas[i];
      element.textContent = "";
      element.classList.remove("othermonth");
      element.classList.remove("border_date");
    }
    ClearningBackground(tableDate);
  }

  function ClearningBackground(mas) {
    for (let i = 0; i < mas.length; i++) {
      const element = mas[i];
      element.classList.remove("background_date");
    }
  }

  function currentDateClass(mas) {
    for (let i = 0; i < mas.length; i++) {
      const element = mas[i];
      if (
        element.textContent == date &&
        !element.classList.contains("othermonth")
      ) {
        element.classList.add("calendar_current-day");
      }
    }
  }

  function currentDateNone(mas) {
    for (let i = 0; i < mas.length; i++) {
      const element = mas[i];
      element.classList.remove("calendar_current-day");
    }
  }

  function inventFullVisible(mas) {
    inventlistFull.innerHTML = "";
    inventlistFull.classList.add("display_block");

    for (let i = 0; i < mas.length; i++) {
      const element = mas[i];

      const div = document.createElement("div");
      const pName = document.createElement("p");
      const pLocation = document.createElement("p");
      const pTime = document.createElement("p");

      pName.textContent = element[0];
      pLocation.textContent = element[1];
      pTime.textContent = element[2];

      div.classList.add("inventlist-full-div");
      pName.classList.add("inventlist-full-text");
      pLocation.classList.add("inventlist-full-text");
      pTime.classList.add("inventlist-full-text");

      inventlistFull.appendChild(div);
      div.appendChild(pTime);
      div.appendChild(pLocation);
      div.appendChild(pName);
    }
  }

  function inventVisible(elemData, elemMonth) {
    inventNone.classList.remove("display_block");
    inventCompleted.classList.remove("display_block");
    inventlistFull.classList.remove("display_block");

    if (elemData < 10) {
      elemData = "0" + elemData;
    }
    const valueInventObg = objInvent[elemData + "." + elemMonth];
    if (valueInventObg === undefined) {
      inventNone.classList.add("display_block");
    } else {
      if (
        (Number(elemData) < date && Number(elemMonth) == month + 1) ||
        Number(elemMonth) < month + 1
      ) {
        inventCompleted.classList.add("display_block");
      } else {
        inventFullVisible(valueInventObg);
      }
    }
  }

  function borderDate() {
    borderMonth = nameMonthNumer[month + monthCount];
    for (let i = 0; i < tableDate.length; i++) {
      const element = tableDate[i];
      let borderDateText;

      if (!element.classList.contains("othermonth")) {
        if (Number(element.textContent) < 10) {
          borderDateText = "0" + element.textContent + "." + borderMonth;
        } else {
          borderDateText = element.textContent + "." + borderMonth;
        }

        if (objInvent[borderDateText] !== undefined) {
          element.classList.add("border_date");
        }
      }
    }
  }

  calendarMonthVisible(month);
  fullDate(tableDate, daysInMonthLast, daysInMonth, daysWeekCurrent);
  currentDateClass(tableDate);

  strelkaLast.addEventListener("click", function () {
    ClearningText(tableDate);
    if (strelkaNext.classList.contains("display_none")) {
      fullDate(tableDate, daysInMonthLast, daysInMonth, daysWeekCurrent);
      strelkaNext.classList.remove("display_none");
      calendarMonthVisible(month);
      currentDateClass(tableDate);
      monthCount--;
      borderDate();
    } else {
      fullDate(tableDate, daysInMonthBeforeLast, daysInMonthLast, daysWeekLast);
      strelkaLast.classList.add("display_none");
      calendarMonthVisible(monthLast);
      currentDateNone(tableDate);
      monthCount--;
      borderDate();
    }
  });

  strelkaNext.addEventListener("click", function () {
    ClearningText(tableDate);
    if (strelkaLast.classList.contains("display_none")) {
      fullDate(tableDate, daysInMonthLast, daysInMonth, daysWeekCurrent);
      strelkaLast.classList.remove("display_none");
      calendarMonthVisible(month);
      currentDateClass(tableDate);
      monthCount++;
      borderDate();
    } else {
      fullDate(tableDate, daysInMonth, daysInMonthNext, daysWeekNext);
      strelkaNext.classList.add("display_none");
      calendarMonthVisible(monthNext);
      currentDateNone(tableDate);
      monthCount++;
      borderDate();
    }
  });

  calendar.addEventListener("mousedown", (event) => {
    let data = event.target.textContent,
      screenWidth = window.innerWidth;

    if (screenWidth < 744) {
      inventListBlock.classList.add("display_block");
    }

    if (
      !event.target.classList.contains("othermonth") &&
      event.target.classList.contains("calendar_day")
    ) {
      ClearningBackground(tableDate);
      dataTitle.textContent = `${data} ${nameMonth[month + monthCount]}`;
      event.target.classList.add("background_date");
      inventVisible(data, nameMonthNumer[month + monthCount]);
    }
  });

  closeInvent.addEventListener("click", function () {
    inventListBlock.classList.remove("display_block");
  });

  dataTitle.textContent = `${date} ${nameMonth[month]}`;

  inventVisible(String(date), nameMonthNumer[month]);

  borderDate();
};

if (dataTitle != null) {
  calendarFunc();
}




