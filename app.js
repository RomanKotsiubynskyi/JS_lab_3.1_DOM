'use strict'
let prises = ['$15', '$25', '$15', '$100', '$25', '$15', '$15', '$10', '$10', '$10', '$10']
//function expression,  anonymous function
let funcPriseExpression = () => {
    let randomPrise = prises[Math.floor(Math.random() * prises.length)];
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = (randomPrise);
    document.body.append(div);

};//don't foget about semicolon;

//assign func to var
let assignFuncToVar = funcPriseExpression;

//let funcPriseExpression = prise;

let names = ['Vasia', 'Petia', 'Ania', 'Masha', 'Ashotik', 'Oscar', 'Pulup', 'Jada'];

// function declaration

function rulette1() {
    let randomName = names[Math.floor(Math.random() * names.length)];
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = ("Winner" + " " + randomName);
    document.body.append(div);
    return randomName;
}

//current date
var today = new Date;
var dd = today.getDate();
var mm = today.getMonth() + 1;
var yyyy = today.getFullYear();

if (dd < 10) {
    dd = '0' + dd;
}

if (mm < 10) {
    mm = '0' + mm;
}

today = dd + '.' + mm + '.' + yyyy;


function drawing(date, text) {
    let div = document.createElement('div');
    div.className = "alert";
    div.innerHTML = ("Today," + " " + date + " " + text);
    document.body.prepend(div);


}
drawing(today, "drawing of PRISES");

// event listener

const switcher = document.querySelector('.button');

switcher.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme')
    var className = document.body.className;
    // Console message 
    console.log('current class name: ' + className);
});


function createOnClick(button) {
    button.addEventListener('click'),
        () => {
            button.style.color = 'red';
        }

}
