const { userModel } = require('../models/user-model');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { SERVER } = require('../../config');
const addUser = (usr) => {
    return encryptPassword(usr.userPassword).then(
        (data) => {
            console.log('encrypted data is - ' + data);
            usr.userPassword = data;
            return userModel.create(usr);
        }
    ).catch(
        (err) => {
            console.log(err);
            Promise.reject(err);
        }
    );
};

const checkUser = (email, password) => {
    return new Promise(
        (resolve,reject) => {
            userModel.findOne({ userEmail:email }).then(
                usr => {
                    if (usr) {
                        return decryptPasswordAndVerify(password,usr.userPassword);
                    }
                    reject(false);
                }
            ).then(
                data => resolve(data)
            ).catch(
                err => reject(err)
            );
        }
    )
}

const updateToken = (email) => {
    const token = jwt.sign({ userEmail:email }, SERVER.SECRET_KEY);
    return userModel.findOneAndUpdate(
        { userEmail:email },
        { userToken:token },
        { new: true }
    );
}

const verifyToken = (token) => {
    try{
        const decoded = jwt.verify(token, SERVER.SECRET_KEY);
        return true;
    } catch (err) {
        //err
        console.log(err);
        return false;
    }
}

const encryptPassword = (pwd) => {
    return new Promise(
        (resolve, reject) => {
            bcrypt.genSalt(10,function(err,salt) {
                bcrypt.hash(pwd, salt, function(err, hash) {
                //Store hash in password db
                    if(err) { reject(err); }
                    resolve(hash);    
                });
            });
        }
    );
}

const decryptPasswordAndVerify = (pwd, hash) => {
    return new Promise(
        (resolve,reject) => {
            bcrypt.compare(pwd, hash, function (err, res){
                console.log(err, res);
                if(res===true) { 
                    resolve(true); 
                }
                reject(false);
            })
        }
    )
}

module.exports = { addUser, checkUser,updateToken,verifyToken };

