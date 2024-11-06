function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        let output: string = "";

        const checkDivisor = (i: number, divisor: number, word: string) => {
            if (i % divisor === 0) {
                output += word
            }
        }

        checkDivisor(i, 11, "Bong")

        if (output === "") {
            checkDivisor(i, 3, "Fizz")
            checkDivisor(i, 5, "Buzz")
            checkDivisor(i, 7, "Bang")
        }

        if (output === "") {
            console.log(i)
        } else {
            console.log(output)
        }
    }    
}

fizzbuzz()