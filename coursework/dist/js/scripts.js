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
tl.from("#span", 1, {width:0}, "-1=");
tl.from("#first", 1, {x:100, y:200, opacity:0}, "=-1");
tl.from("#second", 1, {x:-200, y:0, opacity:0}, "=-.7");

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
  right: "35%",
  bottom: "50%",
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

