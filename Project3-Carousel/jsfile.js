(function() {
    var kitties = document.getElementsByClassName("kitty");
    var count = 0;
    var timer;
    var dots = document.getElementsByClassName("dot");
    var transitioning;
    setTimeout(callback, 2000);

    function callback(next) {
        transitioning = true;
        kitties[count].classList.remove("onscreen");
        dots[count].classList.remove("now");
        kitties[count].classList.add("exit");
        kitties[count].addEventListener("transitionend", function leftNone(e) {
            e.target.classList.remove("exit"); //count increased by 1 because of transition duration of 1s . So, kitties[count] cant be used here.
            //console.log(e.target); it refers to kit1 because kit1 moves first in the beginning (kitties[count was 1]), now count++, kitties[count is 2]
            e.target.removeEventListener("transitionend", leftNone);
            transitioning = false;
            timer = setTimeout(callback, 2000);
        });
        count++;
        if (count >= kitties.length) {
            count = 0;
        }
        if (typeof next != "undefined") {
            count = next;
        } //must be in this position
        kitties[count].classList.add("onscreen");
        dots[count].classList.add("now");
    }

    //getting clicked index
    // for (var i = 0; i < dots.length; i++) {
    //     console.log(i);
    //     dots[i].addEventListener("click", function(e) {
    //                 console.log(i);
    //             }
    //         }
    //     }
    // } //This doesnt work as at the end of the loop, all i in each listed function is set to 4.

    //apart from string and array, slice can be applied on array-like objects
    //forEach() is an alt of for loop for an Array. Syntax for arr.forEach is arr.forEach(callback(value for the current index, index, array));
    //Array.prototype or [] is a global object. All created arrays have the same properties as Array.prototype.
    //call() used to call passed-in array-like object here.[].slice.call(dots) makes array-like dots into an array.
    // [].slice.call(dots).forEach(function(any, i) {
    //     any.addEventListener("click", function() {
    //         console.log(i);
    //     });
    // }); //it is like listing all functions stand-bying for a click.

    //Another solution:
    for (var i = 0; i < dots.length; i++) {
        dots[i].addEventListener("click", function(e) {
            for (var i = 0; i < dots.length; i++) {
                if (e.target == dots[i]) {
                    if (i == count || transitioning == true) {
                        return; // do nothing when clicking on the current slide
                    } else {
                        clearTimeout(timer);
                        callback(i);
                    }
                }
            }
        });
    } //for loops 4 times listing out 4 event functions and the nested for reset i and search for the clicked index.
})();
