const sum = (a, b) => {
    console.log('The sum of ' + a + ' and ' + b + ' is : ' + (a+b));
}

const multiply = (a, b) => {
    console.log('The multiplication of ' + a + ' and ' + b + ' is : ' + (a*b));
}

module.exports = {
    sum,
    multiply
};