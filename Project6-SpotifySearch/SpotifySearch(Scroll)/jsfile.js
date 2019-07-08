//must run on http-server
//when scroll=infinite query string appears on local url, enables scrolling to load another set of Results
//typing /?q=hey&type=album, no action will be taken as these are referred/sent to api url but not local url
//mission: To construct your own query parameter and value on your own local url, i.e. scroll : infinite

(function() {
    var nextUrl;
    var resultHtml;
    var inputValue = $("input").val();
    var selectValue = $("select").val();

    $("#go").on("click", function(e) {
        if (
            $("input").val() != inputValue ||
            $("select").val() != selectValue
        ) {
            $(".results")
                .find("*") //select all elements inside the parents
                .remove();
            $(".container")
                .eq(1)
                .children()
                .remove();
            selectValue = $("select").val();
            inputValue = $("input").val();
        }

        $.ajax({
            url: "https://elegant-croissant.glitch.me/spotify",
            data: {
                q: inputValue,
                type: selectValue
                // scroll: "infinite"
            },
            success: function callback(data) {
                console.log(data);
                data = data.artists || data.albums; //cool selection
                resultHtml = "";

                if (data.items.length == 0) {
                    $("h2").html("No results found!");
                    $(".results")
                        .find("*") //select all elements inside the parents
                        .remove();
                } else {
                    $("h2").html('Results for "' + inputValue + '"');
                }
                for (var i = 0; i < data.items.length; i++) {
                    var img = "default.jpg"; //add a dummy so that it doesnt return error for those empty arrays
                    if (data.items[i].images[0]) {
                        img = data.items[i].images[0].url;
                    }
                    resultHtml +=
                        "<a class='subcontainer' target='_blank' href='" +
                        data.items[i].external_urls.spotify +
                        "'>";

                    resultHtml +=
                        '<img src="' +
                        img +
                        '" onerror="this.style.display=' + //hide broken image icon
                        "'none'" +
                        '"/><div>' +
                        data.items[i].name +
                        "</div></a>";
                }
                $(".results").append(resultHtml);
                nextUrl =
                    data.next && //same as if(data.next != null){}
                    data.next.replace(
                        "api.spotify.com/v1/search",
                        "elegant-croissant.glitch.me/spotify"
                    );
                // console.log(nextUrl);
                $(".container")
                    .eq(1)
                    .append('<button id="more">MORE...</button>');
                $("#more").on("click", function() {
                    $(".container")
                        .eq(1)
                        .children()
                        .remove();
                    $.ajax({
                        url: nextUrl,
                        success: callback
                    });
                });
                if (parseQueryString().scroll == "infinite") {
                    //always double equal sign!
                    $(".container")
                        .eq(1)
                        .children()
                        .remove();
                    checkScroll();
                    ////////////////////////checking scroll move
                    function checkScroll() {
                        if (
                            $(window).scrollTop() ==
                            $(document).height() - $(window).height()
                        ) {
                            $.ajax({
                                url: nextUrl,
                                success: callback
                            });
                        } else {
                            setTimeout(checkScroll, 500);
                        }
                    }
                }
            }
        });
    });

    /////////////////creating obj for parameters and their value
    function parseQueryString() {
        var queryString,
            temp,
            queryObj = {};
        queryString = location.href
            .slice(location.href.indexOf("?") + 1)
            .split("&"); // array storing each query
        // console.log(temp);

        for (var i = 0; i < queryString.length; i++) {
            temp = queryString[i].split("=");
            queryObj[temp[0]] = temp[1];
        }

        return queryObj;
    }
})();
