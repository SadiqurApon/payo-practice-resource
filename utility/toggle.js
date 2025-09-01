// document.getElementById("cash-out-section").style.display = "none";

document.getElementById("add-money-box")
    .addEventListener("click", function () {
        // document.getElementById("cash-out-section").style.display = "none";
        // document.getElementById("add-money-section").style.display = "block";
        handleToggle("cash-out-section", "none");
        handleToggle("add-money-section", "block");
    })

document.getElementById("cashout-box")
    .addEventListener("click", function () {
        handleToggle("cash-out-section", "block");
        handleToggle("add-money-section", "none");
    })


function handleToggle(id, status) {
    document.getElementById(id).style.display = status;
}