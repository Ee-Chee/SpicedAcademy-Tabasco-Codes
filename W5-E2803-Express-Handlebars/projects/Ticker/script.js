(function() {
    ticker("ticker1", -1);
    function ticker(id, step) {
        var ticker = document.getElementById(id);
        var headlines = ticker.querySelector(".headlines");
        var links = headlines.getElementsByTagName("A");
        var curX = headlines.offsetLeft; //width from left-end to border-left of the element
        var headlinesWidth = headlines.offsetWidth; //width from border-left to border-right, excluding margin
        var tickerWidth = ticker.offsetWidth;
        var linkWidth = links[0].offsetWidth;
        var animId;

        headlines.addEventListener("mouseenter", function(e) {
            cancelAnimationFrame(animId);
        });

        headlines.addEventListener("mouseleave", function() {
            moveHeadlines();
        });

        moveHeadlines();

        function moveHeadlines() {
            curX += step;
            // console.log(curX);

            if (step < 0 && curX < -linkWidth) {
                // console.log(linkWidth);
                curX += linkWidth;
                // console.log(curX); //return curX =-1 because curX(-)+linkWidth(+);
                console.log(links[0]);
                headlines.appendChild(links[0]); //features of appendChild, removing the EXISTING child and add the end of the list of its parent node.
                console.log(links[0]);
                linkWidth = links[0].offsetWidth;
            }
            headlines.style.left = curX + "px";
            animId = requestAnimationFrame(moveHeadlines);
        }
    }
})();

// function hello(){
//     console.log("hello!");
// }
//
// requestAnimationFrame(hello); //The number of callbacks is usually 60 times per second
