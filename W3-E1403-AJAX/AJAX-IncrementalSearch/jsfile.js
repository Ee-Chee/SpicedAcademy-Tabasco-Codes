$("input").on("input", function(e) {
    var val = $("input").val();

    var x = $.ajax({
        url: "https://flame-egg.glitch.me/",
        data: {
            q: val
        },
        success: function(data) {
            console.log(data);
            var str = '"' + data + '"';
            $("#container").html(str);
            x.abort();
        }
    });
});
