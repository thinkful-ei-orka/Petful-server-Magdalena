const Queue = require('../queue/Queue')
const store = require('../../store')

// Set up initial data.
// --------------------

const pets = {
  cats: new Queue(),
  dogs: new Queue()
}

store.cats.forEach(cat => pets.cats.enqueue(cat))
store.dogs.forEach(dog => pets.dogs.enqueue(dog))

// --------------------

module.exports = {
  // get() {
  //   // Return the pets next in line to be adopted.
  //   return pets;
  // },

  get(type) { //return the Pets next in line to be adopted 
    if (type === 'cats') return pets.cats.show(); 
    if (type === 'dogs') return pets.dogs.show(); 
  },

  getAll() {
    return { 
      cats: [...pets.cats.all()], 
      dogs: [...pets.dogs.all()] 
    };
  },


  dequeue(type) {
    // Remove a pet from the queue.
    if (type === 'cat') {
      return pets.cats.dequeue();
    } else if (type === 'dog') {
      return pets.dogs.dequeue();
    }
  }
}
