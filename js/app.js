/**
 *
 * Manipulating the DOM exercise.
 * Exercise programmatically builds navigation,
 * scrolls to anchors from navigation,
 * and highlights section in viewport upon scrolling.
 *
 * Dependencies: None
 *
 * JS Version: ES2015/ES6
 *
 * JS Standard: ESlint
 *
 */

/**
 * Comments should be present at the beginning of each procedure and class.
 * Great to have comments before crucial code sections within the procedure.
 */

/**
 * Define Global Variables
 *
 */

/**
 * End Global Variables
 * Start Helper Functions
 *
 */

/**
 * End Helper Functions
 * Begin Main Functions
 *
 */

// build the nav
const sectionList = document.querySelectorAll("section");
const navbarList = document.getElementById("navbar__list");

/**
 * End Main Functions
 * Begin Events
 *
 */

// Build menu
const navFragment = document.createDocumentFragment();

/** Create a for each loop */

sectionList.forEach(createNav);

function createNav(navItem, index) {
  const navLi = document.createElement("li");
  const navButton = document.createElement("button");
  const dataNav = sectionList[index].getAttribute("data-nav");
  const navId = sectionList[index].id;
  navButton.innerText = dataNav;
  navLi.appendChild(navButton);
  navFragment.appendChild(navLi);
  navButton.id = navId;
}

//append element
document.querySelector("ul").appendChild(navFragment);

// Get element to create root element
const io_options = {
  root: null,
  rootMargin: "-50% 0px -50% 0px",
  threshold: 0,
};

// Create an intersection observer
const io_observer = new IntersectionObserver(callback, io_options);

sectionList.forEach((section) => {
  io_observer.observe(section);
});

//Create function callback and target class
function callback(entries, observer) {
  entries.forEach((entry) => {
    //Toggle "your-active-class" class of the section
    entry.target.classList.toggle("your-active-class", entry.isIntersecting);
    //Toggle "your-active-class" class of the button
    document
      .querySelector("button#" + entry.target.id)
      .classList.toggle("your-active-class", entry.isIntersecting);
  });
}

// Adding a click event listener

const navMenu = document.querySelector(".navbar__menu");

navMenu.addEventListener("click", function (evnt) {
  evnt.preventDefault();
  console.log(evnt.target.id);
  let selected = document.querySelector("section#" + evnt.target.id);
  console.log(selected);
  selected.scrollIntoView({ behavior: "smooth" });
});

// Scroll to section on link click

// Set sections as active
