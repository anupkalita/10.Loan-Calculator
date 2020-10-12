// Define Variables
const amount = document.querySelector('#amount');
const interest = document.querySelector('#interest');
const years = document.querySelector('#years');
const form = document.querySelector('#loan-form');
const monthlyPayment = document.querySelector('#monthly-payment');
const totalPayment = document.querySelector('#total-payment');
const totalInterest = document.querySelector('#total-interest');


document.querySelector('#results').style.display = 'none';
document.querySelector('#loading').style.display = 'none';

// event listener
form.addEventListener('submit', calculation);


// calculation function
function calculation(e){
    document.querySelector('#results').style.display = 'none';

    let principal = parseFloat(amount.value);
    let interest1 = parseFloat(interest.value) / 100 / 12;
    let payments = parseFloat(years.value) * 12;

    let x = Math.pow(1+interest1, payments);
    let monthly = (principal * x * interest1) / (x-1);

    if(isFinite(monthly)){
        monthlyPayment.value = (monthly.toFixed(2));
        totalPayment.value = (monthly * payments).toFixed(2);
        totalInterest.value = ((monthly * payments) - principal).toFixed(2);

        // loading gif
        document.querySelector('#loading').style.display = 'block';

        setTimeout(function(){
            document.querySelector('#loading').style.display = 'none';
            
            document.querySelector('#results').style.display = 'block';
        }, 2000);
    }
    else{
        errDiv('Enter Valid Numbers');
    }

    e.preventDefault();
}


// Error Function
function errDiv(error){
    // create a div element
    const div = document.createElement('div');
    // add class
    div.classList = 'alert alert-danger';
    // append text
    div.textContent = error;

    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');

    // add error div before heading
    card.insertBefore(div, heading);

    // to remove error div after 3s
    setTimeout(function(){
        document.querySelector('.alert').remove();
    }, 3000);

}
