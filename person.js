class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }

    sayMyName(){
        return `Hello ! My name is ${this.name}, and i have ${this.age} years old`;
    }    
}

module.exports = Person;