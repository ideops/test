
const express = require('express');
const router = express.Router();

const users = require('../controllers/user.controller');

router.get('/land',users.land);
router.post('/contact',users.addContact);
router.get('/contact',users.viewContacts);

module.exports = router;