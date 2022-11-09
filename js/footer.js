class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <a onclick="topFunction()" id="backToTop" title="Go2top"><i class="fa fa-arrow-circle-up"></i></a>
    
        <footer>
          <div class='footer'>
              <img src="./assets/images/logobig.webp" alt="logo" class="footer-logo">
    
            <div class="footer-social">
              <li class='footer-social-item'><a href="mailto:knightvisionco@gmail.com"><i class="fa-solid fa-paper-plane  tooltip"><span class="tooltiptext">Mail</span></i></a></li>
              <li class='footer-social-item'><a href="tel:303-718-3046"><i class="fa-solid fa-phone  tooltip"><span class="tooltiptext">Phone</span></i></a></li>
              <li class='footer-social-item'><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FKnightVisionInspection"><i class="fa-brands fa-facebook tooltip"><span class="tooltiptext">Facebook</span></i></a></li>
              <li class='footer-social-item'><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FKnightVisionInspection"><i class="fa-brands fa-facebook-messenger tooltip"><span class="tooltiptext">FBMessenger</span></i></a></li>
              <li class='footer-social-item'><a href=""><i class="fa-solid fa-calendar-check tooltip"> <span class="tooltiptext">Book Now</span></i></a></li>
            </div>
           
          </div>
          <div class="sub-footer"><h4>Knight Vision Inspection <span>&#169;</span> 2022</h4></div>
      </footer>
        
        `
    }
}

customElements.define("app-footer", Footer);

/*--------------------------------------------------------------
>>> BACK TO TOP jS
--------------------------------------------------------------*/

var backToTop = document.getElementById("backToTop");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  backToTop.style.display = 'none';
  if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
    backToTop.style.display = "block";
  } else {
    backToTop.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}

/*--------------------------------------------------------------
>>> BACK TO TOP JS - END
--------------------------------------------------------------*/