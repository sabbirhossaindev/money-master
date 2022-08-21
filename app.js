/* ....................common function use for calculate btn...............*/
function getFieldValueById(id) {
    const inputField = document.getElementById(id);
    const value = inputField.value;
    inputField.value = '';
    return parseInt(value);
};

function getTextElementValueById(id) {
    const element = document.getElementById(id);
    const value = element.innerText;
    return parseInt(value);
}

function setTextElementValueById(id, value) {
    const element = document.getElementById(id);
    element.innerText = value;
};

/*.............................function in exploring income-field .........................*/
// function inputValidation() {
//     const inputFields = document.getElementById('income-field');
//     for (const inputField of inputFields) {
//         const inputValue = inputField.value;

//         if (isNaN(inputValue)) {
//             alert("Input Number Only");
//             return true;
//         }
//         else if (inputValue < 0) {
//             alert('Invalid Input');
//             return true;
//         }
//         else if (inputValue === '') {
//             alert("Input field can't be Empty..");
//             return true;
//         }
//     }
// }


/* ......................calculate btn  use addEventListener.....................*/

document.getElementById('calculate-btn').addEventListener('click', function () {

    const income = getFieldValueById('income-field');
    const foodField = getFieldValueById('food-field');
    const rentField = getFieldValueById('rent-field');
    const clothesField = getFieldValueById('clothes-field');
    const totalExpenses = foodField + rentField + clothesField;
    const balance = income - totalExpenses;

    /*............... condition use............*/
    if (balance < 0) {
        alert(" Your expenses can not be more then your income..");
    }

    setTextElementValueById('total-expenses', totalExpenses);
    setTextElementValueById('total-balance', balance);
});

// document.getElementById('btn-save').addEventListener('click', function () {
//     const savingRate = getFieldValueById('total-save');
//     if (isNaN(savingRate) || savingRate === '' || savingRate < 0) {
//         alert("Invalid Input...");
//         return;
//     }
//     else if (savingRate > 100) {
//         alert("You can't save more then your Balance..");
//         return;
//     }
//     const totalBalance = getTextElementValueById('total-balance');
//     const savingAmount = totalBalance * (savingRate / 100);
//     setTextElementValueById('total-save', savingAmount);
//     const totalRemaining = balance - savingAmount;
//     setTextElementValueById('total-remaining', totalRemaining);
    // setTextElementValueById('total-remaining', balance);
// });