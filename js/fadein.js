
        $(window).scroll(function () {
            // if ($(this).scrollTop() > 20) {
            //       $(".wrapper").addClass("fadeInUp");
            //       $(".footer").fadeIn(1500);

            // } else {
            //   $(".footer").fadeOut(1500);
            //   $(".wrapper").removeClass("fadeInUp");

            // }

            if ($(this).scrollTop() > 600){
                                $(".buttonsbottom").addClass("scrolled");
                  $(".buttonss").css("background-color","#FCDDDE");
            }
              else{
                              $(".buttonsbottom").removeClass("scrolled");
              $(".buttonss").css("background-color","transparent");
              }

              if ($(window).width() < 660) {
                $(".buttonss").css("background-color","#FCDDDE"); //mobile buttons
              }
           if ($(this).scrollTop() >350){
            $(".aboutcontainer").fadeIn(1000);
              $(".aboutinner").addClass("fadeInLeft");
              $(".aboutinner2").addClass("fadeInRight");           
              $(".aboutinner3").addClass("fadeInRight");
            }


            if ($(this).scrollTop() >1100){
              $(".carousel").addClass("fadeInUp");
              $(".circle2").addClass("carouselload");
              $(".carousel").css("opacity","1");  
              $(".contactdiv").fadeIn();        
            }


            if ($(this).scrollTop() >2000){
              $(".envelope").fadeIn(1000);   
              $(".envelope").addClass("wiggle");
              $(".paper").addClass("paperup");
              $(".envelopeback").fadeIn(5000);
            }
        });

$(".envelope").click(function(){
  $(".paper").removeClass("paperup").addClass("fadeUp");
  $(".paperbig").addClass("fadeDown").removeClass("fadeUp");
});

$(".exit").click(function(){
  $(".paper").removeClass("fadeUp").addClass("fadeDown");
  $(".paperbig").addClass("fadeUp").removeClass("fadeDown");;
});











function RSSWidget (url){

  rss              = this;
  rss.FEED_URL     = url; 
  
  rss.JSON     = new Array(); //create a new array
  rss.widgetHolder = $('.rss-widget ul');
  rss.storiesLimit = 4;

  $.ajax({
    url      : 'http://ajax.googleapis.com/ajax/services/feed/load?v=1.0&num=10&callback=?&q=' + encodeURIComponent(rss.FEED_URL),
    dataType : 'json',
    success  : function (data) {
      if (data.responseData.feed && data.responseData.feed.entries) {
        $.each(data.responseData.feed.entries, function (i, e) {
          rss.JSON.push({ //add objects to the array
            title: e.title,
            author: e.author,
            content: e.content || "",
            link: e.link
          });
        });

        if(rss.storiesLimit > rss.JSON.length) 
          rss.storiesLimit = rss.JSON.length;

        for(var i=0; i<rss.storiesLimit; i++){
          rss.renderBlogItem(rss.JSON[i]); 

        }


        
        // $('.rss-widget li').each(function () {
        //   var delay = ($(this).index()/rss.storiesLimit) + 's';
        //   $(this).css({
        //       webkitAnimationDelay: delay,
        //       mozAnimationDelay: delay,
        //       animationDelay: delay
        //   });
        // });
        
        
      }
    }
  });

  rss.renderBlogItem = function (object){
    var item  = '<li class="blog-item">';
        item += '<a href="'+ object.link +'"><i class="fa fa-pencil"></i>';
        item += '<div class="blog-item-title">' + object.title + '</div>';
       // item += '<div class="blog-item-author">' + object.author + '</div>';
        // item += '<div class="blog-item-content">' + object.content + '</div>';
        item += '</a>'
        item += '</li>';

    rss.widgetHolder.append(item);

       $(".blog-item-title").each(function(){
        var $this = $(this);
        if ($this.height() > 30) {
            $this.css('font-size','12px');
            $(".blog-item .fa").css('font-size','16px');
            return true;
          }
        });
  }

}


//awake the function
RSSWidget("http://codepen.io/littleginger/posts/feed/");




$(document).ready(function(){
  $('.carousel').slick({
  centerMode: true,
  centerPadding: '10px',
  slidesToShow: 3,
  responsive: [
    {
      breakpoint: 968,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 2
      }
    },
    {
      breakpoint: 680,
      settings: {
        arrows: true,
        centerMode: true,
        centerPadding: '10px',
        slidesToShow: 1
      }
    }
  ]
});    
  });