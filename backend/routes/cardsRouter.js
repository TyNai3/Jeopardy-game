const router = require('express').Router();
const { Question } = require('../db/models');

router.get('/', async (req, res) => {
  const cards = await Question.findAll();
  res.json(cards);
});

module.exports = router;
