document.addEventListener('mousemove', function(e){
    let body = document.querySelector('body');
    let bubbles = document.createElement('span');

    bubbles.style.left = -75 + e.offsetX + 'px';
    bubbles.style.top = -75 + e.offsetY + 'px';

    body.appendChild(bubbles);
    setTimeout(function(){
        bubbles.remove();
    }, 2500)
})