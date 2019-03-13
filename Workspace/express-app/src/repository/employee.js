const { empModel } = require('../models/emp-model');

const addEmployee = (emp) => {
    return new Promise(
        (resolve,reject) => {
            const employee = new empModel(emp);
            employee.save((err) => {
                if(err) { 
                    reject(err); 
                }
                resolve('employee added successfully')
            });
        }
    );
}

const getEmployee = () => {
    return empModel.find();
}
const getEmployeeById = (id) => {
    return empModel.findOne({ empId: id });
}
const removeEmployeeById = (id) => {
    return empModel.findOneAndDelete({ empId: id });
}
const updateEmployeeById = (id, emp) => {
    return empModel.findOneAndUpdate({ empId: id}, emp);
}

module.exports = { 
    addEmployee, getEmployee, getEmployeeById, 
    removeEmployeeById, updateEmployeeById 
};

