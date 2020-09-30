// Your code goes here

//selecting elements
const h1 = document.querySelector('.logo-heading')
const nav = document.querySelector('nav')
const busImg = document.querySelector('img')
const welcome = document.querySelector('.intro h2')
const mapImg = document.querySelector('.img-content img')
const canalImg = document.querySelector('.img-fluid')
const beachImg = document.querySelector('.content-destination img')
const destination = document.querySelector('.destination h4')
const button = document.querySelector('.btn')
const footer = document.querySelector('footer')

//changing h1 font color on click
function changeColor(event){
    h1.style.color = 'pink';
};
h1.addEventListener('click', changeColor);

//changing nav to background color on double click
function changeBackground(event){
    nav.style.backgroundColor = 'red';
};
nav.addEventListener('dblclick', changeBackground);

//giving busImg a border on mouseover
function busBorder(event){
    busImg.style.border = '2px dotted blue';
};
busImg.addEventListener('mouseover', busBorder);

//deleting welcome text upon keydown of 'h'
document.addEventListener('keydown', function(event){
    if (event.key === 'h'){
        welcome.textContent = '';
    };
});

//mapImg scales when using mousewheel over it
function zoom(event) {
    event.preventDefault();
  
    scale += event.deltaY * -0.01;
  
    // Restrict scale
    scale = Math.min(Math.max(.125, scale), 4);
  
    // Apply scale transform
    mapImg.style.transform = `scale(${scale})`;
  };
  
  let scale = 1;
  mapImg.addEventListener('wheel', zoom);

//canalImg border turns red on page load
window.addEventListener('load', function(event){
    canalImg.style.border = '3px solid red'
});

//beachImg border turns orange on keyup of 'm'
document.addEventListener('keyup', function(event){
    if (event.key === 'm'){
        beachImg.style.border = '3px dashed orange';
    };
});

//destination font color change on mouseleave
function changeDestination(event){
    destination.style.color = 'green';
};
destination.addEventListener('mouseleave', changeDestination);

//button disappears on mousedown
function hideButton(event){
    button.style.visibility = 'hidden';
};
button.addEventListener('mousedown', hideButton)

//footer background color changes on mouseenter
function footerColor(event) {
    footer.style.backgroundColor = 'blue';
  }
  footer.addEventListener('mouseenter', footerColor);

//nesting and stopping propagation
const buttons = document.querySelectorAll('.btn')
const button2 = buttons[2]

function eventListener (event) {
    // handle the click event
    console.log(`
    timestamp: ${Math.floor(event.timeStamp / 1000)}
    `)
}
button2.addEventListener('mouseover', eventListener)

Array.from(document.all).forEach(elem => {
    elem.addEventListener('mouseover', eventListener)
    event.stopPropagation()
})

//preventing default behavior of nav items
document.querySelector('a').addEventListener('click', event => {
    event.preventDefault()
})


   