// Write your solution in this file!

const employee = {"name" : "Barry", "streetAddress" : "547"};

function updateEmployeeWithKeyAndValue(employee, key, val){
    return {
        ...employee,
        [key] : val
    };
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, val){
    employee[key] = val;
    return employee;
}

function deleteFromEmployeeByKey(employee, key){
    const updatedEmployee = {...employee};
    delete updatedEmployee[key];
    return updatedEmployee;
}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key];
    return employee;
}