// deposit
document.getElementById('deposit-btn').addEventListener('click', function(){
    const currentDeposit = document.getElementById('current-deposit');
    const depositAmount = currentDeposit.value;
    const totalDeposit = document.getElementById('total-deposit');
    const totalDepositAmount = totalDeposit.innerText;
    const updatedDepositAmount = parseFloat(totalDepositAmount) + parseFloat(depositAmount);
    totalDeposit.innerText = updatedDepositAmount
    
    const totalAmount = document.getElementById('total-amount');
    const totalAmountText = totalAmount.innerText;
    const newTotalAmount = parseFloat(totalAmountText) + parseFloat(depositAmount);
    totalAmount.innerText = newTotalAmount;
    currentDeposit.value = '';
});

// withdraw
document.getElementById('withdraw-btn').addEventListener('click', function(){
    const currentWithdraw = document.getElementById('current-withdraw');
    const withdrawAmount = currentWithdraw.value
    const totalWithdraw = document.getElementById('total-withdraw');
    const totalWithdrawAmount = totalWithdraw.innerText;
    const updatedTotalWithdraw = parseFloat(totalWithdrawAmount) + parseFloat(withdrawAmount);
    totalWithdraw.innerText = updatedTotalWithdraw

    const totalAmount = document.getElementById('total-amount');
    const totalAmountText = totalAmount.innerText;
    const newTotalAmount = parseFloat(totalAmountText) - parseFloat(withdrawAmount);
    totalAmount.innerText = newTotalAmount;
    currentWithdraw.value = '';
})