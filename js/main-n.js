jQuery(document).ready(function(){

	"use strict"
	$('.slider').ripples({
	  dropRadius: 8,
	  perturbance: 0.01,
	  
	});


	/*
	$(".text").typed({
	   strings:["Wellcome to my<strong class='primaryRose'> page </strong><strong> 💖</strong>",
	   			"Elizabeth <strong class='primaryRose'>Mroz</strong>"],
	   typespeed: 4,
	   loop: false
	});*/



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

})


	var v = document.getElementsByTagName("video")[0];
	v.play();
