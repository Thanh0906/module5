function fibonacci(number: number) : number {
    if (number == 0) {
        return 0;
    } else if (number == 1) {
        return 1;
    } else {
        return fibonacci(number - 1) + fibonacci(number - 2);
    }
}
let num: number = 20;
let sum: number = 0;
for (let i = 1; i <= num; i++) {
    console.log(fibonacci(i));
    sum += fibonacci(i);
}
console.log("Tổng của dãy " + num + " số fibonacci này là: " + sum);