var responsiveSlider = function() {

  var slider = document.getElementById("slider");
  var sliderWidth = slider.offsetWidth;
  var slideList = document.getElementById("slideWrap");
  var count = 1;
  var items = slideList.querySelectorAll("li").length/3;
  var prev = document.getElementById("prev");
  var next = document.getElementById("next");
  var stop = false;

  window.addEventListener('resize', function() {
    sliderWidth = slider.offsetWidth;
  });

  function prevSlide() {
    if(count > 1) {
      count = count - 2;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count == 1) {
      count = items - 1;
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
  };

  function nextSlide() {
    if(count < items) {
      slideList.style.left = "-" + count * sliderWidth + "px";
      count++;
    }
    else if(count == items) {
      slideList.style.left = "0px";
      count = 1;
    }
  };

slideList.addEventListener("click", function(){
  console.log(1)
 stop = true;
})
  next.addEventListener("click", function() {
    nextSlide();
  });

  prev.addEventListener("click", function() {
    prevSlide();
  });


  setInterval(function() {
    if (stop == false) {
      nextSlide()
    }
  }, 2000) ;

};




window.onload = function() {
  responsiveSlider();
}
