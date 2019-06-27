$("textarea").on("input", function() {
    var text = $("textarea").val();
    localStorage.setItem("writing", text);
});

var newText = localStorage.getItem("writing");
$("textarea").html(newText);
