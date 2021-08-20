// Write your solution in this file!
/*const employee = {
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
};*/

//console.log(destructivelyDeleteFromEmployeeByKey(employee, 'streetAddress'));
//console.log(employee);

const employee = {name: 'Sonya', streetAddress: '11th Ave'}

function updateEmployeeWithKeyAndValue(obj, key, value) {
    return {... obj, [key]: value};
    
}

function destructivelyUpdateEmployeeWithKeyAndValue(obj, key, value){
    obj[key] = value;
    return obj;
}

function deleteFromEmployeeByKey(obj, key){
    let newObj = {... obj};
    delete newObj[key];
    return newObj;
}

function destructivelyDeleteFromEmployeeByKey(obj, key){
    delete obj[key];
    return obj;
    
}