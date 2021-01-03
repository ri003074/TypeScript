export { };

var trapCard = function () {
    console.log("trap card!");
}

var sacrificedCard = function (sacrificeName: string) {
    console.log(sacrificeName + 'を生贄に');
}

var myTurn = function (callback: { (): void; (): void; }) {
    console.log('my turn!');
    callback();
}

myTurn(trapCard);