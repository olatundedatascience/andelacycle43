let user = {
    "name":"tunde",
    "age": 24,
    "lastname"  : "Akintunde",
    get Fullname() {
        return `${this.Fullname}`
    },
    set Fullname(value) {
        [this.name, this.lastname] = value.split(' ')
    }
}

//let admin = Object.create({}, Object.getOwnPropertyDescriptors(user))

let admin = {
    lname: "Abiola",
   // __proto__: user
}
admin.prototype = user;


//console.log(User.prototype.constructor === User)
//console.log(admin.__proto__ == Object.prototype)

console.log(admin.prototype == user)
function User(name, birthday) {
    this._name = name,
    this._birthday = birthday,

    Object.defineProperty(this, 'age', {
        get() {
            let today = new Date().getFullYear();

            return Math.abs(today - this._birthday.getFullYear());
        }
    })
}

//let usme = new User("tunde", new Date("03/13/1990"));
//console.log(usme.age)
//console.log(Object.getOwnPropertyDescriptors(user));