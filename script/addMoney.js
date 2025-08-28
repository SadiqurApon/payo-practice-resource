document.getElementById('add-money')
    .addEventListener('click', function (event) {
        event.preventDefault();
        const amount = document.getElementById('add-amount').value;
        const convertedAmount = parseFloat(amount);

        const pin = document.getElementById('pin').value;
        const convertedPin = parseInt(pin);
        

        const mainBalance = document.getElementById('main-balance').innerText;
        const convertedmainBalance = parseFloat(mainBalance);

        if(amount){
            if(convertedPin === 1234){
                const sum = convertedmainBalance + convertedAmount ;
                document.getElementById('main-balance').innerText = sum;
            }
            else{
                alert('Enter valid PIN');
            }
        }
        else{
            alert('Enter amount');
        }
    })