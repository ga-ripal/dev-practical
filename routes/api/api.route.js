const express = require('express');
const router = express.Router();

router.use('/', require('./user.route'));
router.use('/', require('./answer.route'));
router.use('/', require('./question.route'));
router.use('/', require('./space.route'));
router.use('/', require('./topic.route'))

module.exports = router;