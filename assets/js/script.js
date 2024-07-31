'use strict';

// Function to toggle active class
const elementToggleFunc = function (elem) { 
  elem.classList.toggle("active"); 
};

// Sidebar variables
const sidebar = document.querySelector("[data-sidebar]");
const sidebarBtn = document.querySelector("[data-sidebar-btn]");

// Sidebar toggle functionality for mobile
sidebarBtn.addEventListener("click", function () { 
  elementToggleFunc(sidebar); 
});

// Testimonials variables
const testimonialsItem = document.querySelectorAll("[data-testimonials-item]");
const modalContainer = document.querySelector("[data-modal-container]");
const modalCloseBtn = document.querySelector("[data-modal-close-btn]");
const overlay = document.querySelector("[data-overlay]");

// Modal variables
const modalImg = document.querySelector("[data-modal-img]");
const modalTitle = document.querySelector("[data-modal-title]");
const modalText = document.querySelector("[data-modal-text]");

// Modal toggle function
const testimonialsModalFunc = function () {
  modalContainer.classList.toggle("active");
  overlay.classList.toggle("active");
};

// Add click event to all modal items
testimonialsItem.forEach(item => {
  item.addEventListener("click", function () {
    modalImg.src = this.querySelector("[data-testimonials-avatar]").src;
    modalImg.alt = this.querySelector("[data-testimonials-avatar]").alt;
    modalTitle.innerHTML = this.querySelector("[data-testimonials-title]").innerHTML;
    modalText.innerHTML = this.querySelector("[data-testimonials-text]").innerHTML;
    testimonialsModalFunc();
  });
});

// Add click event to modal close button
modalCloseBtn.addEventListener("click", testimonialsModalFunc);
overlay.addEventListener("click", testimonialsModalFunc);

// Custom select variables
const select = document.querySelector("[data-select]");
const selectItems = document.querySelectorAll("[data-select-item]");
const selectValue = document.querySelector("[data-select-value]");
const filterBtn = document.querySelectorAll("[data-filter-btn]");

// Toggle select box
select.addEventListener("click", function () { 
  elementToggleFunc(this); 
});

// Add event to all select items
selectItems.forEach(item => {
  item.addEventListener("click", function () {
    const selectedValue = this.innerText.toLowerCase();
    selectValue.innerText = this.innerText;
    elementToggleFunc(select);
    filterFunc(selectedValue);
  });
});

const filterItems = document.querySelectorAll("[data-filter-item]");
const filterBtns = document.querySelectorAll("[data-filter-btn]");



// Filter function
const filterFunc = function (selectedValue) {
    for (let i = 0; i < filterItems.length; i++) {
      if (selectedValue === "All") {
        filterItems[i].classList.add("active");
      } else if (selectedValue === filterItems[i].dataset.category) {
        filterItems[i].classList.add("active");
      } else {
        filterItems[i].classList.remove("active");
      }
    }
  }

// Add event to all filter button items for large screens
for (let i = 0; i < filterBtns.length; i++) {
    filterBtns[i].addEventListener("click", function () {
      let selectedValue = this.innerText;
      filterFunc(selectedValue);
  
      // Remove active class from all filter buttons
      for (let j = 0; j < filterBtns.length; j++) {
        filterBtns[j].classList.remove("active");
      }
  
      // Add active class to the current filter button
      this.classList.add("active");
    });
  }
// Contact form variables
const form = document.querySelector("[data-form]");
const formInputs = document.querySelectorAll("[data-form-input]");
const formBtn = document.querySelector("[data-form-btn]");

// Add event to all form input fields
formInputs.forEach(input => {
  input.addEventListener("input", function () {
    if (form.checkValidity()) {
      formBtn.removeAttribute("disabled");
    } else {
      formBtn.setAttribute("disabled", "");
    }
  });
});

// Page navigation variables
const navigationLinks = document.querySelectorAll("[data-nav-link]");
const pages = document.querySelectorAll("[data-page]");

// Add event to all nav links
navigationLinks.forEach(link => {
  link.addEventListener("click", function () {
    pages.forEach(page => {
      if (this.innerHTML.toLowerCase() === page.dataset.page) {
        page.classList.add("active");
        navigationLinks.forEach(navLink => navLink.classList.remove("active"));
        this.classList.add("active");
        window.scrollTo(0, 0);
      } else {
        page.classList.remove("active");
      }
    });
  });
});




document.addEventListener('DOMContentLoaded', () => {
    const modalContainer = document.getElementById('modal-container');
    const modal = document.getElementById('modal');
    const modalCloseBtn = document.getElementById('modal-close-btn');
    const overlay = document.getElementById('overlay');
    const modalImg = document.getElementById('modal-img');
    const modalTitle = document.getElementById('modal-title');
    const modalText = document.getElementById('modal-text');
  
    // Function to open the modal
    function openModal(imgSrc, imgAlt, title, text) {
      modalImg.src = imgSrc;
      modalImg.alt = imgAlt;
      modalTitle.textContent = title;
      modalText.textContent = text;
      modalContainer.classList.add('active');
    }
  
    // Function to close the modal
    function closeModal() {
      modalContainer.classList.remove('active');
    }
  
    // Add click event listeners to project items
    document.querySelectorAll('.project-item').forEach(item => {
      item.addEventListener('click', () => {
        const img = item.querySelector('img');
        const imgSrc = img.src;
        const imgAlt = img.alt;
        const title = item.querySelector('.project-title').textContent;
        const text = item.querySelector('.project-category').textContent;
        openModal(imgSrc, imgAlt, title, text);
      });
    });
  
    // Close the modal when clicking the close button or overlay
    modalCloseBtn.addEventListener('click', closeModal);
    overlay.addEventListener('click', closeModal);
  });
  
