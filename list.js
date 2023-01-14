let passangers = [];

class Passanger{
    constructor(fName, lName, dob, fCity, lCity, dod, doa, numOfBags){
        this.fName = fName;
        this.lName = lName;
        this.dob = dob;
        this.fCity = fCity;
        this.lCity = lCity;
        this.dod = dod;
        this.doa = doa;
        this.numOfBags = numOfBags;
    }
    getTripTime(){
        let dod = new Date(document.getElementById('dod').value);
        let doa = new Date(document.getElementById('doa').value);
        let Difference_In_Time = doa.getTime() - dod.getTime();
        this.duration = Difference_In_Time / (1000 * 3600 * 24);
        return this
    }
    getAge(){
        let dob = new Date(document.getElementById("dob").value);
        let diff_ms = Date.now() - dob.getTime();
        let age_dt = new Date(diff_ms); 
        this.age = Math.abs(age_dt.getUTCFullYear() - 1970);
        return this
    }
    getFoodChoice(){
        var ele = document.getElementsByName('food');
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                this.typeOfMeal = (ele[i].value);
                ele[i].checked = false;
            }
        }
        ele.checked = false;
        return this
    }
    getExtras(){
        let extras = 0;
        var ele = document.getElementsByName('extra');
        for(let i = 0; i < ele.length; i++) {
            if(ele[i].checked){
                extras += parseInt(ele[i].value);
                ele[i].checked = false;
            }
        }
        this.extras = extras;
        return this
    }
    getTotal(){
        let bags = document.getElementById('numOfBags').value;
        this.total = 300+(bags*20)+this.extras;
        return this
    }
    getId(){
        this.id = passangers.length;
        return this
    }
}

function add(){
   passangers.push(
    new Passanger(
        (document.getElementById('firstName').value).toLowerCase(), 
        (document.getElementById('lastName').value).toLowerCase(), 
        document.getElementById('dob').value, 
        document.getElementById('fCity').value, 
        document.getElementById('lCity').value, 
        document.getElementById('dod').value, 
        document.getElementById('doa').value, 
        document.getElementById('numOfBags').value
        ).getTripTime().getAge().getFoodChoice().getExtras().getTotal().getId());

   document.getElementById('firstName').value = "";
   document.getElementById('lastName').value = "";
   document.getElementById('dob').value = "";
   document.getElementById('fCity').value = "";
   document.getElementById('lCity').value = "";
   document.getElementById('dod').value = "";
   document.getElementById('doa').value = ""; 
   document.getElementById('numOfBags').value = "";
   console.log(passangers)
}


function print(){
    let id = document.getElementById('id').value;
    let passanger = passangers[id];
    document.getElementById("printDOB").value = passanger.dob;
    document.getElementById("dCity").value = passanger.fCity;
    document.getElementById("aCity").value = passanger.lCity;
    document.getElementById("printDod").value = passanger.dod;
    document.getElementById("printDoa").value = passanger.doa;
    document.getElementById("printNumOfBags").value = passanger.numOfBags;
    document.getElementById("tripD").value = passanger.duration;
    document.getElementById("meal").value = passanger.typeOfMeal;
    document.getElementById("age").value = passanger.age;
    document.getElementById("cost").value = passanger.total;
    document.getElementById("ext").value = passanger.extras;
}
function change(){
    let id = document.getElementById('id').value;
    let passanger = passangers[id];
    passanger.dob = document.getElementById("printDOB").value;
    passanger.fCity = document.getElementById("dCity").value;
    passanger.lCity = document.getElementById("aCity").value;
    passanger.dod = document.getElementById("printDod").value;
    passanger.doa = document.getElementById("printDoa").value;
    passanger.numOfBags = document.getElementById("printNumOfBags").value;
    passanger.duration = document.getElementById("tripD").value;
    passanger.typeOfMeal = document.getElementById("meal").value;
    passanger.age = document.getElementById("age").value;
    passanger.total = document.getElementById("cost").value;
    passanger.extras = document.getElementById("ext").value;
}

function printNames(){

    for(let i = 0; i<passangers.length; i++){
            passangers.sort((a, b) => a.lName.localeCompare(b.lName));
            let button = document.createElement("button");
            button.innerText = passangers[i].fName + " " + passangers[i].lName + " " + passangers[i].id;
            button.onclick = function(){
                document.getElementById('id').value = i;
                print();
            };
            document.getElementById("allLastNames").appendChild(button);
    }

    for(let i = 0; i<passangers.length; i++){
            passangers.sort((a, b) => a.fName.localeCompare(b.fName));
            let button = document.createElement("button");
            button.innerText = passangers[i].fName + " " + passangers[i].lName + " " + passangers[i].id;
            button.onclick = function(){
                document.getElementById('id').value = i;
                print();
            };
            document.getElementById("allFirstNames").appendChild(button);
    }

    for(let i = 0; i<passangers.length; i++){
            let button = document.createElement("button");
            button.innerText = passangers[i].fName + " " + passangers[i].lName + " " + passangers[i].id;
            button.onclick = function(){
                document.getElementById('id').value = i;
                print();
            };
            document.getElementById("allNames").appendChild(button);
    }
}