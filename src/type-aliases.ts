export { };

type Mojiretsu = string;

const fooString: string = 'hello';
const fooMojiretsu: Mojiretsu = 'hello2'

const example1 = {
    name: 'ken',
    age: 32
};

type Profile = {
    name: string;
    age: number;
}

const example2: Profile = {
    name: 'ken',
    age: 32
};


type Profile2 = typeof example1;