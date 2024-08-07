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
for(const image of images){
const newImage = document.createElement('img');
newImage.setAttribute('src', image);
newImage.setAttribute('alt', imageAlts[image]);
thumbBar.appendChild(newImage);
newImage.addEventListener('click', e => {
    displayedImage.src = e.target.src;
    displayedImage.alt = e.target.alt;
  });
}

/* Wiring up the Darken/Lighten button */
btn.getAttribute
btn.addEventListener('click',() =>{
    const buttonClass= btn.getAttribute('class');
    if(buttonClass=='Dark'){
        btn.setAttribute('class','Light');
        btn.textContent='Lighten';
        overlay.style.backgroundColor = 'rgba(0,0,0,0.5)';
    }else{
        btn.setAttribute==('class','Dark');
        btn.textContent='Darken';
     overlay.style.backgroundColor='rgba(0,0,0,0)';
    }
})
