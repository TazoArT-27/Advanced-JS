const students = [
    {id: 1810050, name: "Shafayat"},
    {id: 1810051, name: "Tazoar"},
    {id: 1810052, name: "Afi"}
];
const mapStudent = students.map(s => s.name)
const mapID = students.map(s => s.id)
console.log(mapStudent);
console.log(mapID);

const filterID = students.filter(s => s.id < 1810060)
console.log(filterID);

const findID = students.find(s => s.id < 1810060)
console.log(findID);