// Select DOM Items
const menuBtn = document.querySelector('.menu-btn');
const menu = document.querySelector('.menu');
const menuNav = document.querySelector('.menu-nav');
const navItems = document.querySelectorAll('.nav-item');

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

// Scroll based animations on front page

var tl = new TimelineMax({onUpdate:updatePercentage});
var tl2 = new TimelineMax();
const controller = new ScrollMagic.Controller();


// Timeline animations
tl.from("#blockquote", .5, {x:200, opacity:0});
tl.from("#span", 1, {width:0}, "=-.5");
tl.from("#first", 2, {x:100, y:200, opacity:0}, "=1.5");
tl.from("#second", 2, {x:-200, y:0, opacity:0}, "=-.7");

const scene = new ScrollMagic.Scene({
  triggerElement: ".sticky", 
  triggerHook: "onLeave",
  duration: "100%"
})
.setPin(".sticky")
.setTween(tl)
  .addTo(controller);

tl2.from("#box", .5,{opacity: 10, scale: 0}, "=-.8");
tl2.to("#box", .5 ,{
  right: "39%",
  bottom: "36%",
  scale: 1.3,
  borderColor: "white",
  borderWidth: 5,
  boxShadow: '1px 1px 0px 0px rgba(0,0,0,.09)'
});

const scene2 = new ScrollMagic.Scene({
  triggerElement: "#blockquote"
})
 .setTween(tl2)
   .addTo(controller);

function updatePercentage() {
  tl.progress();
}

// Animations on contact page
var tl3 = new TimelineMax();

// Timeline animations
tl3
  .fromTo(".banner-animation", 3, {opacity:0}, {opacity:1, duration: 1})
  .to("#content", 3, {opacity: 1, duration: 2.5, ease: "(0.7, 0.7, false)" }, 1.5)
  .from('#form', 2, {x: -500, duration: 2.5}, "=-3")
  .fromTo(".h2", 3, {opacity:0}, {opacity:1, duration: 1}, "=-2")
  .fromTo('.box-1', 1, {rotation:-360,opacity:0}, 
  {rotation:0,opacity:1, duration: 1, ease: "slow(0.7,0.7, false)"}, "-=1.9")
  .fromTo('.box-2', 1, {rotation:-360,opacity:0}, 
  {rotation:0,opacity:1, duration: 1, ease: "slow(0.7,0.7, false)"}, "-=1.7")
  .fromTo('.box-3', 1, {rotation:-360,opacity:0}, 
  {rotation:0,opacity:1, duration: 1, ease: "slow(0.7,0.7, false)"}, "-=1.3")
