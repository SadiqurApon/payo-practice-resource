document.getElementById("add-money")
    .addEventListener("click", function (event) {
        event.preventDefault();
        const amount = getInputValueById("add-amount");
        const pin = getInputValueById("pin");
        // const acount = getInputValueById("acount-number");
        const acount = document.getElementById("acount-number").value;
        // console.log(amount, pin, acount);
        const mainBalance = getInnerTextById("main-balance");
        // console.log(mainBalance);
        if (acount.length === 8) {
            if (pin === 1234) {
                const sum = mainBalance + amount;
                // console.log(sum);
                // document.getElementById("main-balance").innerText = sum;
                setInnerTextByIdandValue("main-balance", sum);
                
            } else {
                console.log("Enter valid PIN");
            }
        }
        else {
            console.log("Enter valid Number");
        }

    })