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