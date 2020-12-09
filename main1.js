var slideIndex = 0;  
var totalslides = $(".slide"); 
var totaldots = $(".footerdot");   
        function moveSlides(n) { 
            clickon(slideIndex += n); 
        }    
        function activeSlide(n) { 
            clickon(slideIndex = n); 
        }
        function clickon(n) { 
            var i; 
                    
            if (n > totalslides.length-1) { 
                slideIndex = 0; 
            } 
            if (n < 0) { 
                slideIndex = totalslides.length - 1; 
            } 
            $(".slide").hide();
            totalslides[slideIndex ].style.display = "block";
    } 
    var slideshow = (function () {
        var slides =  $("#slideshow .slide"),
            slidesLen = slides.length - 1 ;
        return {
            startSlideshow: function () {
                window.setInterval(function () { 
                        $(".slide").hide(); 
                    if ( slideIndex == slidesLen) {
                        slides.eq( slideIndex).show();
                        slideIndex = 0;                        
                    } else {
                        slides.eq( slideIndex).show();
                        slideIndex += 1;
                    }
                }, 4000);
            }
        };
    }());
    slideshow.startSlideshow();        