// add money to the account 

/*
s-1 add event handler
prevent page reload after form submit
s-2 get money to be added to the account balance
get the pin number

s-3 verify the number

*/

document.getElementById('btn-add-money').addEventListener('click', function(event){
    event.preventDefault();
    const addMoneyInput = document.getElementById('input-add-money').value;
    console.log(addMoneyInput);

    const pinNumberInput = document.getElementById('input-pin-number').value;
    console.log(pinNumberInput);

    if(pinNumberInput === '1234'){
        console.log('add money in your account');

        const balance = document.getElementById('account-balance').innerText;
        console.log(balance);
        const addMoneyNumber = parseFloat(addMoneyInput);
        const balanceNumber = parseFloat(balance);

        const newBalance = addMoneyNumber + balanceNumber;
        console.log(newBalance); 

        document.getElementById('account-balance').innerText = newBalance
    }
    else{
        alert('your pin is not correct')
    }
})