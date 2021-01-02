export { };

interface Article {
    id: number,
    title: string,
}

let data: Article[] = [{
    id: 1,
    title: '1st title'
},
{
    id: 2,
    title: '2nd title'
}]

console.log(Object.keys(data[0]))