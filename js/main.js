//*Assignment Step 6

/* First Event Listener

In this example the event listener, 'dblclick', listens to a quick double-click of the mouse on top of the h1 element with the id "truth" and then appends an h2 node with the designated text. */

var manatee = document.getElementById('manatee');

function mastermind() {
    var h2 = document.createElement('h2');
    h2.innerHTML = "Nature's Evil Mastermind";
    document.getElementById('manatee').appendChild(h2);
}

manatee.addEventListener('dblclick', mastermind); //end First Event Listener

/* Second Event Listener

In this example the event listener, 'mouseenter', listens to whether the user mouses over the image on the page and if so the action is to change from the existing image to one of a manatee hatching his latest diabolical plot. */

var img = document.getElementById('evil');

img.addEventListener('mouseover', function () {
    if (img.src !== 'img/evil.jpg') {
        img.src = 'img/evil.jpg';
    }
}); //end Second Event Listener
