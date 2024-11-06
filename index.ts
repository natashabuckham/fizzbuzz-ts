function fizzbuzz() {
    for (let i = 1; i < 101; i++) {
        let output: string = "";

        if (i % 3 === 0) {
            output += "Fizz"
        } 
        
        if (i % 5 === 0) {
            output += "Buzz"
        }

        if (i % 7 === 0) {
            output += "Bang"
        }

        if (output === "") {
            console.log(i)
        } else {
            console.log(output)
        }
    }    
}

fizzbuzz()