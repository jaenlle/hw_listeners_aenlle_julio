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

In this example the event listener, 'mouseover', listens to whether the user mouses over the image on the page and if so the action is to change from the existing image to one of a manatee hatching his latest diabolical plot. */

var img = document.getElementById('evil');

img.addEventListener('mouseover', function () {
    if (img.src !== 'img/evil.jpg') {
        img.src = 'img/evil.jpg';
    }
}); //end Second Event Listener

/* Third Event Listener

In this example the event listener, 'mouseenter', listens to when the mouse enter the space occupied by the paragraph with the id "original" and when that happens the action is to change the paragraph from manatee propaganda to real facts about those sneaky creatures. */

var original = document.getElementById('original');

function reveal() {
    var replace = document.createElement('p');
    var newText = document.createTextNode('The typical manatee passes its time engaging in activities such as nibbling on lettuce, lazily swimming among mangroves and plotting world domination. It is said that on exceptionally quiet South Florida nights their evil laughter can be heard for miles!');
    replace.appendChild(newText);

    var container = document.getElementById('container');
    container.replaceChild(replace, original);
}

original.addEventListener('mouseenter', reveal); //end Third Event Listener
