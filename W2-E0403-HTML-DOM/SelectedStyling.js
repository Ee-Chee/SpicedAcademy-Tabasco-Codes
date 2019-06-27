function selectedStyling(str) {
    var get = document.querySelectorAll(str);
    for (var i = 0; i < get.length; i++) {
        get[i].style.fontStyle = "italic";
        get[i].style.textDecoration = "underline";
        get[i].style.fontWeight = "bold";
    }
}
