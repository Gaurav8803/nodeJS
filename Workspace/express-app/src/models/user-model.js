const { Schema, model, SchemaTypes } = require('mongoose');

//Define all the entries over here 
const userSchema = new Schema({
    userEmail: {
        type:SchemaTypes.String,
        required: [true, 'Email id is mandatory']
    },
    userPassword: {
        type:SchemaTypes.String,
        required: [true, 'Password is mandatory']
    },
    userToken: {
        type:SchemaTypes.String
    } 
});

const userModel = model('userTbl',userSchema); // (two inputs)name of the table, schema defination for that perticulat table

module.exports = { userModel }