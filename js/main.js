!function(){"use strict";function e(e){var t=document.getElementById(e),n=document.getElementById("nav-home"),o=document.getElementById("nav-work"),a=document.getElementById("nav-contact");n.className="nav-item",o.className="nav-item",a.className="nav-item",t.className="nav-item active"}function t(e){var t=document.getElementById("js-nav");t.className="work"===e||"contact"===e?"nav nav-fixed":"nav default"}function n(){var n=$(document).scrollTop(),a=document.getElementById("home").offsetTop,c=document.getElementById("work").offsetTop,m=document.getElementById("contact").offsetTop;"home"!==o&&n>a&&c>n?(e("nav-home"),o="home"):"work"!==o&&n>c-1&&m-100>n?(e("nav-work"),o="work"):"contact"!==o&&n>m-101&&(e("nav-contact"),o="contact"),t(o)}var o="";n(),window.addEventListener("scroll",n,!1),function(){var e=$("html, body");$(".nav-link").on("click",function(t){t.preventDefault(),e.animate({scrollTop:$($.attr(this,"href")).offset().top},400)})}(),function(){function e(){$("#js-form-submit-msg").toggle("show"),c.toggle("hide")}function t(e){var t={name:e.name.value||"",_replyto:e._replyto.value,message:e.message.value};return t}function n(e){return!!e.message.value&&!!e._replyto.value}function o(n){$.ajax({url:"//formspree.io/ikandrius@gmail.com",method:"POST",data:t(n),dataType:"json"}).done(function(){n.reset&&n.reset(),e(),setTimeout(function(){e()},5e3)})}function a(e){var t=document.getElementsByTagName("form")[0],a=t.checkValidity?t.checkValidity():n(t);a&&(e.preventDefault?e.preventDefault():e.returnValue=!1,o(t))}var c=$("#js-form-submit");c.on("click",a)}()}();