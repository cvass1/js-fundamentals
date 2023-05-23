const evenOrOdd = (n) => {
    if (n % 2 === 0) {
        return `${n} is even`;
    } else {
        return `${n} is odd`;
    }
};

for (let i = 1; i <= 20; i++) {
    console.log(evenOrOdd(i));
}