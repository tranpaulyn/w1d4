var students = [
    { id: 1, name: "bruce",    age: 40 },
    { id: 2, name: "zoidberg", age: 22 },
    { id: 3, name: "alex",     age: 22 },
    { id: 4, name: "alex",     age: 30 }
  ];

// sort complex objects based on custom sorting logic
// sort students in alphabetical order
// if student has same name, prioritize older student

// write sorting function/customer comparator

// sort by name
students.sort(function (a, b) {
    var nameA = a.name;
    var nameB = b.name;
    if (nameA < nameB) {
        return -1;
    } else if (nameA > nameB) {
        return 1;
    } 
        return a.age - b.age;
});

// sort by age if same name


console.log(students);