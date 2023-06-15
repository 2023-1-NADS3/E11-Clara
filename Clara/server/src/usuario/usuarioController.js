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
 
var getDataControllerFn = async (req, res) => {
    var result = await usuarioService.getDataFromDBService(req.params.id);
 
     if (result) {
        res.send(result);
     } else {
         res.send({ "status": false, "message": "User Updateeeedddddd Faileddddddd" });
     }
  };


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
            res.send({ "status": true, "message": result.msg, "_id": result._id });
        } else {
            res.send({ "status": false, "message": result.msg });
        }
    } catch (error) {
        console.log(error);
        res.send({ "status": false, "message": error.msg });
    }
};

var AferitionrControllerFn = async (req, res) => {
    try {
        var status = await usuarioService.AferitionpostDBService(req.body, req.params.id);
        if (status.status === false) {
            res.send({ "status": false, "message": status.msg });
        } else {
            res.send({ "status": true, "message": "Usuario não verificado criado" });
        }
    } catch (err) {
        console.log(err);
    }
}

var SchudeleControllerFn = async (req, res) => {
    try {
        var status = await usuarioService.SchedulepostDBService(req.body, req.params.id);
        if (status.status === false) {
            res.send({ "status": false, "message": status.msg });
        } else {
            res.send({ "status": true, "message": "Usuario não verificado criado" });
        }
    } catch (err) {
        console.log(err);
    }
}

module.exports = { SigninUserControllerFn, SignupUserControllerFn, VerifyUserControllerFn, getDataControllerFn,AferitionrControllerFn, SchudeleControllerFn };

