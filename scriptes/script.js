// active navbar btn reference
let sections = document.querySelectorAll("section"); // create a reference of all the section tags in code
let navLinks = document.querySelectorAll("header nav a"); // this will create a reference of all the navigation links

// toggle menu icon reference
let menuIcon = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");
menuIcon.onclick = () => {
  menuIcon.classList.toggle("bx-x");
  navbar.classList.toggle("active");
};

window.onscroll = () => {
  sections.forEach((sec) => {
    let top = window.scrollY; // vertical scroll position will be stored in top variable
    let offset = sec.offsetTop - 150;
    let height = sec.offsetHeight; // finds and stores the height of current section.
    let id = sec.getAttribute("id"); // finds the id of current section on the screen.

    if (top >= offset && top < offset + height) {
      navLinks.forEach((links) => {
        links.classList.remove("active");
        document
          .querySelector("header nav a[href*=" + id + "]")
          .classList.add("active");
      });
    }
  });

  // sticky toggle bar
  let header = document.querySelector("header");
  header.classList.toggle("sticky", window.scrollY > 100);
};
