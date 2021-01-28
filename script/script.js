// log in button ========================================================
const loginbtn = document.getElementById('login')
loginbtn.addEventListener('click', function() {
    const login_area = document.getElementById('login-area');
    login_area.style.display = 'none';
    const transaction_area = document.getElementById('transaction_area');
    transaction_area.style.display = "block";
})

// deposit button =========================================================
const deposit = document.getElementById('Add-deposit');
deposit.addEventListener('click', function() {
    const depositNumber = getInputNumber("deposit_Amount")

    updateTOSpanText("current_Deposit", depositNumber);
    updateTOSpanText("current_balance", depositNumber);


    document.getElementById("deposit_Amount").value = "";

})

//withdraw handler event =======================================

const withdrawbtn = document.getElementById("Add-withdraw");
withdrawbtn.addEventListener("click", function() {
    const withdrawAmount = getInputNumber("withdraw_Amount");

    updateTOSpanText("current_withdraw", withdrawAmount);
    updateTOSpanText("current_balance", -1 * withdrawAmount);


    document.getElementById("withdraw_Amount").value = "";


})

function getInputNumber(id) {
    const amount = document.getElementById(id).value;
    const amountNumber = parseFloat(amount);
    return amountNumber;
}

function updateTOSpanText(id, n) {
    const currentBalance = document.getElementById(id).innerText;
    const currentBalanceNumber = parseFloat(currentBalance);
    const totalBalance = n + currentBalanceNumber;
    document.getElementById(id).innerText = totalBalance;
}