function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        if (i % 3 == 0) {
            console.log("Fizz")
        } else {
            console.log(i)
        }
    }    
}

fizzbuzz()