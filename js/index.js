// Your code goes here

//selecting elements
const h1 = document.querySelector('.logo-heading')
const nav = document.querySelector('nav')
const busImg = document.querySelector('img')
const welcome = document.querySelector('.intro h2')
const mapImg = document.querySelector('.img-content img')
const canalImg = document.querySelector('.img')[2]
const beachImg = document.querySelector('.img')[3]
const destination = document.querySelector('.destination')
const firstButton = document.querySelector('.btn')
const secondButton = document.querySelector('.btn')[1]

//animating 

h1

function changeBackground(event){
    nav.style.backgroundColor = 'pink'
    };
    nav.addEventListener('click', changeBackground)