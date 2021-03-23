
///////////////// fixed menu on scroll for desktop
if ($(window).width() > 992) {
    $(window).scroll(function(){  
       if ($(this).scrollTop() > 40) {
          $('#navbar_top').addClass("fixed-top");
          $(".navbar").addClass("new-bg");
        //   $(".nav-link").addClass("new-color");
        //   $("input").addClass("new-input");
        //   $(".search-icon").addClass("new-search-icon");
          // add padding top to show content behind navbar
          $('body').css('padding-top', $('.navbar').outerHeight() + 'px');
        }else{
          $('#navbar_top').removeClass("fixed-top");
           // remove padding top from body
          $('body').css('padding-top', '0');
          $(".navbar").removeClass("new-bg");
        //   $(".nav-link").removeClass("new-color");
        //   $("input").removeClass("new-input");
        //   $(".search-icon").removeClass("new-search-icon");
        }   
    });
  } // end if

$('#testimonial-slider').owlCarousel({
    loop: true,
    margin: 10,
    nav: true,
    items: 3,
    navText: ['<span class="fa fa-chevron-left"></span>', '<span class="fa fa-chevron-right"></span>'],
    responsive: {
        0: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
});

