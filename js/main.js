jQuery(document).ready(function($){

	"use strict"
	$('.slider').ripples({
	  dropRadius: 2,
	  perturbance: 0.001,
	});
	
	$(window).scroll(function(){

		var top = $(window).scrollTop();

		if(top>60){
			$("nav").addClass('secondary');
		} else {
			if ($("nav").hasClass('secondary')) {
				$("nav").removeClass('secondary');
			}
		}
	});



	$('.work').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	    enabled: true
	  },
	});


})


var v = document.getElementsByTagName("video");
v.play();
v.muted = true;






/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]')

function scrollActive(){
    const scrollY = window.pageYOffset

    sections.forEach(current =>{
        const sectionHeight = current.offsetHeight,
            sectionTop = current.offsetTop - 50,
            sectionId = current.getAttribute('id')

        if(scrollY > sectionTop && scrollY <= sectionTop + sectionHeight){
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.add('active-link')
        }else{
            document.querySelector('.nav-menu a[href*=' + sectionId + ']').classList.remove('active-link')
        }
    })
}
window.addEventListener('scroll', scrollActive)


/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader(){
    const header = document.getElementById('header')
    // When the scroll is greater than 80 viewport height, add the scroll-header class to the header tag
    if(this.scrollY >= 80) header.classList.add('scroll-header'); else header.classList.remove('scroll-header')
}
window.addEventListener('scroll', scrollHeader)
