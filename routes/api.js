var express = require('express');
var router = express.Router();

let {Category, Answer, Question} = require('../lib/models')


// GET /categories

// GET /questions
// GET /answers


// GET /categories
router.get('/categories', async function(req, res, next) {
    let categories = await Category.findAll({})
    res.json(categories)
});

router.get('/questions', async function(req, res, next) {
    // HINT: req.query, req.query.categoryId
    let questions = await Question.findAll({where: {categoryId: 'something that you send from the front end'}})
    res.json(questions)
});

router.get('/answers', async function(req, res, next) {
    // HINT: req.query, req.query.questionId
    let answers = await Answer.findAll({where: {questionId: 'something that you send from the front end'}})
    res.json(answers)
});

router.get('/test', function(req, res, next) {
    res.json({success: true})
});

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('index', { title: 'Express' });
});

module.exports = router;
