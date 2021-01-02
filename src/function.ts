export { };

function func1(): void {
    console.log("func1")
}
func1();


const func2 = function (): void {
    console.log("func2")
}
func2();


const func3 = (): void => {
    console.log("func3")
}
func3();


const func4 = (x: number): void => {
    console.log(x)
}
func4(1)


const func5 = (x: number): number => {
    return x*2
}
console.log(func5(1))