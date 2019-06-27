var hamburger = document.getElementById("hamburger");
var hamburgermenu = document.getElementById("hamburgermenu");
var menu = document.getElementById("menu");
var exit = document.getElementById("exit");

hamburger.addEventListener("click", function() {
    hamburgermenu.style.visibility = "visible";
    menu.style.transform = "translateX(0)";
    hamburgermenu.addEventListener("click", function(e) {
        e.stopPropagation();
        hamburgermenu.style.visibility = "hidden";
        menu.style.transform = "translateX(100%)";
    });
    menu.addEventListener("click", function(e) {
        e.stopPropagation();
        //menu.style.transitionDuration: 0;
    });
    exit.addEventListener("click", function(e) {
        e.stopPropagation();
        hamburgermenu.style.visibility = "hidden";
        menu.style.transform = "translateX(100%)";
    });
});
