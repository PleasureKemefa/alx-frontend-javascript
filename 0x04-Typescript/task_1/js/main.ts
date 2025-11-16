interface Teacher {
    firstName: string;
    fullTimeEmloyee: boolean;
    lastName: string;
    location: string;
    contract: boolean
}

const teacher1: Teacher = {
    firstName: "Kemefa",
    fullTimeEmloyee: true,
    lastName: "Pleasure",
    location: "Delta",
    contract: true
}

console.log(teacher1)

interface Directors {
    firstName: string;
    lastName: string;
    location: string;
    fullTimeEmployee: boolean;
    numberOfReports: number
}

const director1: Directors = {
    firstName: "Kemefa",
    lastName: "Christian",
    location: "Tennesse",
    fullTimeEmployee: true,
    numberOfReports: 12

}

console.log(director1)

interface printTeacherFunction {
    (firstName: string, lastName: string): string
}

const printTeacher: printTeacherFunction = (firstName, lastName) => {
    return `${firstName} ${lastName}`
}

console.log(printTeacher("Joyner", "Lucas"))

