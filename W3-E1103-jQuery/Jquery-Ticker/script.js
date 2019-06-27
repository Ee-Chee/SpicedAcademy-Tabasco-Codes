(function() {
    ticker("ticker1", -1);
    function ticker(id, step) {
        var linkWidth = $("a")
            .eq(0)
            .outerWidth();
        var curX = $(".headlines").offset().left;
        var animId;

        $(".headlines").on("mouseenter", function() {
            cancelAnimationFrame(animId);
        });

        $(".headlines").on("mouseleave", function() {
            moveHeadlines();
        });

        moveHeadlines();

        function moveHeadlines() {
            curX += step;
            // console.log($("a").eq(0));
            if (step < 0 && curX < -linkWidth) {
                curX += linkWidth;
                $(".headlines").append($("a").eq(0));
                linkWidth = $("a")
                    .eq(0)
                    .outerWidth();
            }
            $(".headlines").css("left", curX + "px");
            animId = requestAnimationFrame(moveHeadlines);
        }
    }
})();
