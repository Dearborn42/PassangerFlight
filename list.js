class list {
    constructor(firstName, lastName, id) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.id = id;
    }
}
 
arr = []
let count = 1;
 
function addToList() {
    let firstName = document.getElementById("firstName").value;
    let lastName = document.getElementById("lastName").value;
    if (firstName != "" && lastName != "") {
        let temp = new list(firstName, lastName, count);
        count++;
        arr.push(temp);
        document.getElementById("firstName").value = "";
        document.getElementById("lastName").value = "";
    }
}
 
function print() {
    space = "";
    for (let i = 0; i < arr.length; i++) {
        space += `<div><span>${arr[i].id}</span>${arr[i].firstName} ${arr[i].lastName}</div>`
    }
    document.getElementById("printSpace").innerHTML = space;
}
 
// work in progress
// function populate() {
//     var select = document.getElementById("selectNumber");
//     select.innerHTML = `<option>Choose a number</option>`
//     for (var i = 0; i < arr.length; i++) {
//         select.innerHTML += `<option value = "${arr[i].firstName}">${arr[i].firstName}</option>`
//     }
// }