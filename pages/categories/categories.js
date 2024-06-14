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

// Element placement function and scrolling

document.addEventListener("DOMContentLoaded", function () {
  const scrollContainer = document.getElementById("ScrollContainer");
  const items = scrollContainer.querySelectorAll(".flex-shrink-0");

  function centerOrAlignElement() {
    let middleItem = document.querySelector(".Categories-avtive") || items[3];

    if (middleItem) {
      const middleItemOffset = middleItem.offsetLeft;
      const containerWidth = scrollContainer.clientWidth;
      const middleItemWidth = middleItem.clientWidth;
      const scrollPosition =
        middleItemOffset - containerWidth / 2 + middleItemWidth / 2;

      document
        .querySelector(".Categories-avtive")
        ?.classList.remove("Categories-avtive");

      middleItem.classList.add("Categories-avtive");

      scrollContainer.scrollLeft = scrollPosition;
    }
  }

  centerOrAlignElement();

  window.addEventListener("resize", centerOrAlignElement);

  scrollContainer.addEventListener("wheel", function (e) {
    e.preventDefault();
    scrollContainer.scrollLeft += e.deltaY;
  });

  let isDown = false;
  let startX;
  let scrollLeft;

  scrollContainer.addEventListener("mousedown", (e) => {
    isDown = true;
    scrollContainer.classList.add("cursor-grabbing");
    scrollContainer.classList.remove("cursor-grab");
    startX = e.pageX - scrollContainer.offsetLeft;
    scrollLeft = scrollContainer.scrollLeft;
  });

  scrollContainer.addEventListener("mouseleave", () => {
    isDown = false;
    scrollContainer.classList.add("cursor-grab");
    scrollContainer.classList.remove("cursor-grabbing");
  });

  scrollContainer.addEventListener("mouseup", () => {
    isDown = false;
    scrollContainer.classList.add("cursor-grab");
    scrollContainer.classList.remove("cursor-grabbing");
  });

  scrollContainer.addEventListener("mousemove", (e) => {
    if (!isDown) return;
    e.preventDefault();
    const x = e.pageX - scrollContainer.offsetLeft;
    const walk = (x - startX) * 2;
    scrollContainer.scrollLeft = scrollLeft - walk;
  });

  items.forEach((item) => {
    item.addEventListener("click", () => {
      document
        .querySelector(".Categories-avtive")
        ?.classList.remove("Categories-avtive");

      item.classList.add("Categories-avtive");

      centerOrAlignElement();
    });
  });
});

//Top Events load more function

document.addEventListener("DOMContentLoaded", function () {
  const loadMoreButton = document.querySelector(".load-more-button");
  const gridContainer = document.querySelector(".grid-container");

  loadMoreButton.addEventListener("click", function () {
    for (let i = 0; i < 6; i++) {
      const newDiv = document.createElement("div");
      newDiv.className = "event-card";
      newDiv.innerHTML = `
        <div class="flex-shrink-0">
          <img src="/futurest/image/event-block.svg" alt="" class="w-full h-full object-cover rounded-[12px]" />
          <div class="relative">
            <div class="absolute bottom-0 pt-[36.32px] pb-[18.16px] px-[8px] max-smm:pb-[5px]">
              <div class="flex flex-col gap-[6px]">
                <div class="flex gap-[5.6px]">
                  <div>
                    <img src="/futurest/image/avatarmain.svg" alt="" class="w-[27px] h-[27px] object-cover" />
                  </div>
                  <div>
                    <div class="flex items-center justify-center gap-[2.27px]">
                      <h2 class="text-[#fff] text-[11.3px] font-[600] font-open-sans leading-[15.4px]">Jese Leos</h2>
                      <div class="flex items-center justify-center">
                        <img src="/futurest/image/verifiedcheck.svg" alt="" class="w-[13.6px] h-[13.6px]" />
                      </div>
                    </div>
                    <div>
                      <p class="text-[#F3F3F3] text-[6.8px] font-[400] font-open-sans leading-[9.2px]">Event manager</p>
                    </div>
                  </div>
                </div>
                <div>
                  <div class="flex gap-[13.6px]">
                    <div class="flex flex-col gap-[6px]">
                      <div>
                        <h2 class="text-[#fff] text-[13.6px] font-[700] font-open-sans leading-[18.55px] max-smm:text-[10.93px] max-smm:leading-[14.88px]">Lorem ipsum dolor sit amet</h2>
                      </div>
                      <div class="flex gap-[9px]">
                        <div class="flex gap-[4.5px]">
                          <img src="/futurest/image/calendar.svg" alt="" class="w-[9px] h-[9px]" />
                          <p class="text-[#fff] text-[6.8px] font-[400] font-open-sans leading-[9.2px]">17 Jan, 15:00PM</p>
                        </div>
                        <div class="flex gap-[4.5px]">
                          <img src="/futurest/image/location.svg" alt="" class="w-[9px] h-[9px]" />
                          <p class="text-[#fff] text-[6.8px] font-[400] font-open-sans leading-[9.2px]">Location</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>`;
      gridContainer.appendChild(newDiv);
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
