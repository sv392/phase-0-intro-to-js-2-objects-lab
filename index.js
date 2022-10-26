// Write your solution in this file!
const employee = {
    name: "Joe",
    streetAddress: "123 Main St, Philadelphia, PA 12345"
}

function updateEmployeeWithKeyAndValue(employee, key, value) {
    const copyOfEmployee = {...employee}
    copyOfEmployee[key] = value
    return copyOfEmployee
}

function destructivelyUpdateEmployeeWithKeyAndValue(employee, key, value) {
    employee[key] = value
    return employee
}

function deleteFromEmployeeByKey(employee, key) {
    const copyOfEmployee = {...employee}
    delete copyOfEmployee[key]
    return copyOfEmployee
}

function destructivelyDeleteFromEmployeeByKey(employee, key) {
    delete employee[key]
    return employee
}