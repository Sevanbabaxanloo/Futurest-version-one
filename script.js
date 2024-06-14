//start of search animation function

const searchInput = document.getElementById("searchInput");
const redText = document.getElementById("redText");
const greenText = document.getElementById("greenText");

if (searchInput) {
  searchInput.addEventListener("focus", function () {
    redText.style.transform = "translateY(50%)";
    greenText.style.opacity = 0;
    greenText.style.transform = "translateY(50%)";
  });

  searchInput.addEventListener("input", function () {
    redText.style.opacity = this.value ? 0 : 1;
  });

  searchInput.addEventListener("blur", function () {
    if (!this.value) {
      redText.style.transform = "translateY(0)";
      greenText.style.opacity = 1;
      greenText.style.transform = "translateY(0)";
    }
  });
}

// start of header function

function checkScroll() {
  const navbar = document.getElementById("navbar");
  if (window.scrollY > 20) {
    navbar.classList.add("black-bg");
  } else {
    navbar.classList.remove("black-bg");
  }
}

window.addEventListener("scroll", checkScroll);

// start of slider

var swiper = new Swiper(".mySwiper", {
  loop: true,
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicMainBullets: 1,
  },
  on: {
    paginationUpdate: function () {
      const bullets = document.querySelectorAll(".swiper-pagination-bullet");
      const activeIndex = this.realIndex;

      bullets.forEach((bullet, index) => {
        if (index === activeIndex) {
          bullet.style.opacity = "1";
        } else if (index === 0 || index === 6) {
          bullet.style.opacity = "0.2";
        } else if (index === 1 || index === 5) {
          bullet.style.opacity = "0.4";
        } else if (index === 2 || index === 4) {
          bullet.style.opacity = "0.6";
        } else if (index === 3) {
          bullet.style.opacity = "1";
        }
      });
    },
  },
  speed: 1500,
});

// Top events scroll function

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("newScrollContainer");

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    scrollContainer.classList.remove("cursor-grab");
    scrollContainer.classList.add("cursor-grabbing");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
    scrollContainer.classList.remove("cursor-grabbing");
    scrollContainer.classList.add("cursor-grab");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
    scrollContainer.classList.remove("cursor-grabbing");
    scrollContainer.classList.add("cursor-grab");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2; //scroll-fast
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  });
});

/*  Browsing avtive color */

document.addEventListener("DOMContentLoaded", () => {
  const buttons = document.querySelectorAll(".browsing-button");

  buttons.forEach((button) => {
    button.addEventListener("click", () => {
      buttons.forEach((btn) => btn.classList.remove("browsing-button-active"));
      button.classList.add("browsing-button-active");
    });
  });
});

// Active Browsing scroll function

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("scrollContainer");

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("active");
    scrollContainer.style.cursor = "grabbing";
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
    scrollContainer.style.cursor = "grab";
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.remove("active");
    scrollContainer.style.cursor = "grab";
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 1;
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  scrollContainer.addEventListener("wheel", (e) => {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  });
});

// Browsing icon rotate and pop up fonction

document.addEventListener("DOMContentLoaded", function () {
  const arrowsImage = document.getElementById("arrowsImage");
  const popupDiv = document.querySelector(".smal-popup");

  if (arrowsImage) {
    arrowsImage.addEventListener("click", function () {
      if (arrowsImage.classList.contains("rotate-0")) {
        arrowsImage.classList.remove("rotate-0");
        arrowsImage.classList.add("rotate-90");
      } else {
        arrowsImage.classList.remove("rotate-90");
        arrowsImage.classList.add("rotate-0");
      }
    });
  }

  if (arrowsImage && popupDiv) {
    arrowsImage.addEventListener("click", function () {
      popupDiv.classList.toggle("popuphidden");
      popupDiv.classList.toggle("popupvisible");
    });
  }

  document
    .getElementById("addTextButton")
    .addEventListener("click", function () {
      const citynamesDivs = document.querySelectorAll(".citynames");
      const names = [
        "New York",
        "Los Angeles",
        "Chicago",
        "Houston",
        "Phoenix",
        "Philadelphia",
      ];
      citynamesDivs.forEach(function (div, index) {
        div.textContent = names[index];
        div.classList.add("city-padding");
      });
    });
});

// Open QR pop up function

document.querySelectorAll(".toggleButton").forEach(function (element) {
  element.addEventListener("click", function () {
    const toggleDivContainer =
      document.querySelector("#toggleDiv").parentElement;
    const body = document.body;
    if (toggleDivContainer.classList.contains("hidden")) {
      toggleDivContainer.classList.remove("hidden");
      body.classList.add("no-scroll");
    } else {
      toggleDivContainer.classList.add("hidden");
      body.classList.remove("no-scroll");
    }
  });
});

document.addEventListener("click", function (event) {
  const toggleDivContainer = document.querySelector("#toggleDiv").parentElement;
  const specificDiv = document.querySelector(".content-container");
  const body = document.body;

  const isClickInsideToggleDiv = toggleDivContainer.contains(event.target);
  const isClickInsideSpecificDiv =
    specificDiv && specificDiv.contains(event.target);
  const isToggleButton = event.target.closest(".toggleButton");

  if (!isToggleButton && !isClickInsideSpecificDiv) {
    toggleDivContainer.classList.add("hidden");
    body.classList.remove("no-scroll");
  }
});

document.addEventListener("keydown", function (event) {
  const toggleDivContainer = document.querySelector("#toggleDiv").parentElement;
  const body = document.body;
  if (event.key === "Escape") {
    toggleDivContainer.classList.add("hidden");
    body.classList.remove("no-scroll");
  }
});

// Mobile menu function and animation

document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.getElementById("hamburger");
  const menu = document.getElementById("menu");
  const body = document.body;

  menu.classList.add("mobile-menu-hidden");

  hamburger.addEventListener("click", function () {
    hamburger.classList.toggle("open");
    if (menu.classList.contains("mobile-menu-hidden")) {
      menu.classList.remove("mobile-menu-hidden");
      menu.classList.add("mobile-menu-visible");
      body.classList.add("mobile-menu-scroll");
    } else {
      menu.classList.remove("mobile-menu-visible");
      menu.classList.add("mobile-menu-hidden");
      body.classList.remove("mobile-menu-scroll");
    }
  });
});

// question pop up

document.addEventListener("DOMContentLoaded", function () {
  const contactButton = document.getElementById("contactButton");
  const toggleDivContact = document.getElementById("toggleDivContact");
  const contentContainer = document.querySelector(".content-container");

  function togglePopup() {
    toggleDivContact.classList.toggle("hidden-element");
    toggleDivContact.classList.toggle("full-screen-popup");

    if (toggleDivContact.classList.contains("full-screen-popup")) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }

  function hidePopup() {
    toggleDivContact.classList.add("hidden-element");
    toggleDivContact.classList.remove("full-screen-popup");
    document.body.style.overflow = "auto";
  }

  contactButton.addEventListener("click", togglePopup);

  toggleDivContact.addEventListener("click", function (e) {
    if (!contentContainer.contains(e.target)) {
      hidePopup();
    }
  });

  document.addEventListener("keydown", function (e) {
    if (
      e.key === "Escape" &&
      toggleDivContact.classList.contains("full-screen-popup")
    ) {
      hidePopup();
    }
  });
});
