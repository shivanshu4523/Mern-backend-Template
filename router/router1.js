const express = require('express');
const {home,about,login,signup,newuser} = require('../controller/controller1');
const router = express.Router();

router.route('/').get(home);
router.route('/about').get(about);

router.route('/login').get(login);
router.route('/signup').get(signup);
router.route('/newuser').get(newuser);
// router.route('/addevent').get(addEvent);


module.exports = router;
