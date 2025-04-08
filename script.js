class Person {
	constructor(name, age) {
		this._name = name;
		this._age = age;
	}

	get name() {
		return this._name;
	}

	get age() { // Add this getter
		return this._age;
	}

	set age(newAge) {
		this._age = newAge;
	}
}

class Student extends Person {
	constructor(name, age) { // Corrected spelling
		super(name, age);
	}

	study() {
		console.log(`${this.name} is studying`);
	}
}

class Teacher extends Person {
	constructor(name, age) { // Corrected spelling
		super(name, age);
	}

	teach() {
		console.log(`${this.name} is teaching`);
	}
}

// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;