const form = document.getElementById("form");
const totalBill = document.getElementById("bill");
const totalPeople = document.getElementById("people");
const tipPercentage = document.getElementById("percentage");
const percentageOutput = document.getElementById("percentage-output");
const output = document.getElementById("output");

form.addEventListener("change", calculateTip);
tipPercentage.oninput = calculateTip;
function calculateTip() {
    const dollarsPerPerson = 
    (
        (totalBill.value * 
            (tipPercentage.value / 100)) / totalPeople.value).toFixed(2);
    
    displayTip(`$${dollarsPerPerson}`);
    displayPercentage();
    function displayTip(totalPerPerson) {
        output.innerText = totalPeople.value > 1 ?
        `each person should tip $${dollarsPerPerson}` : `you should tip $${totalPerPerson}`;
    }
    function displayPercentage() {
        percentageOutput.innerText = `$${tipPercentage.value}%`;
    }
}
calculateTip();