// Write your solution in this file!
const employee = {
    name: 'Anastasia',
    streetAddress: '1928 11th Ave'
};

function updateEmployeeWithKeyAndValue(object, key, value){
    let newEmp = Object.assign({}, object, {[key]: value});
    return newEmp;
};

function destructivelyUpdateEmployeeWithKeyAndValue(object, key, value){
    return Object.assign(object, {[key]: value});
};

function deleteFromEmployeeByKey(object, key) {
    let newEmp = Object.assign({}, object);
    delete newEmp[key]; 
    return newEmp;
};

function destructivelyDeleteFromEmployeeByKey(object, key) {
    let newEmp = Object.assign(object);
    delete newEmp[key];
    return newEmp;
};

//console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));
//console.log(employee);