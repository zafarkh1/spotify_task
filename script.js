//                          navbar
let sideMenu = document.getElementById("sideMenu");

function closeMenu() {
  sideMenu.style.right = "-200px";
}
function openMenu() {
  sideMenu.style.right = "0";
}

//                          spotlight
var swiper = new Swiper(".swiper-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
      spaceBetween: 20,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
    1024: {
      slidesPerView: 3,
      spaceBetween: 30,
    },
  },
});

//                           email
function validateEmail() {
  let emailInput = document.getElementById("emailTest");
  let successMessage = document.getElementById("successMessage");
  let errorMessage = document.getElementById("errorMessage");

  // Regular expression for basic email validation
  let emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  console.log("Email value:", emailInput.value);
  console.log("Email validation result:", emailRegex.test(emailInput.value));

  if (emailRegex.test(emailInput.value)) {
    document.getElementById("emailForm").style.display = "none";
    successMessage.style.display = "block";
    errorMessage.style.display = "none";
  } else {
    successMessage.style.display = "none";
    errorMessage.style.display = "block";
  }
}

//                           Time
function updateClock(timeZone, elementId) {
  const options = {
    timeZone: timeZone,
    hour: "numeric",
    minute: "numeric",
    second: "numeric",
  };

  const formatter = new Intl.DateTimeFormat("en-US", options);
  const timeString = formatter.format(new Date());

  document.getElementById(elementId).innerText = `${timeString}`;
}

function updateAllClocks() {
  updateClock("Asia/Tashkent", "uzbekistanClock");
  updateClock("Europe/London", "ukClock");
  updateClock("America/New_York", "usaClock");
}

setInterval(updateAllClocks, 1000);
updateAllClocks();
