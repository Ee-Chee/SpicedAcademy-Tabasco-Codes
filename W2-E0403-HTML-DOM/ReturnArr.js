function returnArr(str) {
    var temp = document.getElementsByClassName(str);
    var arr = [];
    for (var i = 0; i < temp.length; i++) {
        arr[i] = temp[i];
    }
    return arr;
}

returnArr("content");
