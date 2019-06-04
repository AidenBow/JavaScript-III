/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. When in the global scope, this will return the window object
* 2. when an object is called, this will be the object on the left for the dot
* 3. the new keyword will make this refer to the new object
* 4. some function's explicitly direct what this refers to
*
* write out a code example of each explanation above
*/

// Principle 1

function windowBinding() {
  console.log(this);
}

// Principle 2

let object = {
  logThis: function(){
    console.log(this)
  }
}

// Principle 3

function Car(name){
  this.name = name
  this.honk = function(){
    console.log(this.name + " honks!");
    console.log(this);
  }

}

let jeep = new Car('Jeep')

jeep.honk();

// Principle 4

let bus = new Car('Bus')

jeep.honk.call(bus)