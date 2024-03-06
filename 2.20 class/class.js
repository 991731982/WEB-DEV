class Animal {
	constructor(name, isHungry) {
  		this.name = name;
  		this.isHungry = isHungry;
 	}
  
 	speak(){
 		console.log("boo");
 	}
}

class Dog extends Animal {
	constructor(name, isHungry, lps) {
  		super(name, isHungry);
  		this.licksPerSecond = lps;
  	}
}

class Bird extends Animal {
  	constructor(name, isHungry, words) {
  		super(name, isHungry);
  		this.knownWords=words;
  	}
	
  	fly() {
  		console.log("flaps wings");
  	}
	
	speak() {
  		console.log( this.knownWords[Math.floor(Math.random()*this.knownWords.length)]);
  	}
}

class Ostrich extends Bird {
  	constructor(name, isHungry, words) {
  		super(name, isHungry, words);
  	}
  
  	fly(){
  		console.log("not today");
  	}
  
  	kick(){
  		console.log("WHAM!");
  	}
}
  
var animal = new Animal("Philip", true);
var dog = new Dog("Philip", true, 99);
var bird = new Bird("Squeaker", true, ["I","am","inherited"]);
var ostrich = new Ostrich("Billy", true, ["I","am","inherited"]);


// let x=document.createElement("p");
// x.textContent=dog.name;
// document.body.appendChild(x);
console.log( dog.name );

dog.speak();
console.log( dog.licksPerSecond);

bird.name = "Tweetz";
console.log(bird.name);
bird.speak();
bird.fly();

console.log(ostrich.name);
ostrich.speak();
ostrich.fly();
ostrich.kick();
console.log(ostrich.isHungry);
