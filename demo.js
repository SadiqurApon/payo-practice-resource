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

// demoAcount er code ekhane rakhlam 
document.getElementById("add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        //console.log("hello ");
        // getInputValueById(); //utilites file tare eikhane call kora jay

        // const value = getInputValueById();
        // console.log(value);                  //utilites er hello bro ta ke variable er maddome return korsi
        
        // const account = getInputValueById("acount-number");
        
        
        const amount = getInputValueById("add-amount");
        const pin = getInputValueById("pin");
        const acount = document.getElementById("acount-number").value;
        
        // console.log(account,amount, pin);
        
        const mainBalance = getInnerTextById("main-balance");
        
        // console.log(mainBalance);


        if (acount.length === 8) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                // document.getElementById("main-balance").innerText = sum;
                setInnerTextByIdandValue("main-balance" , sum);
            } else {
                console.log("Enter valid PIN");
            }
        } else {
            console.log("Enter valid Number");
        }
    })

// utilites er conde gola o ekhane ralhlam

function getInputValueById(id){
    const value = document.getElementById(id).value;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function getInnerTextById(id){
    const value = document.getElementById(id).innerText;
    const convertedValue = parseFloat(value);
    return convertedValue;
}

function setInnerTextByIdandValue(id, value){
    document.getElementById(id).innerText = value;
}

// toggle er code gola 


document.getElementById("cash-out-section").style.display = 'none';

document.getElementById("add-money-box")
    .addEventListener("click", function () {
        // document.getElementById("add-money-section").style.display = "block";
        // document.getElementById("cash-out-section").style.display = "none";
        handleToggle("add-money-section", "block");
        handleToggle("cash-out-section", "none");



    })

document.getElementById("cashout-box")
    .addEventListener("click", function () {
        handleToggle("add-money-section", "none");
        handleToggle("cash-out-section", "block");
    })


function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}