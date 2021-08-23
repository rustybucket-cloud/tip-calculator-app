let tipPercentage = .15;
//changes button colors
const buttons = document.querySelectorAll('.tip-button');
const custom = document.querySelector('#custom');
buttons.forEach( (button) => {
    button.addEventListener("click", ({target}) => {
        buttons.forEach( x => {
            x.classList.remove("selected");
        });
        custom.value = '';
        tipPercentage = button.dataset.percentage;
        target.classList.add("selected");
        const customSpan = document.querySelector("#tip-percentages span");
        customSpan.classList.remove("selected");
        getInfo();
    });
});
custom.addEventListener("input", () => {
    tipPercentage = custom.value * .01;
    buttons.forEach( x => {
        x.classList.remove("selected");
    });
    const customSpan = document.querySelector("#tip-percentages span");
    customSpan.classList.add("selected");
    getInfo();
});
const bill = document.querySelector('#bill');
const people = document.querySelector('#num-people');
bill.addEventListener('input', getInfo);
people.addEventListener('input', getInfo);

function getInfo() {
    const billAmount = document.querySelector('#bill').value;
    const numPeople = document.querySelector('#num-people').value;
    let total = null;
    if (billAmount !== '' && numPeople !== '') {
        total = (parseInt(billAmount) + parseInt(billAmount * tipPercentage)) / parseInt(numPeople);
        const totalResult = document.querySelector('#total');
        totalResult.innerText = `$${Number(total).toFixed(2)}`;
    }
    if (total !== null && numPeople !== '') {
        const tipAmountResult = document.querySelector('#tip-amount');
        const tipAmount = total / parseInt(numPeople);
        tipAmountResult.innerText = `$${Number(tipAmount).toFixed(2)}`;
    }
}

const reset = document.querySelector('.reset');
reset.addEventListener("click", () => {
    bill.value = '';
    people.value = '';
    const tipAmountResult = document.querySelector('#tip-amount');
    const totalResult = document.querySelector('#total');
    tipAmountResult.innerText = '';
    totalResult.innerText = '';
});