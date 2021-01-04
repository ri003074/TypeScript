export { };

const kansu = (): number => 43;

const numberAny: any = kansu();
const numberUnknown: unknown = kansu();

let sumAny = numberAny + 10;
console.log(typeof numberUnknown)

// type gard 型ガード
if (typeof numberUnknown === 'number') {
    let sumUnknown = numberUnknown + 10;
}


