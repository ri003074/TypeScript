export { };

function getDate(callback: (arg0: Date) => void) {
    callback(new Date);
}

function getYear(data: Date) {
    var year = data.getFullYear();
}

getDate(function (data) {
    getYear(data)
})


//https://www.sejuku.net/blog/52314