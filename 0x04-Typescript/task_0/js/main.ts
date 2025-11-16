interface Student {
    firstName: string,
    lastName: string,
    age: number,
    location: string
}

const student1 = {
    firstName: "Kemefa",
    lastName: "Pleasure",
    age: 22,
    location:"Warri"
}

const student2 = {
    firstName: "John",
    lastName: "Doe",
    age: 19,
    location: "Kogi"
}

const studentList: Student[] = [student1, student2]

const table = document.createElement("table")

const header = table.createTHead()
const headerRow = header.insertRow()
const headerCell1 = document.createElement("th")
const headerCell2 = document.createElement("th")
header