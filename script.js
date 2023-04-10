let student = {
    name: 'Alex',
    gender: 'male',
    age: '18',
    isMarried: true,
    wifes: ['Nargiza', 'Malika', 'Angelika', 'Alexa',],
    hobbies: "reading",
    address: {
        street: "123 Main St",
        city: "Anytown",
    },
    eyes: 'brown',
    hair: 'black',
    school: 17,
    height: 1.73,
}

let passport = {
    serries: 'AC',
    number: 4698518865,
    data: '2020-10-24',
    exp: '2030-10-24',
}

let object = Object.assign({}, student, { passport });
console.log(object);

let key = Object.keys(object)

let value = Object.values(object)

console.log(key)
console.log(value)

let types = {
    string:[],
    number:[],
    boolean:[],
    object:[],
}



