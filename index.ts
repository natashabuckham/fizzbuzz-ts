function fizzbuzz() {
    for (let i = 1; i < 196; i++) {
        
        let output: string[] = []
        let rules = {3: "Fizz", 5: "Buzz", 7: "Bang", 11: "Bong", 13: "Fezz"}

        const checkDivisor = (i: number, divisor: number): boolean => {
            return i % divisor === 0
        }

        const applyRule = (i: number, divisor: number) => {
            if (checkDivisor(i, divisor)) {
                output.push(rules[divisor])
            }
        }

        if (checkDivisor(i, 11)) {
            applyRule(i, 13)
            applyRule(i, 11)
        }
    
        if (output.length === 0) {
            applyRule(i, 3)
            applyRule(i, 13)
            applyRule(i, 5)
            applyRule(i, 7)
        }

        if (output.length === 0) {
            console.log(i)
        } else {
            console.log(output.join(""))
        }
    }    
}

fizzbuzz()