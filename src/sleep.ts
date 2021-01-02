export { };

function sleep(msec: number) {
    return new Promise<void>(function (resolve) {
        setTimeout(function () { resolve() }, msec);
    })
}

async function start() {
    console.log("start");
    await sleep(5000);
    console.log("fin");
}

start();



// https://www.sejuku.net/blog/24629