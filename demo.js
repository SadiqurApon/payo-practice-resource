document.getElementById('add-money-section')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById('add-amount');
        const pin = getInputValueById('pin');
        const acount = document.getElementById('acount-number');
        const mainBalance = getInnerTextById('main-balance');



        if (acount.length === 8) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                // document.getElementById('main-balance').innerText = sum;
                getInnerTextByIdAndValue("main-balance") = sum;
            } else {
                console.log("Enter valid PIN ");
            }
        } else {
            console.log("Enter valid acount number");
        }


    })

// utilites.js 
function getInputValueById (id){
    const amount = document.getElementById(id).value;
    const convertedAmount = parseFloat(amount);
    return convertedAmount;
}

function getInnerTextById(id){
    const amount = document.getElementById(id).innerText;
    const convertedAmount = parseFloat(amount);
    return convertedAmount;
}

function getInnerTextByIdAndValue(id,value){
    document.getElementById(id).innerText = value;
}