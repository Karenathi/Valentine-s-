document.addEventListener('DOMContentLoaded', function () {
    var yesButton = document.getElementById('yesButton');
    var noButton = document.getElementById('noButton');
    var anotherGif = document.getElementById('anotherGif');
    var elementsToHide = document.querySelectorAll('.hide-on-yes');
    var clickCount = 0;

    yesButton.addEventListener('click', function () {
        anotherGif.style.display = 'block';
        elementsToHide.forEach(function(element) {
            element.style.display = 'none';
        });
    });
    
    noButton.addEventListener('click', function () {
        clickCount++;
        var newWidth = yesButton.offsetWidth + 20;
        var newHeight = yesButton.offsetHeight + 5;
        yesButton.style.height = newHeight + 'px';
        yesButton.style.width = newWidth + 'px';
        if (clickCount === 1) {
            noButton.textContent = 'Say Yes';
        } else if (clickCount === 2) {
            noButton.textContent = 'Are you sure?';
        } else if (clickCount === 3) {
            noButton.textContent = 'Really?';
        } else if (clickCount === 4) {
            noButton.textContent = 'Last chance!';
        } else if (clickCount >= 5) {
            noButton.textContent = "Yes";
        }
    });

});
