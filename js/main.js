jQuery(document).ready(function($){

	"use strict"
	$('.slider').ripples({
	  dropRadius: 2,
	  perturbance: 0.001,
	});
	/*
	$(window).scroll(function(){

		var top = $(window).scrollTop();

		if(top>60){
			$("nav").addClass('secondary');
		} else {
			if ($("nav").hasClass('secondary')) {
				$("nav").removeClass('secondary');
			}
		}
	});*/



	$('.post-wrapper').slick({
	  slidesToShow: 1,/**/
	  slidesToScroll: 1,
	  autoplay: false,
	  autoplaySpeed: 2000,
	  nextArrow: $('.next'),
	  prevArrow: $('.prev'),
	  responsive: [
	    {
	      breakpoint: 1024,
	      settings: {
	        slidesToShow: 1,/**/
	        slidesToScroll: 1,/**/
	        infinite: true,
	        dots: true
	      }
	    },
	    {
	      breakpoint: 600,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    },
	    {
	      breakpoint: 480,
	      settings: {
	        slidesToShow: 1,
	        slidesToScroll: 1
	      }
	    }
	    // You can unslick at a given breakpoint now by adding:
	    // settings: "unslick"
	    // instead of a settings object
	  ]
	});



	$('.work').magnificPopup({
	  delegate: 'a', // child items selector, by clicking on it popup will open
	  type: 'image',
	  gallery: {
	    enabled: true
	  },
	});


})



const navSlide = () => {
	const burger = document.querySelector('.burger');
	const nav =document.querySelector('.nav-items');
	const navItems = document.querySelectorAll('.nav-items li')
	
	burger.addEventListener('click', () => {
		//Toggle nav
		nav.classList.toggle('nav-active')

		//Animation items
		navItems.forEach((item, index) => {
			if (item.style.animation) {
				item.style.animation = '';
			} else {
				item.style.animation = `navItemFade 0.2s ease forwards ${index / 10}s`;
			}
		});

		//Burger animation
		burger.classList.toggle('toggle');
	});
}

navSlide();




	var v = document.getElementsByTagName("video")[0];
	v.play();
	v.muted = true;
	



	function read_more_less() {
		var photo = document.getElementById('dots');
		var morePhoto = document.getElementById('more');
		var btnMP = document.getElementById('btn_mp');

		if (photo.style.display === 'none') {
			photo.style.display = 'inline';
			morePhoto.style.display = 'none';
			btnMP.innerHTML = "See more";
		} else {
			photo.style.display = "none";
			morePhoto.style.display = "inline";
			btnMP.innerHTML = "See less";
		}
	}


	



	