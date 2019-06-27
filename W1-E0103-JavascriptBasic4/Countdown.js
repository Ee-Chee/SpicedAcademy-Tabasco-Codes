function Countdown(n) {
    this.start = function() {
        var sI = setInterval(function() {
            if (n == -1) {
                clearInterval(sI);
            } else {
                console.log(n--);
            }
        }, 1000);
    };
}

var countdown = new Countdown(8);

countdown.start();
