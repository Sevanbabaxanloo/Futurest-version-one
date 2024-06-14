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
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },
  speed: 1500,
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
