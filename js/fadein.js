
$(document).ready(function(){
        $(window).scroll(function () {
            if ($(this).scrollTop() > 20) {
                  $(".container").addClass("fadeInUp");
                  $(".footer").fadeIn(1500);

            } else {
              $(".footer").fadeOut(1500);
              $(".container").removeClass("fadeInUp");

            }

            if ($(this).scrollTop() > 600){
                                $(".buttonsbottom").addClass("scrolled");
                  $(".buttonss").css("background-color","#FCDDDE");
            }
              else{
                              $(".buttonsbottom").removeClass("scrolled");
              $(".buttonss").css("background-color","transparent");
              }

              if ($(window).width() < 660) {
                $(".buttonss").css("background-color","#FCDDDE");
              }
            if ($(this).scrollTop() >900){
              $(".port").addClass("animate");
              $(".port").css("opacity","1");
            }
        });
    });


// $('.port').on('click', function() {
//   $(this).toggleClass("selected");
//     $(".main2").slideDown(1500);
//    $(".main").slideUp("slow");
// });

// $(".exit").on('click', function() {
//  $("html, body").animate({ scrollTop: 0 }, "slow");
// location.reload();
// });

// $(".fa.fa-user.fa-2x").click(function(){
//   $(".container").slideDown(1500);
//   $(".aboutcontainer").slideDown(1500);
//   $(".portcontainer, .contactcontainer").slideUp();
//   $(".exit").css("display","block");
// });

// $(".fa.fa-th.fa-2x").click(function(){
//   $(".container").slideDown(1500);
//   $(".portcontainer ").slideDown(1500);
//    $(".aboutcontainer, .contactcontainer").slideUp();
//   $(".exit").css("display","block");
// });



// var clicked;

// $('.port').click(function(){
//     clicked = $(this);
// });

//$(clicked).on('click', function() {
//  $(".main2").slideDown(1500);
//  $(".main").slideUp("slow");
//});


