document.getElementById("add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        //console.log("hello ");
        // getInputValueById(); //utilites file tare eikhane call kora jay

        // const value = getInputValueById();
        // console.log(value);                  //utilites er hello bro ta ke variable er maddome return korsi
        const account = getInputValueById("acount-number");
        const amount = getInputValueById("add-amount");
        const pin = getInputValueById("pin");
        // console.log(account,amount, pin);
        const mainBalance = getInnerTextById("main-balance");
        console.log(mainBalance);

        if(account.length === 8){
            if(pin === 1234){
                
            }else{
                console.log("Enter valid PIN");
            }
        }else{
            console.log("Enter valid Number");
        }
    })