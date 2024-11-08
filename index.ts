function fizzbuzz() {
    for (let i = 1; i < 256; i++) {

        let output: string[] = []
        let rules = {3: "Fizz", 5: "Buzz", 7: "Bang", 11: "Bong", 13: "Fezz"}

        const applyRule = (i: number, divisor: number) => {
            if (i % divisor === 0) {
                output.push(rules[divisor])
            }
        }

        if (i % 11 === 0) {
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
        } else if (i % 17 === 0) {
            console.log(output.reverse().join(""))
        } else {
            console.log(output.join(""))
        }
    }    
}

fizzbuzz()