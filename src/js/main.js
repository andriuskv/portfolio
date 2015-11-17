"use strict";

(function () {
    var workOffset = document.getElementById("work").offsetTop,
        homeOffset = document.getElementById("home").offsetTop,
        nav = document.getElementById("js-nav-list"),
        currentSection = "home",
        ticking = false;
    
    function isElementsBottomVisible(id) {
        var element = document.getElementById(id);
        
        return element.offsetTop + element.clientHeight <= document.body.clientHeight + document.documentElement.scrollTop;
    }
    
    function setNavClass(classToAdd) {
        nav.className = "nav-list " + classToAdd;
    }
    
    function updateNav() {
        var currentPos = window.pageYOffset;

        if (currentSection !== "home" && currentPos > homeOffset && currentPos < workOffset) {
            currentSection = "home";
            setNavClass("nav-default");
        }
        else if (currentSection !== "work" && currentPos >= workOffset) {
            currentSection = "work";
            setNavClass("nav-fixed");
        }
        else if (currentSection !== "contact" && isElementsBottomVisible("contact")) {
            currentSection = "contact";
        }
        
        ticking = false;
    }
    
    function onScroll() {
        if (!ticking) {
            ticking = true;
            requestAnimationFrame(updateNav);
        }
    }
    
    updateNav();
    
    window.addEventListener("scroll", onScroll, false);

    nav.addEventListener("click", function(event) {
        var target = event.target,
            section = "";
        
        if (target.className.indexOf("link-content") !== -1) {
            section = target.innerHTML.toLowerCase();
            
            window.removeEventListener("scroll", onScroll, false);
            
            if (section === "home" && currentSection !== "home") {
                setNavClass("nav-default");
            }
            else if ((section === "work" || section === "contact") &&
                    (currentSection !== "work" || currentSection !== "contact")) {
                setNavClass("nav-fixed");
            }
            
            window.addEventListener("scroll", onScroll, false);
        }
    }, false);
})();
