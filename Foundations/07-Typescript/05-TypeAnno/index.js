function triple(value) {
    return value * 3;
}
function greetTripled(greeting, value) {
    console.log("".concat(greeting, ", ").concat(triple(value), "!"));
}
//greetTripled(5, 'Hiya');
greetTripled('Hiya', 5);
