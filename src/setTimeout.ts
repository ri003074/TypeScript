let count: number = 0

let countUpOnce = (): void => {
    console.log(count++);
    console.log("count up once")
}
setTimeout(countUpOnce, 1000);


let countUp = (): void => {
    console.log(count++);
    const id: number = setTimeout(countUp, 1000);
    if (count > 5) {
        clearTimeout(id);
    }
}
countUp();


//https://techacademy.jp/magazine/5541

//setTimeout -> 一定時間経過後に処理を実行
//setInterval -> 一定時間ごとに特定の処理を繰り返す。