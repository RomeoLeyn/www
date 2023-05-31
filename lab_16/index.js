let first = prompt("enter value", "");
let second = prompt("enter value", "");


let firstInput = document.getElementById('input1');
let secondInput = document.getElementById('input2');

firstInput.value = first;
secondInput.value = second;

function change() {
    let temp = firstInput.value
    firstInput.value = secondInput.value;
    secondInput.value = temp;
    // console.log("Yep");
}