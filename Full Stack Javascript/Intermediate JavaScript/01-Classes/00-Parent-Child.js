class ParentClass {
    constructor(name) {
        this.name = name;
    }

    sayHello() {
        console.log(`Hello, ${this.name}!`);
    }
}

class ChildClass extends ParentClass {
    constructor(name, age) {
        super(name); // ParentClass'ın yapıcısını çağırır ve name argümanını geçirir
        this.age = age;
    }

    sayHello() {
        super.sayHello(); // ParentClass'ın sayHello yöntemini çağırır
        console.log(`I am ${this.age} years old.`);
    }
}

const child = new ChildClass("Alice", 30);
child.sayHello(); // Çıktı: Hello, Alice! I am 30 years old.