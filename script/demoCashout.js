document.getElementById("cashout-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const amount = getInputValueById("out-amount");
        const pin = getInputValueById("pin");
        const acount = document.getElementById("acount-number").value;
        // console.log(amount, pin, acount);

        const mainBalance = getInnerTextById("main-balance");
        // console.log(mainBalance);

        if (acount.length === 8) {
            if (pin === 1234) {
                const sum = mainBalance - amount;
                setInnerTextByIdandValue("main-balance", sum);
            } else {
                console.log("Enter valid PIN");
            }
        } else {
            console.log("Enter valid Number");
        }
    })