// Assignment Step 4

var i = 1;

function increments() {
    i++;
}

var topHeading = document.getElementById('topHeading');

topHeading.addEventListener('click', function () {
    var p = document.createElement('p');
    p.innerHTML = 'This is click number ' + i++;
    document.body.appendChild(p);
});
