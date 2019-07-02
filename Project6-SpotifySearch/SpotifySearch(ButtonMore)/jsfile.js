//https://developer.spotify.com/documentation/web-api/reference/search/search/
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
                q: inputValue, //query string's parameter and the value are determined by api developers of spotify. case sensitive
                type: selectValue
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
                        data: {},
                        success: callback
                    });
                });
            }
        });
    });
})();
