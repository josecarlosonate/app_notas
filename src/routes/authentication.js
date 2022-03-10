const express = require('express');
const router = express.Router();
const passport = require('passport');

// SIGNUP
router.get('/signup', (req, res) => {
    res.render('auth/signup');
});

router.post('/signup', passport.authenticate('local.signup', {
    successRedirect: '/profile',
    failureRedirect: '/signup',
    failureFlash: true
}));

router.get('/profile', (req, res) => {
    res.send('perfil');
});

module.exports = router;