const account = document.querySelector('.account-svg');
const cart = document.querySelector('cart-svg');

account.addEventListener('mouseenter', function(event) {
    event.setAttribute("stroke","111111");
})

const nav = document.querySelector('.nav');
const navContents = document.querySelector('nav-c');
const produce = document.querySelector('.nav-c-produce');
const produceDrop = document.querySelector('.nav-c-produce-drop');
const home = document.querySelector('.nav-c-home');
const homeDrop = document.querySelector('.nav-c-home-drop');
const clothing = document.querySelector('.nav-c-clothing');
const clothingDrop = document.querySelector('.nav-c-clothing-drop');
const tech = document.querySelector('.nav-c-tech');
const techDrop = document.querySelector('.nav-c-tech-drop');

const hoverColor = '#'

// Produce
produce.addEventListener('mouseenter', function(event) {
    event.target.style.color = hoverColor;
    produceDrop.style.visibility = 'visible';
}, false);

produce.addEventListener('mouseleave', function(event) {
    event.target.style.color = '';
    produceDrop.style.visibility = 'hidden';
})

// Home
home.addEventListener('mouseenter', function(event) {
    event.target.style.color = hoverColor;
    produceDrop.style.visibility = 'visible';
}, false);

home.addEventListener('mouseleave', function(event) {
    event.target.style.color = '';
    produceDrop.style.visibility = 'hidden';
})

// Clothing
clothing.addEventListener('mouseenter', function(event) {
    event.target.style.color = hoverColor;
    produceDrop.style.visibility = 'visible';
}, false);

clothing.addEventListener('mouseleave', function(event) {
    event.target.style.color = '';
    produceDrop.style.visibility = 'hidden';
})

// Tech
tech.addEventListener('mouseenter', function(event) {
    event.target.style.color = hoverColor;
    produceDrop.style.visibility = 'visible';
}, false);

tech.addEventListener('mouseleave', function(event){
    event.target.style.color = '';
    produceDrop.style.visibility = 'hidden';
})