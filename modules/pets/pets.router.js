const express = require('express')
const json = require('body-parser').json()

const Pets = require('./pets.service')

const router = express.Router()

router.get('/', (req, res) => {
  // Return all pets currently up for adoption.
  const pets = Pets.get();

  return res.json(pets);
})

router.delete('/:type', json, (req, res) => {
  // Remove a pet from adoption.
  const {type} = req.params;
  let pet= Pets.dequeue(type);
  Pets.enqueue(pet, type);
  return res.status(204).end();
})

module.exports = router;
