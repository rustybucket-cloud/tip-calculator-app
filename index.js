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
bill.addEventListener('change', () => {
    const amount = bill.value;
    bill.value = Number(amount).toFixed(2);
    if (parseInt(amount) < 0) {
        bill.value = '';
    }
});
people.addEventListener('change', () => {
    const num = people.value;
    people.value = Math.floor(parseInt(num));
    if (parseInt(num) < 0) {
        people.value = '';
    }
});
function getInfo() {
    const billAmount = document.querySelector('#bill').value;
    const numPeople = document.querySelector('#num-people').value;
    let total = null;
    if (billAmount !== '' && numPeople !== '') {
        total = (parseInt(billAmount) + (parseInt(billAmount) * tipPercentage)) / parseInt(numPeople);
        const totalResult = document.querySelector('#total');
        totalResult.innerText = `$${Number(total).toFixed(2)}`;
    }
    if (total !== null && numPeople !== '') {
        const tipAmountResult = document.querySelector('#tip-amount');
        console.log(tipPercentage);
        const tipAmount = (parseInt(billAmount) * tipPercentage) / parseInt(numPeople);
        tipAmountResult.innerText = `$${Number(tipAmount).toFixed(2)}`;
    }
}

const reset = document.querySelector('.reset');
reset.addEventListener("click", () => {
    location.reload();
});