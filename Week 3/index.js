// CN5006 Week 3 Lab
// @Iustin Desrobitu 2526313

const student = require('./Studentinfo')
const person = require('./Person')

function EmployeeInfo(name, salary)
{
    console.log("Welcome " + name + " your salary is: £" + salary + ".00")
}

const EmployeeSkill = (skill) => 
{
    console.log("Expert in " + skill)
}

console.log("[---Week3Lab---]\n")

var name = "Justin"
var salary = 30000

EmployeeInfo(name, salary)
EmployeeSkill("Java")

console.log("Student Name: " + student.StudentName())
console.log("Campus: " + student.CampusName())
console.log("Date of Birth: " + student.dob)

console.log(student.StudentGrade())
console.log("Student Grade" + student.StudentGrade(55))

person1 = new person("George", 25, "generic@email.com")

console.log("Person info: " + person1.PersonInfo())

console.log("[---End---]")