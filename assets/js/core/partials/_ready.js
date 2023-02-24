// Verify navbar blur on scroll
navbarBlurOnScroll('navbarBlur');


// initialization of Tooltips
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
  return new bootstrap.Tooltip(tooltipTriggerEl)
})

// Tabs navigation

var total = document.querySelectorAll('.nav-pills');

total.forEach(function(item, i){
  var moving_div = document.createElement('div');
  var first_li = item.querySelector('li:first-child .nav-link');
  var tab = first_li.cloneNode();
  tab.innerHTML = "&nbsp;";

  moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
  moving_div.appendChild(tab);
  item.appendChild(moving_div);

  var list_length = item.getElementsByTagName("li").length;

  moving_div.style.padding = '0px';
  moving_div.style.width = item.querySelector('li:nth-child(1)').offsetWidth+'px';
  moving_div.style.transform = 'translate3d(0px, 0px, 0px)';
  moving_div.style.transition = '.5s ease';

  item.onmouseover = function(event) {
    let target = getEventTarget(event);
    let li = target.closest('li'); // get reference
    if(li){
      let nodes = Array.from( li.closest('ul').children ); // get array
      let index = nodes.indexOf( li )+1;
      item.querySelector('li:nth-child('+index+') .nav-link').onclick = function(){
        moving_div = item.querySelector('.moving-tab');
        let sum = 0;
        if(item.classList.contains('flex-column')){
          for(var j = 1; j<=nodes.indexOf( li ); j++){
            sum +=  item.querySelector('li:nth-child('+j+')').offsetHeight;
          }
          moving_div.style.transform = 'translate3d(0px,'+sum+'px, 0px)';
          moving_div.style.height = item.querySelector('li:nth-child('+j+')').offsetHeight;
        } else {
          for(var j = 1; j<=nodes.indexOf( li ); j++){
            sum +=  item.querySelector('li:nth-child('+j+')').offsetWidth;
          }
          moving_div.style.transform = 'translate3d('+sum+'px, 0px, 0px)';
          moving_div.style.width = item.querySelector('li:nth-child('+index+')').offsetWidth+'px';
        }
      }
    }
  }
});


// Tabs navigation resize

window.addEventListener('resize', function(event){
  total.forEach(function(item, i){
    item.querySelector('.moving-tab').remove();
    var moving_div = document.createElement('div');
    var tab = item.querySelector(".nav-link.active").cloneNode();
    tab.innerHTML = "&nbsp;";

    moving_div.classList.add('moving-tab', 'position-absolute', 'nav-link');
    moving_div.appendChild(tab);

    item.appendChild(moving_div);

    moving_div.style.padding = '0px';
    moving_div.style.transition = '.5s ease';

    let li = item.querySelector(".nav-link.active").parentElement;

    if(li){
      let nodes = Array.from( li.closest('ul').children ); // get array
      let index = nodes.indexOf( li )+1;

        let sum = 0;
        if(item.classList.contains('flex-column')){
          for(var j = 1; j<=nodes.indexOf( li ); j++){
            sum +=  item.querySelector('li:nth-child('+j+')').offsetHeight;
          }
          moving_div.style.transform = 'translate3d(0px,'+sum+'px, 0px)';
          moving_div.style.width = item.querySelector('li:nth-child('+index+')').offsetWidth+'px';
          moving_div.style.height = item.querySelector('li:nth-child('+j+')').offsetHeight;
        } else {
          for(var j = 1; j<=nodes.indexOf( li ); j++){
            sum +=  item.querySelector('li:nth-child('+j+')').offsetWidth;
          }
          moving_div.style.transform = 'translate3d('+sum+'px, 0px, 0px)';
          moving_div.style.width = item.querySelector('li:nth-child('+index+')').offsetWidth+'px';

        }
    }
  });

  if (window.innerWidth < 991) {
   total.forEach(function(item, i){
    if(!item.classList.contains('flex-column')){
      item.classList.add('flex-column', 'on-resize');
    }
   });
  } else {
    total.forEach(function(item, i){
      if(item.classList.contains('on-resize')){
        item.classList.remove('flex-column', 'on-resize');
      }
    })
  }
});


function getEventTarget(e) {
 e = e || window.event;
 return e.target || e.srcElement;
}

// End tabs navigation


// Navbar blur on scroll

function navbarBlurOnScroll(id) {
  const navbar = document.getElementById(id);
  let navbarScrollActive = navbar ? navbar.getAttribute("navbar-scroll") : false;
  let scrollDistance = 5;
  let classes = [ 'position-sticky', 'blur', 'shadow-blur', 'mt-4', 'left-auto', 'top-1', 'z-index-sticky' ];
  let toggleClasses = ['shadow-none'];

  if (navbarScrollActive == 'true') {
    window.onscroll = debounce(function() {
      if (window.scrollY > scrollDistance) {
        blurNavbar();
      } else {
        transparentNavbar();
      }
    }, 10);
  } else {
    window.onscroll = debounce(function() {
      transparentNavbar();
    }, 10);
  }

  function blurNavbar() {
    navbar.classList.add(...classes)
    navbar.classList.remove(...toggleClasses)

    toggleNavLinksColor('blur');
  }

  function transparentNavbar() {
    if (navbar) {
      navbar.classList.remove(...classes)
      navbar.classList.add(...toggleClasses)

      toggleNavLinksColor('transparent');
    }
  }

  function toggleNavLinksColor(type) {
    let navLinks = document.querySelectorAll('.navbar-main .nav-link')
    let navLinksToggler = document.querySelectorAll('.navbar-main .sidenav-toggler-line')

    if (type === "blur") {
      navLinks.forEach(element => {
        element.classList.remove('text-body')
      });

      navLinksToggler.forEach(element => {
        element.classList.add('bg-dark')
      });
    } else if (type === "transparent") {
      navLinks.forEach(element => {
        element.classList.add('text-body')
      });

      navLinksToggler.forEach(element => {
        element.classList.remove('bg-dark')
      });
    }
  }
}


// Debounce Function
// Returns a function, that, as long as it continues to be invoked, will not
// be triggered. The function will be called after it stops being called for
// N milliseconds. If `immediate` is passed, trigger the function on the
// leading edge, instead of the trailing.
function debounce(func, wait, immediate) {
	var timeout;
	return function() {
		var context = this, args = arguments;
		var later = function() {
			timeout = null;
			if (!immediate) func.apply(context, args);
		};
		var callNow = immediate && !timeout;
		clearTimeout(timeout);
		timeout = setTimeout(later, wait);
		if (callNow) func.apply(context, args);
	};
};

// Toggle Sidenav
const iconNavbarSidenav = document.getElementById('iconNavbarSidenav');
const iconSidenav = document.getElementById('iconSidenav');
const sidenav = document.getElementById('sidenav-main');
let body = document.getElementsByTagName('body')[0];
let className = 'g-sidenav-pinned';

if (iconNavbarSidenav) {
  iconNavbarSidenav.addEventListener("click", toggleSidenav);
}

if (iconSidenav) {
  iconSidenav.addEventListener("click", toggleSidenav);
}

function toggleSidenav() {
  if (body.classList.contains(className)) {
    body.classList.remove(className);
    sidenav.classList.remove('bg-transparent');

  } else {
    body.classList.add(className);
    sidenav.classList.remove('bg-transparent');
    iconSidenav.classList.remove('d-none');
  }
}

// Switch Mode Function
function switchMode(el){
  let navbar = document.querySelector('.navbar');
  let imagesToReplace = ['logo-multiversx.svg', 'logo-creative-tim.svg', 'elements.png', 'design.png', 'guideline.png'];

  // Change the body background color
  let body = document.querySelector('body');
  body.classList.toggle('bg-black');

  // Change the icon inside button
  let icon = el.querySelector('.fa');

  icon.classList.toggle('fa-sun');
  icon.classList.toggle('fa-moon');

  if(!body.classList.contains('bg-black')){
    // Add classes to toggle button
    el.classList.remove('bg-black-100', 'border-black-100');
    el.classList.add('btn-white');

    //Get all texts with .text-white class and replace them with .text-dark
    let textWhite = document.querySelectorAll('.text-white');
    textWhite.forEach((text) => {
      if(!text.closest('.bg-black') && !text.closest('.bg-info')){
        text.classList.remove('text-white');
        text.classList.add('text-dark');
      }
    });

    // Replace avatars bg color
    let avatars = document.querySelectorAll('.avatar.bg-black-100');
    avatars.forEach((avatar) => {
      avatar.classList.remove('bg-black-100');
      avatar.classList.add('bg-white', 'border');

    });

    // Replace card with bg dark
    let cards = document.querySelectorAll('.card.bg-black-100');
    cards.forEach((card) => {
      card.classList.remove('bg-black-100');
      card.classList.add('blur');
    });

    // Replace white badges within cards
    let badges = document.querySelectorAll('.badge.border-white');
    badges.forEach((badge) => {
      badge.classList.remove('border-white');
      badge.classList.add('border-dark', 'text-dark');
    });

    // Replace navbar bg color
    navbar.classList.remove('bg-black-200');
    navbar.classList.add('blur');

    // Replace Images
    imagesToReplace.forEach((image, i) => {
      let currentImage = document.querySelector('img[src*="'+image+'"]');
      let source = currentImage.src;
      let newSource;
      if(source.endsWith('.svg')){
        newSource = source.replace('.svg', '') + "-dark.svg";
      } else {
        newSource = source.replace('.png', '') + "-dark.png";
      }
      currentImage.src = newSource;
    });

  } else {
    // Add classes to toggle button
    el.classList.add('bg-black-100', 'border-black-100');
    el.classList.remove('btn-white');

    // Redeclare new images
    let imagesToReplace = ['logo-multiversx-dark.svg', 'logo-creative-tim-dark.svg', 'elements-dark.png', 'design-dark.png', 'guideline-dark.png'];

     //Get all texts with .text-dark class and replace them with .text-white
     let textDark = document.querySelectorAll('.text-dark');
     textDark.forEach((text) => {
       if(!text.closest('.bg-primary')){
         text.classList.add('text-white');
         text.classList.remove('text-dark');
       }
     });
     // Replace avatars bg color
     let avatars = document.querySelectorAll('.avatar.bg-white');
     avatars.forEach((avatar) => {
       avatar.classList.add('bg-black-100');
       avatar.classList.remove('bg-light', 'border');
     });

     // Replace card with bg blur
     let cards = document.querySelectorAll('.card.blur');
     cards.forEach((card) => {
       card.classList.add('bg-black-100');
       card.classList.remove('blur');
     });

     // Replace dark badges within cards
     let badges = document.querySelectorAll('.badge.border-dark');
     badges.forEach((badge) => {
       badge.classList.remove('border-dark');
       badge.classList.add('border-white');
     });

     // Replace navbar bg color
     navbar.classList.add('bg-black-200');
     navbar.classList.remove('blur');
     // Replace Images
     imagesToReplace.forEach((image, i) => {
       let currentImage = document.querySelector('img[src*="'+image+'"]');
       let source = currentImage.src;
       let newSource;
       if(source.endsWith('.svg')){
         newSource = source.replace('-dark.svg', '') + ".svg";
       } else {
         newSource = source.replace('-dark.png', '') + ".png";
       }

       imagesToReplace[i] = newSource;
       currentImage.src = newSource;
     });
  }

}
