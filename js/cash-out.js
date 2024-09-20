// console.log('cash out file added');

document.getElementById('btn-cash-out').addEventListener('click',function(event){
    event.preventDefault();
    console.log('added succesful');

    const cashOut = document.getElementById('input-cash-out').value;
    const cashOutNumber = parseFloat(cashOut);
    const pinNumber = document.getElementById('input-cash-out-pin').value;

    console.log(pinNumber);

    // wrong way to verify pin number
    if(pinNumber === '1234'){
        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const balanceNumber = parseFloat(balance);

        // reduce the balance
        const newBalance = balanceNumber - cashOutNumber;
        document.getElementById('account-balance').innerText = newBalance


    }
    else{
        alert('dial wrong! Enter the valid pin')
    }
})