"use strict";


function createCalculator(base) {
    return {
        add: (b) => (base += b),
        sub: (b) => (base -= b),
        mult: (b) => (base *= b),
        div: (b) => (base /= b),
        set: (b) => (base = b),
        get: (b) => base,
    }
}

const calc = createCalculator(100);

console.log(calc.add(50));
console.log(calc.add(10));
console.log(calc.sub(10));
console.log(calc.mult(40));
console.log(calc.div(10));
console.log(calc.set(100));
console.log(calc.get());