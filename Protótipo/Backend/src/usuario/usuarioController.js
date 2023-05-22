var usuarioService = require('./usuarioService');

var SignupUserControllerFn = async (req, res) => {
    try {
        var status = await usuarioService.createUsuarioDBService(req.body);
        if (status.status === false) {
            res.send({ "status": false, "message": status.msg });
        } else {
            res.send({ "status": true, "message": "Usuario não verificado criado" });
        }
    } catch (err) {
        console.log(err);
    }
}

var VerifyUserControllerFn = async (req, res) => {
    try {
      var status = await usuarioService.verifyuserDBService(req.body);
      if (status.status === false) {
        res.send({ "status": false, "message": status.msg });
      } else {
        res.send({ "status": true, "message": "Verificação realizada com sucesso" });
      }
    } catch (err) {
      console.log(err);
    }
  };
  

var SigninUserControllerFn = async (req, res) => {
    var result = null;
    try {
        result = await usuarioService.loginuserDBService(req.body);
        if (result.status) {
            res.send({ "status": true, "message": result.msg });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
};

module.exports = { SigninUserControllerFn, SignupUserControllerFn, VerifyUserControllerFn };

