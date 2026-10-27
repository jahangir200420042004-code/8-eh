class User {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  print() {
    console.log(`имя - ${this.name}; возраст ${this.age}`);
  }
}

class Student extends User {

  #password;

  constructor(name, age, username, password) {
   
    super(name, age); 
    this.username = username;
    this.#password = password;
  }


  print(enteredPassword) {
    if (enteredPassword === this.#password) {
      super.print();
      console.log(`username: ${this.username}`);
    } else {
      console.log("Ошибка: Неверный пароль. Доступ к данным запрещен.");
    }
  }
}




const regularUser = new User("Алексей", 28);
regularUser.print(); 

console.log("--------------------");


const student = new Student("Иван", 20, "ivan_cool", "qwerty1234");


student.print("wrong_password"); 



student.print("qwerty1234"); 
