// Mobile Navigation with X mark toggle
const hamburger = document.querySelector(".hamburger");
const navLinks = document.querySelector(".nav-links");

hamburger.addEventListener("click", () => {
  navLinks.classList.toggle("active");

  if (navLinks.classList.contains("active")) {
    hamburger.innerHTML = '<i class="fas fa-times"></i>';
  } else {
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';
  }
});

// Close mobile menu when clicking on a link
document.querySelectorAll(".nav-links a").forEach((link) => {
  link.addEventListener("click", () => {
    navLinks.classList.remove("active");
    hamburger.innerHTML = '<i class="fas fa-bars"></i>'; // Reset to hamburger icon
  });
});

// Initialize Swiper
const swiper = new Swiper(".featuredSwiper", {
  slidesPerView: 1,
  spaceBetween: 20,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  breakpoints: {
    640: {
      slidesPerView: 2,
    },
    992: {
      slidesPerView: 3,
    },
    1200: {
      slidesPerView: 4,
    },
  },
});

// Countdown Timer
const targetDate = new Date();
targetDate.setDate(targetDate.getDate() + 2); // 2 days from now

function updateCountdown() {
  const countdownElements = document.querySelectorAll(".offer-timer");

  countdownElements.forEach((element) => {
    const daysElement = element.querySelector(
      ".timer-unit:nth-child(1) .timer-value"
    );
    const hoursElement = element.querySelector(
      ".timer-unit:nth-child(2) .timer-value"
    );
    const minutesElement = element.querySelector(
      ".timer-unit:nth-child(3) .timer-value"
    );
    const secondsElement = element.querySelector(
      ".timer-unit:nth-child(4) .timer-value"
    );

    if (!daysElement || !hoursElement || !minutesElement || !secondsElement) {
      console.warn("One or more timer-value elements are missing.");
      return;
    }

    const now = new Date();
    const diff = targetDate - now;

    if (diff <= 0) {
      // Timer has ended
      daysElement.textContent = "00";
      hoursElement.textContent = "00";
      minutesElement.textContent = "00";
      secondsElement.textContent = "00";
      return;
    }

    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);

    daysElement.textContent = days.toString().padStart(2, "0");
    hoursElement.textContent = hours.toString().padStart(2, "0");
    minutesElement.textContent = minutes.toString().padStart(2, "0");
    secondsElement.textContent = seconds.toString().padStart(2, "0");
  });
}

// Update countdown every second
setInterval(updateCountdown, 1000);
updateCountdown(); // Initial call

// Add to cart animation
document.querySelectorAll(".add-to-cart").forEach((button) => {
  button.addEventListener("click", function () {
    this.innerHTML = '<i class="fas fa-check"></i> Added';
    this.style.backgroundColor = "#4CAF50";

    setTimeout(() => {
      this.innerHTML = "Add to Cart";
      this.style.backgroundColor = "var(--secondary)";
    }, 2000);
  });
});

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach((anchor) => {
  anchor.addEventListener("click", function (e) {
    e.preventDefault();

    const targetId = this.getAttribute("href");
    if (targetId === "#") return;

    const targetElement = document.querySelector(targetId);
    if (targetElement) {
      window.scrollTo({
        top: targetElement.offsetTop - 80,
        behavior: "smooth",
      });
    }
  });
});

// Newsletter form submission
const newsletterForm = document.querySelector(".newsletter-form");
if (newsletterForm) {
  newsletterForm.addEventListener("submit", function (e) {
    e.preventDefault();
    const emailInput = this.querySelector('input[type="email"]');
    alert(
      `Thank you for subscribing with ${emailInput.value}! You'll receive our latest deals soon.`
    );
    emailInput.value = "";
  });
}
