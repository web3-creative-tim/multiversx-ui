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
