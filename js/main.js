//Assisgnment Step 5

var fnameInput = document.getElementById('firstName');

var lnameInput = document.getElementById('lastName');

var emailInput = document.getElementById('email');

var messageInput = document.getElementById('message');

document.addEventListener('submit', function (text) {
    text.preventDefault();
    console.log('The firstName is: ' + fnameInput.value);
    console.log('The lastName is: ' + lnameInput.value);
    console.log('The email is: ' + emailInput.value);
    console.log('The message is: ' + messageInput.value);
});
