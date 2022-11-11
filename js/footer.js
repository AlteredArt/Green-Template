class Footer extends HTMLElement{
    connectedCallback(){
        this.innerHTML = `
        <a onclick="topFunction()" id="backToTop" title="Go2top"><i class="fa fa-arrow-circle-up"></i></a>
        
        <footer>
          <div id="footer" class="">
    
            <div class='flex col jcspace aicenter'>
    
              <div>
                <img src="./assets/images/logobig.webp" alt="logo" class="footer-logo">
              </div>
    
              <div class="footer-social flex jcspace">
                <p class='footer-social-item'><a href="mailto:knightvisionco@gmail.com"><i class="fa-solid fa-paper-plane tooltip"><span class="tooltiptext">Mail</span></i></a></p>
                <p class='footer-social-item'><a href="tel:303-718-3046"><i class="fa-solid fa-phone tooltip"><span class="tooltiptext">Phone</span></i></a></p>
                <p class='footer-social-item'><a href="https://www.facebook.com/login/?next=https%3A%2F%2Fwww.facebook.com%2FKnightVisionInspection"><i class="fa-brands fa-facebook tooltip"><span class="tooltiptext">Facebook</span></i></a></p>
                <p class='footer-social-item'><a href="https://www.messenger.com/login.php?next=https%3A%2F%2Fwww.messenger.com%2Ft%2F100992561910609%2F%3Fmessaging_source%3Dsource%253Apages%253Amessage_shortlink%26source_id%3D1441792%26recurring_notification%3D0"><i class="fa-brands fa-facebook-messenger tooltip"><span class="tooltiptext">FBMessenger</span></i></a></p>
                <p class='footer-social-item'><a href="https://square.site/book/L98NPR7TF8NX2/knight-vision-inspection"><i class="fa-solid fa-calendar-check tooltip"> <span class="tooltiptext">Book Now</span></i></a></p>
              </div>
    
              <div class="sub-footer ta"><h4>Knight Vision Inspection <span>&#169;</span> 2022</h4></div>
              
            </div>
    
          </div>
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