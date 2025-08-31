document.getElementById('add-money-section')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = getInputValueById('add-amount');
        const pin = getInputValueById('pin');
        const acount = document.getElementById('acount-number');
        const mainBalance = getInnerTextById('main-balance');
        


        if (acount.length === 8) {
            if (pin === 1234) {

            } else {
                alert("Enter valid PIN ");
            }
        } else {
            alert("Enter valid acount number");
        }


    })