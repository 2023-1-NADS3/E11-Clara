const bcrypt = require('bcrypt');
const usuarioModel = require('./usuarioModel');
const { main } = require('../mailer/mailerSender');

module.exports.createUsuarioDBService = (SignupData) => {
    return new Promise(function myFn(resolve, reject) {
        usuarioModel.findOne({ email: SignupData.email })
            .then(existingEmployee => {
                if (existingEmployee) {
                    if (existingEmployee.verified) {
                        resolve({ status: false, msg: "Email já está sendo usado" });
                    } else {
                        existingEmployee.name = SignupData.name;
                        existingEmployee.date = SignupData.date;
                        existingEmployee.code = SignupData.code;
                        existingEmployee.senha = bcrypt.hashSync(SignupData.senha, 10);
                        existingEmployee.save();
                        main(SignupData.email, SignupData.code);
                        resolve({ status: true });
                    }
                } else {
                    const employeeModelData = new usuarioModel();
                    employeeModelData.verified = false;
                    employeeModelData.name = SignupData.name;
                    employeeModelData.date = SignupData.date;
                    employeeModelData.email = SignupData.email;
                    employeeModelData.senha = bcrypt.hashSync(SignupData.senha, 10);
                    employeeModelData.code = SignupData.code;
                    employeeModelData.save();
                    main(SignupData.email, SignupData.code);
                    resolve({ status: true });
                }
            })
            .catch(error => {
                reject(error);
            });
    });
};

module.exports.verifyuserDBService = (VerifyData) => {
    return new Promise((resolve, reject) => {
        usuarioModel.findOne({ email: VerifyData.email })
            .then((result) => {
                if (result !== undefined && result !== null) {
                    if (result.code === parseInt(VerifyData.verify)) {
                        result.verified = true;
                        result.save()
                            .then(() => {
                                resolve({ status: true, msg: "Verificação realizada com sucesso" });
                            })
                            .catch((error) => {
                                reject({ status: false, msg: "Código errado!" });
                            });
                    } else {
                        reject({ status: false, msg: "Verify Validation Failed" });
                    }
                } else {
                    reject({ status: false, msg: "Verify Error Details" });
                }
            })
            .catch((error) => {
                reject({ status: false, msg: "Invalid Data" });
            });
    });
};


module.exports.loginuserDBService = (SigninData) => {
    return new Promise(function myFn(resolve, reject) {
        usuarioModel.findOne({ email: SigninData.email })
            .then((result) => {
                if (result != undefined && result != null) {
                    return bcrypt.compare(SigninData.senha, result.senha)
                        .then((isMatch) => {
                            if (isMatch) {
                                resolve({ status: true, msg: "Student Validated Successfully" });
                            } else {
                                reject({ status: false, msg: "Student Validation Failed" });
                            }
                        });
                } else {
                    reject({ status: false, msg: "Student Error Details" });
                }
            })
            .catch((error) => {
                reject({ status: false, msg: "Invalid Data" });
            });
    });
};





