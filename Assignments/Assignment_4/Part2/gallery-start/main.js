const displayedImage = document.querySelector('.displayed-img');
const thumbBar = document.querySelector('.thumb-bar');

const btn = document.querySelector('button');
const overlay = document.querySelector('.overlay');

/* Declaring the array of image filenames */
const images = [pic1.jpg,pic2.jpg,pic3.jpg,pic4.jpg,pic5.jpg];

/* Declaring the alternative text for each image file */
const imageAlts={
    pic1:"A human eye",
    pic2:"A wavy rock",
    pic3:"Purple flowers",
    pic4:"A wall painted with the egyptian history",
    pic5:"A butter over a big leaf"
}
/* Looping through images */

const newImage = document.createElement('img');
newImage.setAttribute('src', xxx);
newImage.setAttribute('alt', xxx);
thumbBar.appendChild(newImage);

/* Wiring up the Darken/Lighten button */
