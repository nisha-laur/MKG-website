







/*
	This pen cleverly utilizes SVG filters to create a "Morphing Text" effect. Essentially, it layers 2 text elements on top of each other, and blurs them depending on which text element should be more visible. Once the blurring is applied, both texts are fed through a threshold filter together, which produces the "gooey" effect. Check the CSS - Comment the #container rule's filter out to see how the blurring works!
*/

const elts = {
	text1: document.getElementById("text1"),
	text2: document.getElementById("text2")
};

// The strings to morph between. You can change these to anything you want!
const texts = [
	"Welcome",
	"to",
	"MuftKaGyan",
	
	
];

// Controls the speed of morphing.
const morphTime = 1;
const cooldownTime = 0.25;

let textIndex = texts.length - 1;
let time = new Date();
let morph = 0;
let cooldown = cooldownTime;

elts.text1.textContent = texts[textIndex % texts.length];
elts.text2.textContent = texts[(textIndex + 1) % texts.length];

function doMorph() {
	morph -= cooldown;
	cooldown = 0;
	
	let fraction = morph / morphTime;
	
	if (fraction > 1) {
		cooldown = cooldownTime;
		fraction = 1;
	}
	
	setMorph(fraction);
}

// A lot of the magic happens here, this is what applies the blur filter to the text.
function setMorph(fraction) {
	// fraction = Math.cos(fraction * Math.PI) / -2 + .5;
	
	elts.text2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	fraction = 1 - fraction;
	elts.text1.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
	elts.text1.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
	
	elts.text1.textContent = texts[textIndex % texts.length];
	elts.text2.textContent = texts[(textIndex + 1) % texts.length];
}

function doCooldown() {
	morph = 0;
	
	elts.text2.style.filter = "";
	elts.text2.style.opacity = "100%";
	
	elts.text1.style.filter = "";
	elts.text1.style.opacity = "0%";
}

// Animation loop, which is called every frame.
function animate() {
	requestAnimationFrame(animate);
	
	let newTime = new Date();
	let shouldIncrementIndex = cooldown > 0;
	let dt = (newTime - time) / 1000;
	time = newTime;
	
	cooldown -= dt;
	
	if (cooldown <= 0) {
		if (shouldIncrementIndex) {
			textIndex++;
		}
		
		doMorph();
	} else {
		doCooldown();
	}
}

// Start the animation.
animate();

//  The Header ends here and the new section starts here

jQuery(document).ready(function ($) {
	var feedbackSlider = $(".feedback-slider");
	feedbackSlider.owlCarousel({
		items: 1,
		nav: true,
		dots: true,
		autoplay: true,
		loop: true,
		mouseDrag: true,
		touchDrag: true,
		navText: [
			"<i class='fa fa-long-arrow-left'></i>",
			"<i class='fa fa-long-arrow-right'></i>"
		],
		responsive: {
			// breakpoint from 767 up
			767: {
				nav: true,
				dots: false
			}
		}
	});

	feedbackSlider.on("translate.owl.carousel", function () {
		$(".feedback-slider-item h3")
			.removeClass("animated fadeIn")
			.css("opacity", "0");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.removeClass("animated zoomIn")
			.css("opacity", "0");
	});

	feedbackSlider.on("translated.owl.carousel", function () {
		$(".feedback-slider-item h3").addClass("animated fadeIn").css("opacity", "1");
		$(".feedback-slider-item img, .feedback-slider-thumb img, .customer-rating")
			.addClass("animated zoomIn")
			.css("opacity", "1");
	});
	feedbackSlider.on("changed.owl.carousel", function (property) {
		var current = property.item.index;
		var prevThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("img")
			.attr("src");
		var nextThumb = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("img")
			.attr("src");
		var prevRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.prev()
			.find("span")
			.attr("data-rating");
		var nextRating = $(property.target)
			.find(".owl-item")
			.eq(current)
			.next()
			.find("span")
			.attr("data-rating");
		$(".thumb-prev").find("img").attr("src", prevThumb);
		$(".thumb-next").find("img").attr("src", nextThumb);
		$(".thumb-prev")
			.find("span")
			.next()
			.html(prevRating + '<i class="fa fa-star"></i>');
		$(".thumb-next")
			.find("span")
			.next()
			.html(nextRating + '<i class="fa fa-star"></i>');
	});
	$(".thumb-next").on("click", function () {
		feedbackSlider.trigger("next.owl.carousel", [300]);
		return false;
	});
	$(".thumb-prev").on("click", function () {
		feedbackSlider.trigger("prev.owl.carousel", [300]);
		return false;
	});
}); //end ready


// The secondslider is starting and the first slider has ended 



var theParent = document.querySelector("#topnav");
theParent.addEventListener("click", doSomething);

function doSomething(e) {
  // console.log(e.target.id);

  if (e.target.id == document.getElementsByTagName("li")[0].id) {
    document.querySelector(".hori-selector").style.left = "824.859px";
    document.querySelector(".container1").style.right = "435px";
  }
  else if (e.target.id == document.getElementsByTagName("li")[1].id) {
    document.querySelector(".hori-selector").style.setProperty("left", "937.859px ");
    document.querySelector(".container1").style.right = "317px";
    
    // document.querySelector(".hori-selector").style.left = "937.859px  ";

  } else if (e.target.id == document.getElementsByTagName("li")[2].id) {
    document.querySelector(".hori-selector").style.left = "1028.86px ";
    document.querySelector(".container1").style.right = "214px";
  }
  else if (e.target.id == document.getElementsByTagName("li")[3].id) {
    document.querySelector(".hori-selector").style.left = "1114.86px";
    document.querySelector(".container1").style.right = "113px"; 
  }
  else if(e.target.id == document.getElementsByTagName("li")[4].id){
    document.querySelector(".hori-selector").style.left = "1209.86px";
    document.querySelector(".container1").style.right = "23px";
    
  }
  e.stopPropagation();
}

document.querySelector("#topnav").addEventListener("click", changecolor);
 function changecolor() {
  if (document.querySelector(".hori-selector").style.left == "824.859px") {
    document.getElementsByTagName("li")[0].style.color = "#022b3a";
    document.querySelector(".container1").style.display = "block";
    
  } else {
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    
  }
  
  
  if (document.querySelector(".hori-selector").style.left == "937.859px") {
    document.getElementsByTagName("li")[1].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[1].style.color = "rgb(185, 182, 182)";
   
  }

  if (document.querySelector(".hori-selector").style.left == "1028.86px") {
    document.getElementsByTagName("li")[2].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[2].style.color = "rgb(185, 182, 182)";
   
  }

  if (document.querySelector(".hori-selector").style.left == "1114.86px") {
    document.getElementsByTagName("li")[3].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[3].style.color = "rgb(185, 182, 182)";
   
  }
  if (document.querySelector(".hori-selector").style.left == "1209.86px") {
    document.getElementsByTagName("li")[4].style.color = "#022b3a";
    document.getElementsByTagName("li")[0].style.color = "rgb(185, 182, 182)";
    document.querySelector(".container1").style.display = "block";
  } else {
    document.getElementsByTagName("li")[4].style.color = "rgb(185, 182, 182)";
    
  }

}


document.querySelector("body").addEventListener("click", function(){
	document.querySelector(".container1").style.display = "none";
});
// document.querySelector(' a').addEventListener("click",clicked);
// function clicked (event) {
//   event.preventDefault();
//   // or use return false;
// }



