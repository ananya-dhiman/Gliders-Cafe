  import { loadHomePage } from "./home.js";
  import { loadMenuPage } from "./menu.js";
  import { loadAboutPage } from "./about.js";
  import Icon from "./assets/back.jpg";
  import './style.css';



document.addEventListener('DOMContentLoaded', function() {
  

  /* Navigation */
  const homeButton = document.getElementsByClassName("home")[0];
  const menuButton = document.getElementsByClassName("menu")[0];
  const aboutButton = document.getElementsByClassName("about")[0];

  let currentTab;

  setTab('home');

  function setTab(tabName) {
    // Clear previous selection
    switch (currentTab) {
      case 'about':
        aboutButton.classList.remove('selected');
        break;
      case 'home':
        homeButton.classList.remove('selected');
        break;
      case 'menu':
        menuButton.classList.remove('selected');
        break;
    }

    // Clear content
    clearContent();

    // Load new content and set selected class
    switch (tabName) {
      case 'about':
        loadAboutPage();
        aboutButton.classList.add('selected');
        break;
      case 'home':
        loadHomePage();
        homeButton.classList.add('selected');
        break;
      case 'menu':
        loadMenuPage();
        menuButton.classList.add('selected');
        break;
    }

    // Update current tab
    currentTab = tabName;
  }

  function clearContent() {
    const content = document.getElementById('content');
    if (content) {
      content.innerHTML = '';
    }
  }

  // Add event listeners for the buttons
  homeButton.addEventListener("click", (e) => {
    e.preventDefault();
    setTab('home');
  });

  menuButton.addEventListener("click", (e) => {
    e.preventDefault();
    setTab('menu');
  });

  aboutButton.addEventListener("click", (e) => {
    e.preventDefault();
    setTab('about');
  });
  content.appendChild(card);
 
});
