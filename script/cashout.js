document.getElementById("cashout-money")
    .addEventListener('click', function (event) {
        event.preventDefault();
        
        const outAmount = document.getElementById('out-amount').value;
        const convertedOutAmount = parseFloat(outAmount);


        const cashoutPin = document.getElementById('cashout-pin').value;
        const convertedcashoutPin = parseInt(cashoutPin);

        

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedMainBalance = parseFloat(mainBalance);

        if(convertedcashoutPin === 1234){
            const sum = convertedMainBalance - convertedOutAmount;
            document.getElementById('main-balance').innerText = sum;
        }
        else{
            alert('Enter valid PIN');
        }
    })