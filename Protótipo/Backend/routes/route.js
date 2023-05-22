const express = require('express');

const router = express.Router();

const usuarioController = require('../src/usuario/usuarioController');

router.route('/Usuario/Verify').post(usuarioController.VerifyUserControllerFn)
router.route('/Usuario/Signin').post(usuarioController.SigninUserControllerFn);
router.route('/Usuario/Signup').post(usuarioController.SignupUserControllerFn);

module.exports = router;
