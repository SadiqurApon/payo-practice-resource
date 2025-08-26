document.getElementById('login-btn')
    .addEventListener("click", function (event) {
        const acountNumber = document.getElementById('acount-number').value;
        // const convertedAcountNumber = parseInt(acountNumber);
        const pin = document.getElementById('pin').value;
        const convertedPIN = parseInt(pin);
        if(acountNumber.length === 8){
            if(convertedPIN === 1234){
                window.location.href = "./main.html";
            }
            else{
                alert('Enter valid PIN');
            }
        }
        else{
            alert('Enter valid Acount Number');
        }
    })