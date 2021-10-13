const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Looping through images */
for (let index = 1; index <= 5; index++) {
    const newImage = document.createElement('img');
    newImage.setAttribute('src', `./images/pic${index}.jpg`);

    //gestionaire event sur chaque images
    newImage.addEventListener('click', _ => {
        srcImage(index);
    });
    thumbBar.appendChild(newImage);
}

function srcImage(imgUrl) {
    displayedImage.setAttribute('src', `/images/pic${imgUrl}.jpg`);
}

/* Wiring up the Darken/Lighten button */

btn.addEventListener('click', _ => {
    if(btn.getAttribute('class') == 'dark') {
        btn.setAttribute('class', 'light');
        btn.innerHTML = 'Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,.5)';
    } else {
        btn.setAttribute('class', 'dark');
        btn.innerHTML = 'Darken';
        overlay.style.backgroundColor = 'rgb(0,0,0,0)';
    }
})