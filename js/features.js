// show the cash out form

document.getElementById('btn-show-cash-out').addEventListener('click', function(){

    // show cash out button
    console.log('show cash out btn');
    document.getElementById('cash-out-form').classList.remove('hidden');
    document.getElementById('add-money-form').classList.add('hidden')
})

document.getElementById('btn-show-add-money').addEventListener('click', function(){
    // show cash in btn
    console.log('show add in btn');
    document.getElementById('add-money-form').classList.remove('hidden');
    document.getElementById('cash-out-form').classList.add('hidden')
})