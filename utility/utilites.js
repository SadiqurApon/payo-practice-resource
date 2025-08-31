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