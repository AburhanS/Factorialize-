function factorialize(n){
    if(!Number.isInteger(n)){
        throw new Error("The factorial of a non-integer number is undefined");
    } else if (n < 0){
        throw new Error("The factorial of a negative number is undefined");
    } else if (n == 0 || n == 1){
        return 1;
    } else{
        return n * factorialize(n - 1);
    }
}

console.log(factorialize(5));
console.log(factorialize(1));
console.log(factorialize(0));
console.log(factorialize(-1));
console.log(factorialize(3.14));