const { Schema,model, SchemaTypes } = require('mongoose');

//Define all the columns over here 
const empSchema = new Schema({
    empId: {
        type:SchemaTypes.Number,
        required: [true, 'Emp id is required']},
    empName: {type:SchemaTypes.String},
    empEmail: {type:SchemaTypes.String }
});

const empModel = model('empTbl',empSchema); // (two inputs)name of the table, schema defination for that perticulat table

module.exports = { empModel }