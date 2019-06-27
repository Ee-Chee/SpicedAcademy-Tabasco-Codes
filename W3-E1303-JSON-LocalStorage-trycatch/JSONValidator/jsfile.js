$("button").on("click", function() {
    var test = $("textarea").val();
    console.log(test);
    console.log(typeof test); //return string
    try {
        var text = JSON.parse(test);
        alert("valid");
    } catch {
        alert("invalid");
    }
});
