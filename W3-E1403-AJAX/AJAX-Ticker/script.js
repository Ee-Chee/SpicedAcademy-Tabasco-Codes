$.ajax({
    url: "Headlines.json", //object and array are typeof object
    method: "GET", //default, no need to write it out
    success: function(data) {
        console.log(typeof data, data); //converted directly to object/array
        var myHTML = "";
        for (var i = 0; i < data.length; i++) {
            myHTML +=
                '<a class="headline" href=' +
                data[i]["href"] +
                ">" +
                data[i]["text"] +
                "</a>";
        }
        $(myHTML).appendTo(".headlines");
        callback(); //we wanna make the AJAX runs first before callback(), otherwise <a> undefined
    }
});
// shldnt put inside self-invoked function, it is called upon page loading
// hard reload (movedown reload button) to remove cache. Codes are up-to-date.

function callback() {
    ticker("ticker1", -1);
    function ticker(id, step) {
        var linkWidth = $("a") //linkWidth is undefined if this function is put after AJAX codes because it runs first before AJAX request is completed(takes a while to interact with server)
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
            // console.log(linkWidth);
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
}
