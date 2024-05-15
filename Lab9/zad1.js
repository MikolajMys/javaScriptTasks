class User{
    constructor(name, age, phone){
        this.name = name;
        this.age = age;
        this.phone = phone;
    }
}
class Book{
    users = []
    addUser(name, age, phone){
        //this.users.push(new User(name, age, phone))
        this.users.push({name, age, phone})
    }
    showUsers(){
        for(let user of this.users){
            console.log(user)
        }
    }
    findByName(name){
        let user = this.users.find((user) => user.name === name);
        if(user){
            return user;
        } else{
            return false;
        }
    }
    findByPhone(phone){
        let user = this.users.find((user) => user.phone === phone);
        if(user){
            return user;
        } else{
            return false;
        }
    }
    getCount(){console.log(this.users.length)}

}

let book = new Book;
book.addUser("adam", 12, 997);
book.showUsers();
let x1 = book.findByName("adam");
let x2 = book.findByPhone(97);
console.log(x1, x2)
book.getCount();