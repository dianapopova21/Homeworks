function CounterFunc() {
    let result = 0;

    return function(count) {
        result += count;
        return result;
    };
}

const counter = CounterFunc();

console.log(counter(3));
console.log(counter(5));
console.log(counter(20));



