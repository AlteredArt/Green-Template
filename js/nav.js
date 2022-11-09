

class Nav extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
      
        <div class="masthead" id='masthead'>
        <header class="header" id="Header">
          <div id="header-logo">
            <a href="./index.html" id="top"><img src="./assets/images/logobig.webp" alt="logo" class='header-logo'></a>
          </div>
          <div class="header-social">
            <a href="mailto:knightvisionco@gmail.com"><i class="fa-solid fa-paper-plane  tooltip"><span class="tooltiptext">Mail</span></i></a>
            <a href="tel:303-718-3046"><i class="fa-solid fa-phone  tooltip"><span class="tooltiptext">Phone</span></i></a>
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FKnightVisionInspection"><i class="fa-brands fa-facebook tooltip"><span class="tooltiptext">Facebook</span></i></a>
            <a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FKnightVisionInspection"><i class="fa-brands fa-facebook-messenger tooltip"><span class="tooltiptext">FBMessenger</span></i></a>
            <a href=""><i class="fa-solid fa-calendar-check tooltip"> <span class="tooltiptext">Book Now</span></i></a>
          </div>
          <div class="header-switch">
            <label class="theme-switch" for="checkbox">
                <input type="checkbox" id="checkbox" />
                <div class="slider round"></div>
            </label>
          </div>
          <div id="toggle">
            <i class="indicator"></i>
          </div>
            <nav class="header-navbar">
              <ul class='navbar-links nav-menu'>
                <li class='nav-item secondary'><a href="./services.html" class='nav-link'>Services</a></li>
                <li class='nav-item secondary'><a href="./faqs.html" class='nav-link'>FAQs</a></li>
                <li class='nav-item secondary'><a href="./about.html" class='nav-link'>About</a></li>
                <li class='nav-item secondary'><a href="./diy.html" class='nav-link'>DIY</a></li>
                <li class='nav-item secondary'><a href="./book" class='nav-link bk-btn'>Book Now</a></li>
    
                  <div class="mobile-social-nav">
                    <li class='mobile-social-item'><a href="mailto:knightvisionco@gmail.com"><i class="fa-solid fa-paper-plane  tooltip"><span class="tooltiptext">Mail</span></i></a></li>
                    <li class='mobile-social-item'><a href="tel:303-718-3046"><i class="fa-solid fa-phone  tooltip"><span class="tooltiptext">Phone</span></i></a></li>
                    <li class='mobile-social-item'><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FKnightVisionInspection"><i class="fa-brands fa-facebook tooltip"><span class="tooltiptext">Facebook</span></i></a></li>
                    <li class='mobile-social-item'><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FKnightVisionInspection"><i class="fa-brands fa-facebook-messenger tooltip"><span class="tooltiptext">FBMessenger</span></i></a></li>
                    <li class='mobile-social-item'><a href=""><i class="fa-solid fa-calendar-check tooltip"> <span class="tooltiptext">Book Now</span></i></a></li>
                  </div>  
              </ul>
              <div class="hamburger">
                <span class="bar"></span>
                <span class="bar"></span>
                <span class="bar"></span>
              </div>
            </nav>
          </header>
        </div>  
        
        `
    }
}

customElements.define("app-nav", Nav);


/*--------------------------------------------------------------
>>> HAMBURGER MOBILE MENU JS
--------------------------------------------------------------*/

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");
const navLink = document.querySelectorAll(".nav-link");


hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


navLink.forEach(n => n.addEventListener("click", closeMenu));


function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove('active');
}

/*--------------------------------------------------------------
>>> HAMBURGER MOBILE MENU JS - END
--------------------------------------------------------------*/

/*--------------------------------------------------------------
>>> THEME SWITCH JS
--------------------------------------------------------------*/

// THEME SWITCH
const toggleSwitch = document.querySelector('.theme-switch input[type="checkbox"]');

function switchTheme(e) {
    if (e.target.checked) {document.documentElement.setAttribute('data-theme', 'dark');}
    else {document.documentElement.setAttribute('data-theme', 'light');}    
}

toggleSwitch.addEventListener('change', switchTheme, false);


// REMEMBER THEME PREFERENCE
function switchTheme(e) {
  if (e.target.checked) {
      document.documentElement.setAttribute('data-theme', 'dark');
      localStorage.setItem('theme', 'dark'); //add this
  }
  else {
      document.documentElement.setAttribute('data-theme', 'light');
      localStorage.setItem('theme', 'light'); //add this
  }    
}

// LOCAL STORAGE
const currentTheme = localStorage.getItem('theme') ? localStorage.getItem('theme') : null;

if (currentTheme) {
    document.documentElement.setAttribute('data-theme', currentTheme);
    if (currentTheme === 'dark') {toggleSwitch.checked = true;}
}

/*--------------------------------------------------------------
>>> THEME SWITCH JS - END
--------------------------------------------------------------*/