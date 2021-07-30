// Write your solution in this file!


 var employee = { name : 'Madi Vallarino',
                streetAddress : '113 E 36th Street'}

function updateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign({}, employee, {[key]:value});
}


function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value){
    return Object.assign(employee,{[key]:value});

}

function deleteFromEmployeeByKey(employee, key){
    const newEmp = Object.assign({}, employee)
    delete newEmp[key]
   return newEmp

}

function destructivelyDeleteFromEmployeeByKey(employee, key){
    delete employee[key]
    return employee
}
