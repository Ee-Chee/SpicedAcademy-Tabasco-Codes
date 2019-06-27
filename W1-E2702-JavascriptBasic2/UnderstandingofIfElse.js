function func(n) {
    if (n <= 0 || isNaN(n)) {
        return "ERROR!";
    } else if (n >= 1000000) {
        return n;
    } else {
        if (n < 1000000) {
            n *= 10;
            return func(n);
        }
    }
}

console.log(
    func(-5),
    func("jfkajfjkd7434"),
    func("1000000"),
    func(2345678),
    func(888888),
    func(500000),
    func(4000),
    func(70)
);
