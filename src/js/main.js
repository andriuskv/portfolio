var nav = document.getElementById("js-nav-list");
var navTopPosition = nav.offsetTop;

function setNavClass(classToAdd) {
    nav.className = "nav-list " + classToAdd;
}

window.addEventListener("scroll", function() {
    if (window.pageYOffset >= navTopPosition) {
        setNavClass("nav-fixed");
    }
    else {
        setNavClass("nav-default");
    }
});
