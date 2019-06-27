function insertElement() {
    var x = document.createElement("div");
    //var text = document.createTextNode("AWESOME");
    x.innerHTML = "AWESOME";
    x.style.position = "fixed";
    x.style.zIndex = "2147483647";
    x.style.left = "20px";
    x.style.top = "100px";
    x.style.fontSize = "200px";
    document.body.appendChild(x);
}

insertElement();
