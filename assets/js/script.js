$(function(){


// Scroll menu suave 

  $("a").click(function(event){
    if (this.hash !== "") {
      event.preventDefault();

      var gato = this.hash;

      $("html, body").animate({
        scrollTop: $(gato).offset().top
      }, 800, function(){
        window.location.hash = gato;
      });
    }
  });

// Popover quienes somos
  $('[data-toggle="popover"]').popover();
  });

//Carrousel

$('.carousel').carousel({
  interval: 2000
});

//Navbar scroll cambio de color

$(function() {
    $(window).on("scroll", function() {
        if($(window).scrollTop() > 50) {
            $(".header").addClass("active");
        } else {
           $(".header").removeClass("active");
        }
    });
});
