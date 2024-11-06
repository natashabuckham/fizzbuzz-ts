function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        let output: string[] = []
        let rules = {3: "Fizz", 5: "Buzz", 7: "Bang", 11: "Bong"}

        const checkDivisor = (i: number, divisor: number) => {
            if (i % divisor === 0) {
                output.push(rules[divisor])
            }
        }

        checkDivisor(i, 11)

        if (output.length === 0) {
            checkDivisor(i, 3)
            checkDivisor(i, 5)
            checkDivisor(i, 7)
        }

        if (output.length === 0) {
            console.log(i)
        } else {
            console.log(output.join(""))
        }
    }    
}

fizzbuzz()