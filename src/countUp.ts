export { };

let startTime: number = Date.now();
function countUp() {
    // console.log(Date.now() - startTime);

    const d = new Date(Date.now() - startTime)
    const m = String(d.getMinutes()).padStart(2, '0');
    const s = String(d.getSeconds()).padStart(2, '0');
    const ms = String(d.getMilliseconds()).padStart(3, '0');

    let timer = `${m}:${s}.${ms}`
    console.log(timer)

    setTimeout(() => {
        countUp();

    }, 1);
}

countUp();