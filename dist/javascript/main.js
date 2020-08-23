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

    setTimeout(function() {
        event.target.style.color = '';
        produceDrop.style.visibility = 'hidden';
    }, 500);
}, false);


// Home
home.addEventListener('mouseenter', function(event) {
    event.target.style.color = hoverColor;
    produceDrop.style.visibility = 'visible';

    setTimeout(function() {
        event.target.style.color = '';
        produceDrop.style.visibility = 'hidden';
    }, 500);
}, false);

// Clothing
clothing.addEventListener('mouseenter', function(event) {
    event.target.style.color = hoverColor;
    produceDrop.style.visibility = 'visible';

    setTimeout(function() {
        event.target.style.color = '';
        produceDrop.style.visibility = 'hidden';
    }, 500);
}, false);

// Tech
tech.addEventListener('mouseenter', function(event) {
    event.target.style.color = hoverColor;
    produceDrop.style.visibility = 'visible';

    setTimeout(function() {
        event.target.style.color = '';
        produceDrop.style.visibility = 'hidden';
    }, 500);
}, false);