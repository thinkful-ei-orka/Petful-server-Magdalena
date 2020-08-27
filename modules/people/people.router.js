const express = require('express')
const json = require('body-parser').json()

const People = require('./people.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all the people currently in the queue.
  const people = People.get();
  
  res.json(people);

});

router.post('/', json, (req, res) => {
  // Add a new person to the queue.
  People.enqueue(req.body.name);
  return res.status(204).send();
})

router.delete('/', json, (req, res) => {
  // Remove a person from the queue.
  People.dequeue();
  return res.status(204).end();
});

module.exports = router;
