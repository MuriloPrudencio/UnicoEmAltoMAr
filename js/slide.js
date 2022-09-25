/*Slide show cantores */
(function($) {
  "use strict";
  $.fn.sliderResponsive = function(settings) {
    
    var set = $.extend( 
      {
        slidePause: 5000,
        fadeSpeed: 800,
        autoPlay: "on",
        showArrows: "off", 
        hideDots: "off", 
        hoverZoom: "on",
        titleBarTop: "off"
      },
      settings
    ); 
    
    var $slider = $(this);
    var size = $slider.find("> div").length; 
    var position = 0; 
    var sliderIntervalID; 

    if (set.autoPlay === "on") {
        startSlider(); 
    } 
    
    if (set.showArrows === "on") {
        $slider.addClass('showArrows'); 
    }
    
    if (set.hideDots === "on") {
        $slider.addClass('hideDots'); 
    }
    
    if (set.hoverZoom === "off") {
        $slider.addClass('hoverZoomOff'); 
    }
    
    if (set.titleBarTop === "on") {
        $slider.addClass('titleBarTop'); 
    }

    function startSlider() {
      sliderIntervalID = setInterval(function() {
        nextSlide();
      }, set.slidePause);
    }
    
    $slider.mouseover(function() {
      if (set.autoPlay === "on") {
        clearInterval(sliderIntervalID);
      }
    });
      
    $slider.mouseout(function() {
      if (set.autoPlay === "on") {
        startSlider();
      }
    });

    $slider.find("> .right").click(nextSlide)

    $slider.find("> .left").click(prevSlide);
      
    function nextSlide() {
      position = $slider.find(".show").index() + 1;
      if (position > size - 1) position = 0;
      changeCarousel(position);
    }
    
    function prevSlide() {
      position = $slider.find(".show").index() - 1;
      if (position < 0) position = size - 1;
      changeCarousel(position);
    }

    $slider.find(" > ul > li").click(function() {
      position = $(this).index();
      changeCarousel($(this).index());
    });

    function changeCarousel() {
      $slider.find(".show").removeClass("show").fadeOut();
      $slider
        .find("> div")
        .eq(position)
        .fadeIn(set.fadeSpeed)
        .addClass("show");
      $slider.find("> ul").find(".showli").removeClass("showli");
      $slider.find("> ul > li").eq(position).addClass("showli");
    }

    return $slider;
  };
})(jQuery);

$(document).ready(function() {
  
  $("#slider1").sliderResponsive({
    slidePause: 5000,
    fadeSpeed: 400,
    autoPlay: "on",
    showArrows: "off", 
    hideDots: "off", 
    hoverZoom: "on", 
    titleBarTop: "off",
  });
}); 

/*Slide show cabine */
$(function(){
  stripSlider()
  function stripSlider(){
      imgSrc=new Array()
      $(".slider-wrapper img").each(function(index,element){
          imgSrc.push($(element).attr("src"))
      })
      $(".slider-wrapper img").remove()
      $(".slider-wrapper").append("<img>")
      $(".slider-wrapper img").attr("src",imgSrc[0])
      playSlider(0,0)
  }


  function fadeSlider(Item,_No,_r){
      if ($(".slider-wrapper img").length >2){
              Item.fadeOut(50,function(){
                  fadeSlider($(".slider-wrapper img").eq(arrRandom[_r+1]),_No,_r+1)
              })       
          if (_r+1==arrRandom.length){
             $(".slider-wrapper img:first-child").animate({width:"100%"},2000,function(){
                  $(".slider-wrapper img[style*='clip']").remove()
                  playSlider(_No+1,0)
             })
          }     
      }
  }

//Slide cabine
  function strip(_No){
     for (var j=0;j<14;j++){
         right=(j+1)*50
         left=j*50
          for (var i=0;i<8;i++){
              $(".slider-wrapper").append("<img>")
              $(".slider-wrapper img").last().attr("src",$(".slider-wrapper img").first().attr("src"))
              var bottom=(i+1)*50
              var top=i*50
              $(".slider-wrapper img").last().css("clip","rect("+top+"px,"+right+"px,"+bottom+"px,"+left+"px)")
          }
     }
      $(".slider-wrapper img").first().before("<img>")
      $(".slider-wrapper img").first().attr("src",imgSrc[_No+1])
      $(".slider-wrapper img:nth-child(2)").remove()
  }


  function playSlider(_No,_r){
      if (_No >= imgSrc.length -1){
          _No= -1
      }
      strip(_No)
      random()
      fadeSlider($(".slider-wrapper img").eq(arrRandom[_r]),_No,_r)  
   
  }


  function random(){
      arrRandom=new Array()
      while (arrRandom.length != 112){
          randomNo=Math.ceil(Math.random()*112)
          if (arrRandom.indexOf(randomNo) == -1){
              arrRandom.push(randomNo)
          }
      }  
  }

})

