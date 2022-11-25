const router = require('express').Router();
const { Question, Topic } = require('../db/models');

router.get('/questions', async (req, res) => {
  console.log(1);
  const cards = await Question.findAll();
  res.json(cards);
});
router.get('/topics', async (req, res) => {
  console.log(2);

  const topics = await Topic.findAll();
  res.json(topics);
});

module.exports = router;
