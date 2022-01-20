// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

try {
  const formBtn = document.getElementById("form-btn");
  formBtn.addEventListener('click', function() {
    alert("Not working");
}) 
} catch (error) {
  console.log(error);
}




// Set Initial State Of Menu
let showMenu = false;

menuBtn.addEventListener('click', toggleMenu);

function toggleMenu() {
  if (!showMenu) {
    menuBtn.classList.add('close');
    menu.classList.add('show');
    menuNav.classList.add('show');;
    navItems.forEach(item => item.classList.add('show'));

    // Set Menu State
    showMenu = true;
  } else {
    menuBtn.classList.remove('close');
    menu.classList.remove('show');
    menuNav.classList.remove('show');
    navItems.forEach(item => item.classList.remove('show'));

    // Set Menu State
    showMenu = false;
  }
}



// Animations on contact page
var tl3 = new TimelineMax();

// Timeline animations
tl3
  .fromTo(".banner-animation", 3, {opacity:0}, {opacity:1, duration: 1})
  .to("#content", 3, {opacity: 1, duration: 2.5, ease: "(0.7, 0.7, false)" }, 1.5)
  .from('#form', 2, {x: -600, duration: 2.5}, "=-3")
  .fromTo(".h2", 3, {opacity:0}, {opacity:1, duration: 1}, "=-2")
  .fromTo('.box-1', 1, {opacity:0}, 
  {opacity:1, duration: 1, ease: "slow(0.7,0.7, false)"}, "-=1.9")
  .fromTo('.box-2', 1, {opacity:0}, 
  {opacity:1, duration: 1, ease: "slow(0.7,0.7, false)"}, "-=1.7")
  .fromTo('.box-3', 1, {opacity:0}, 
  {opacity:1, duration: 1, ease: "slow(0.7,0.7, false)"}, "-=1.3")
