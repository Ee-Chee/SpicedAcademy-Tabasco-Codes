var hamburger = document.getElementById("hamburger");
var hamburgermenu = document.getElementById("hamburgermenu");
var menu = document.getElementById("menu");
var exit = document.getElementsByClassName("exit");

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
    exit[1].addEventListener("click", function(e) {
        e.stopPropagation();
        hamburgermenu.style.visibility = "hidden";
        menu.style.transform = "translateX(100%)";
    });
});
//Exercise for 11.03
(function() {
    setTimeout(callback, 1000);
    function callback() {
        $("<div></div>")
            .attr("id", "popup")
            .prependTo("body")
            .css({
                position: "fixed",
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 1, //no dash
                backgroundColor: "rgba(0, 0, 0, 0.5)" //quote
            });
        $(
            "<div><h3>Welcome to our redesigned site!</h3><p>Would you like to take a <a href='javascript://'>tour</a> of our new features?</p></br><p>By the way, this site uses cookies and if you're using it we have to assume that you are ok with that.</p></div>"
        )
            .attr("id", "msg")
            .prependTo("#popup")
            .css({
                backgroundColor: "white",
                borderRadius: "20px",
                padding: "30px",
                textAlign: "left",
                position: "absolute",
                top: "50%",
                left: "50%",
                width: "30%",
                transform: "translate(-50%, -50%)",
                fontSize: "15px",
                border: "5px solid aqua"
            });

        $("<a>X</a>")
            .addClass("exit")
            .attr("href", "javascript://")
            .prependTo("#msg");

        $(".exit")
            .eq(0)
            .on("click", function() {
                $("#popup").css("visibility", "hidden");
            });
    }
})();
