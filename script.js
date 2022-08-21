/* ................ common function .............  */
function fieldIntNumber(elementId) {
    const incomeText = document.getElementById(elementId);
    const incomeString = incomeText.value;
    const incomeNumber = parseFloat(incomeString);
    return incomeNumber;
};

function setValue(element, value) {
    const totalExpensesElement = document.getElementById(element);
    const expenses = totalExpensesElement.innerText = value;
    return parseFloat(expenses);
};

function setValueElement(saveId) {
    const saveElement = document.getElementById(saveId);
    const save = saveElement.innerText = value;
    return parseFloat(save);
}

//step-1:...........
let total;
document.getElementById('calculate-btn').addEventListener('click', function () {
    // step-2:......
    const incomeNumber = document.getElementById('income-field');
    const inputField = document.getElementById('income-field');
    const inputFieldString = inputField.value;

    // step-3:.........
    if (inputField.value != '' && isNaN(inputFieldString) != true) {
        if (inputFieldString > 0) {
            const foodField = fieldIntNumber('food-field');
            const rentField = fieldIntNumber('rent-field');
            const clothesField = fieldIntNumber('clothes-field');

            const totalBazar = foodField + rentField + clothesField;
            const totalBalance = incomeNumber - totalBazar;
            console.log(totalBalance);
            
            // ............. setValue using............
            setValue('total-expenses', totalBazar);
            total = setValue('total-balance', totalBalance);
        }
        else {
            alert('Make sure your Input is greater than 0 ');
        }   
    }
    else {
        alert("Input Box can't be Empty.....");
    }
});

//step-1:..............
document.getElementById('btn-save').addEventListener('click', function () {
    const incomeNumber = fieldIntNumber('income-field');
    const inputField = document.getElementById('saveId');
    const inputFieldString = inputField.value;

    if (inputField.value != '' && isNaN(inputFieldString) != true) {
        if (inputFieldString > 0) {
            const save = fieldIntNumber('saveId');
            const totalSave = (incomeNumber * (save / 100));
            setValueElement('total-save', totalSave);
            const totalRemaining = total - totalSave;
            setValueElement('total-remaining', totalRemaining);
        }
        else {
            alert('Make sure your Input is greater than 0 ');
        }
    }
    else {
        alert("Input Box can't be Empty.....");
    }
});


