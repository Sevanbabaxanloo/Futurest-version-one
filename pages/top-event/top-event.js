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
