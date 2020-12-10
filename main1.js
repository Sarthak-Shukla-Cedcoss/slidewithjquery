var slideIndex = 0;  
var totalslides = $("#slideshow .slide"); 
var totaldots = $(".footerdot");   
var int;
        function moveSlides(n) { 
            clickon(slideIndex += n);
            clearInterval(int);
            $("#1").removeClass("active");
            $("#2").removeClass("active");
            $("#3").removeClass("active");
            if( slideIndex == 0){
                $("#1").addClass("active");
            }
            if( slideIndex == 1){
                $("#2").addClass("active");
            }
            if( slideIndex == 2){
                $("#3").addClass("active");
            } 
        }    
        function activeSlide(n) { 
            clickon(slideIndex = n); 
            clearInterval(int);
            $("#1").removeClass("active");
            $("#2").removeClass("active");
            $("#3").removeClass("active");
            if( n == 0){
                $("#1").addClass("active");
            }
            if( n == 1){
                $("#2").addClass("active");
            }
            if( n == 2){
                $("#3").addClass("active");
            }
        }
        function clickon(n) { 
            
            if (n > totalslides.length-1) { 
                slideIndex = 0; 
            } 
            if (n < 0) { 
                slideIndex = totalslides.length - 1; 
            } 
            $(".slide").hide();
            totalslides[slideIndex ].style.display = "block";
            slideshow.startSlideshow();  
    } 
    var slideshow = (function () {
        var slides =  $("#slideshow .slide"),
            slidesLen = slides.length - 1 ;
        return {
            startSlideshow: function () {
               int = window.setInterval(function () { 
                    $("#1").removeClass("active");
                    $("#2").removeClass("active");
                    $("#3").removeClass("active");
                    $(".slide").hide();
                    if( slideIndex == 0){
                        $("#1").addClass("active");
                    }
                    if( slideIndex == 1){
                        $("#2").addClass("active");
                    }
                    
                    if ( slideIndex == slidesLen) {
                        $("#3").addClass("active");
                        slides.eq( slideIndex).show();
                        slideIndex = 0;                        
                    } else {
                        slides.eq( slideIndex).show();
                        slideIndex += 1;
                    }
                }, 2000);
            }
        };
    }());
    slideshow.startSlideshow();        