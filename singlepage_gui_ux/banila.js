//descente.js
window.onscroll = function() {myFunction()};

var nav = document.getElementById("nav");
var sticky = navbar.offsetTop;

function myFunction() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}//

$(function() {
	var pull 		= $('#pull');
		menu 		= $('nav ul');
		menuHeight	= menu.height();

	$(pull).on('click', function(e) {
		e.preventDefault();
		menu.slideToggle();
	});

	$(window).resize(function() {
		var w = $(window).width();
		if(w > 320 && menu.is(':hidden')) {
			menu.removeAttr('style');
		}
	});//

$(document).ready(function(){	
	hh=$(window).height();
	$(".section .center >.se").css({"height":hh});
	$(window).on("load resize", function(){
		hh=$(window).height();
		$(".section .center > .se").css({"height":hh});
		docpos= new Array(0, hh,hh*2,hh*3,hh*4,hh*5);
	});

	$(".page li").on("click",function(e){
			idx=$(".page li").index($(this));
			$(this).addClass("active").siblings().removeClass("active");
			$("html, body").animate({scrollTop:docpos[idx]});
			e.preventDefault();
		});
	$(".clearfix li").click(function(e){
		idx=$(".clearfix li").index($(this));
		$("html,body").animate({scrollTop:docpos[idx]});
		e.preventDefault();
	});

	$(window).scroll(function(e){
		if ($(window).scrollTop()>=hh*4)
		{
			$(".page li").removeClass("active");			
			$(".page li:nth-child(5)").addClass("active");
		}else if($(window).scrollTop() >= hh*3 && $(window).scrollTop() < hh*4){
			$(".page li").removeClass("active");			
			$(".page li:nth-child(4)").addClass("active");		
		}else if($(window).scrollTop() >= hh*2 && $(window).scrollTop() < hh*3){
			$(".page li").removeClass("active");			
			$(".page li:nth-child(3)").addClass("active");		
		}else if($(window).scrollTop() >= hh && $(window).scrollTop() < hh*2){
			$(".page li").removeClass("active");			
			$(".page li:nth-child(2)").addClass("active");		
		}else{
			$(".page li").removeClass("active");			
			$(".page li:nth-child(1)").addClass("active");				
		}
	 });
	});//page
});//doc

var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}