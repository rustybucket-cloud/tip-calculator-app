$(document).ready( () => {
    const bill = $('#bill');
    bill.css('width', '2rem');
    bill.on('input', ({target}) => {
        const inputLength = target.value.length;
        bill.css("width", `${inputLength + 1}rem`);
    });
});