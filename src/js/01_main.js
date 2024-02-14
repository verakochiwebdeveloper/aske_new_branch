

//header формы

const buttonMenu = document.querySelector(".mini-header_burger"),
  headerlist = document.querySelector(".mini-header_list"),
  burgerImg = document.querySelectorAll(".mini-header_burger-img"),
  burgerImgChange = () => {
    headerlist.classList.toggle("burger-visible");
    burgerImg[0].classList.toggle("burger-active");
    burgerImg[1].classList.toggle("burger-active");
  };

if (buttonMenu != null) {
  buttonMenu.addEventListener("click", burgerImgChange);
}

// другой header

let menuBtn = document.querySelector(".menu__burger");
let menu = document.querySelector(".menu__list");

if (menuBtn != null) {
  menuBtn.addEventListener("click", function () {
    menuBtn.classList.toggle("active");
    menu.classList.toggle("active");
  });
}

// popups личного кабинета

// Редактирование онформации
// Открыть модальное окно
// Проверка на дату

const info = document.querySelector(".info"),
  personal = document.querySelector(".personal-info"),
  office = () => {
    document
      .getElementById("open-modal-btn")
      .addEventListener("click", function () {
        document.getElementById("my-modal").classList.add("open");
      });

    // Закрыть модальное окно
    document
      .getElementById("close-my-modal-btn")
      .addEventListener("click", function () {
        document.getElementById("my-modal").classList.remove("open");
      });
    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.getElementById("my-modal").classList.remove("open");
      }
    });
    // Закрыть модальное окно при клике вне его
    document
      .querySelector("#my-modal .modal__box")
      .addEventListener("click", (event) => {
        event._isClickWithModal = true;
      });
    document.getElementById("my-modal").addEventListener("click", (event) => {
      if (event._isClickWithModal) return;
      event.currentTarget.classList.remove("open");
    });

    // Добавить социальные сети
    // Открыть модальное окно
    document
      .getElementById("open-modal-btn-social-networks")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-social-networks")
          .classList.add("open");
      });
    // Закрыть модальное окно
    document
      .getElementById("close-my-modal-btn-social-networks")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-social-networks")
          .classList.remove("open");
      });
    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document
          .getElementById("my-modal-social-networks")
          .classList.remove("open");
      }
    });
    // Закрыть модальное окно при клике вне его
    document
      .querySelector("#my-modal-social-networks .modal__box-social-networks")
      .addEventListener("click", (event) => {
        event._isClickWithModal = true;
      });
    document
      .getElementById("my-modal-social-networks")
      .addEventListener("click", (event) => {
        if (event._isClickWithModal) return;
        event.currentTarget.classList.remove("open");
      });

    // Добавить выступления
    // Открыть модальное окно
    document
      .getElementById("open-modal-btn-add-performances")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-add-performances")
          .classList.add("open");
      });
    // Закрыть модальное окно
    document
      .getElementById("close-my-modal-btn-add-performances")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-add-performances")
          .classList.remove("open");
      });
    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document
          .getElementById("my-modal-add-performances")
          .classList.remove("open");
      }
    });
    // Закрыть модальное окно при клике вне его
    document
      .querySelector("#my-modal-add-performances .modal__box-add-performances")
      .addEventListener("click", (event) => {
        event._isClickWithModal = true;
      });
    document
      .getElementById("my-modal-add-performances")
      .addEventListener("click", (event) => {
        if (event._isClickWithModal) return;
        event.currentTarget.classList.remove("open");
      });

    // Посмотреть все выступления
    // Открыть модальное окно
    document
      .getElementById("open-modal-btn-more-performances")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-more-performances")
          .classList.add("open");
      });
    // Закрыть модальное окно
    document
      .getElementById("close-my-modal-btn-more-performances")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-more-performances")
          .classList.remove("open");
      });
    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document
          .getElementById("my-modal-more-performances")
          .classList.remove("open");
      }
    });
    // Закрыть модальное окно при клике вне его
    document
      .querySelector(
        "#my-modal-more-performances .modal__box-more-performances"
      )
      .addEventListener("click", (event) => {
        event._isClickWithModal = true;
      });
    document
      .getElementById("my-modal-more-performances")
      .addEventListener("click", (event) => {
        if (event._isClickWithModal) return;
        event.currentTarget.classList.remove("open");
      });

    // Загрузка фото с выступлений
    // Открыть модальное окно
    document
      .getElementById("open-modal-btn-download-photos")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-download-photos")
          .classList.add("open");
      });
    // Закрыть модальное окно
    document
      .getElementById("close-my-modal-btn-download-photos")
      .addEventListener("click", function () {
        document
          .getElementById("my-modal-download-photos")
          .classList.remove("open");
      });
    // Закрыть модальное окно при нажатии на Esc
    window.addEventListener("keydown", (e) => {
      if (e.key === "Escape") {
        document.getElementById("my-modal-download-photos").classList.remove("open");
      }
    });
    // Закрыть модальное окно при клике вне его
    document
      .querySelector("#my-modal-download-photos .modal__box-download-photos")
      .addEventListener("click", (event) => {
        event._isClickWithModal = true;
      });
    document
      .getElementById("my-modal-download-photos")
      .addEventListener("click", (event) => {
        if (event._isClickWithModal) return;
        event.currentTarget.classList.remove("open");
      });
  },
  monthCheck = () => {
    const dateInput = document.getElementById("dateInput");

    // Получаем текущую дату
    const currentDate = new Date();

    // Получаем дату начала текущего месяца
    const startOfMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth(),
      2
    );

    // Получаем дату начала следующего месяца
    const startOfNextMonth = new Date(
      currentDate.getFullYear(),
      currentDate.getMonth() + 2,
      1
    );

    // Устанавливаем атрибуты min и max для элемента input
    dateInput.min = startOfMonth.toISOString().split("T")[0]; // Устанавливаем минимальную дату на начало текущего месяца
    dateInput.max = startOfNextMonth.toISOString().split("T")[0]; // Устанавливаем максимальную дату на начало следующего месяца
  };

if (info != null) {
  office();
  monthCheck();
}

popupImageOpen = () => {
  const galery = document.querySelector('.gallery__photos'),
    popupImgContainerFull = document.querySelector('.popup__gallery-items'),
    popupImgContainer = document.querySelector('.popup__gallery-relative'),
    closeImgOpen = () => {
      popupImgContainer.innerHTML = "";
      popupImgContainerFull.classList.add('display_none');
    },
    imgOpen = (event) => {
      const element = event.target,
        elementSrc = element.src;
      popupImgContainerFull.classList.remove('dispay_none')
      if (element.className == 'gallery__photos-img') {
        const img = document.createElement('img'),
          imgClose = document.createElement('button');

        imgClose.type = 'button';
        img.src = elementSrc;

        img.classList.add("popup__gallery-img")
        imgClose.classList.add("popup__gallery-close")


        popupImgContainer.appendChild(img);
        popupImgContainer.appendChild(imgClose);
        popupImgContainerFull.classList.remove('display_none');

        imgClose.addEventListener('click', closeImgOpen)
      }
    };
  galery.addEventListener('mousedown', imgOpen);
  console.log(popupImgContainerFull);

};

personalInfo = () => {
  // Открыть popup
  document.querySelectorAll(".open-popup").forEach((button) => {
    button.addEventListener("click", function () {
      let target = this.getAttribute("data-target");
      document.getElementById(target).classList.add("open");
    });
  });
  // Закрыть popup
  document.querySelectorAll(".close-popup").forEach((button) => {
    button.addEventListener("click", function () {
      this.closest(".modal-more-performances").classList.remove("open");
    });
  });
  // Закрыть модальное окно при клике вне его
  window.addEventListener("click", (e) => {
    if (e.target.className !== "modal__box-more-performances") {
      e.target.classList.remove("open");
    }
  });

  // Закрыть модальное окно при нажатии на Esc
  window.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      
    }
  });

};

if (personal != null) {
  personalInfo();
  popupImageOpen();
}


