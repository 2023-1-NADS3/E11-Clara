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
                        existingEmployee.aferation = {
                            'Oxigenação': [],
                            'Pressão arterial': [],
                            'Glicemia': [],
                          };
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
                    employeeModelData.aferation = {
                        'Oxigenação': [],
                        'Pressão arterial': [],
                        'Glicemia': [],
                      };
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
                                resolve({ status: true, msg: "Student Validated Successfully", _id: result._id});
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
 
module.exports.getDataFromDBService = (id) => {
    return new Promise(function getData(resolve, reject) {
      usuarioModel.findOne({ _id: id }).exec()
        .then((result) => {
          resolve(result);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };

  module.exports.AferitionpostDBService = (Aferition, id) => {
    return new Promise((resolve, reject) => {
      const checkQuery = { _id: id };
      usuarioModel.findOne(checkQuery)
        .exec()
        .then((result) => {
          const aferationObj = result.aferation.find(item => item.hasOwnProperty(Aferition.sinalAfericao));
          const aferitionsinal = aferationObj ? aferationObj[Aferition.sinalAfericao] : [];
          
          const novoObjeto = {
            valor: Aferition.valor,
            unid: Aferition.unid,
            day: new Date().toLocaleDateString(),
            time: new Date().toLocaleTimeString()
          };
          
          aferitionsinal.push(novoObjeto);
          
          result.markModified('aferation');
          
          return result.save();
        })
        .then(savedResult => {
          console.log('Alterações salvas:', savedResult);
          resolve(savedResult); 
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
  module.exports.SchedulepostDBService = (Aferition, id) => {
    return new Promise((resolve, reject) => {
      const checkQuery = { _id: id };
      usuarioModel.findOne(checkQuery)
        .exec()
        .then((result) => {
          const schedules = result.schedules || []; // Define um array vazio por padrão
  
          const novoObjeto = {
            name: Aferition.name,
            con: Aferition.con,
            unidcon: Aferition.unidcon,
            dos: Aferition.dos,
            dias: Aferition.dias,
            hor: Aferition.hor,
            dur: Aferition.dur,
            durcon: Aferition.durcon,
            obs: Aferition.obs
          };
  
          schedules.push(novoObjeto);
  
          result.markModified('schedules');
  
          return result.save();
        })
        .then(savedResult => {
          console.log('Alterações salvas:', savedResult);
          resolve(savedResult);
        })
        .catch((error) => {
          reject(error);
        });
    });
  };
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  



