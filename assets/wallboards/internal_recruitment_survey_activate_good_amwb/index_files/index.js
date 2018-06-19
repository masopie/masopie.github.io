$(function() {
  function buttonTap(delayTime){
    tm = new TimelineMax({delay:delayTime,repeat:5})
    tm
      .to(bannerTap, 1, {opacity: 1}, "+=4")
      .to(bannerTap, 1, {opacity: 0}, "+=4")
      // .to(bannerTap, 1, {opacity: 1}, "+=5")
      // .to(bannerTap, 1, {opacity: 0}, "+=5")
  }

  function arrowMove(delayTime){
    tm = new TimelineMax({delay:delayTime})
    tm
      .fromTo("#arrow", 2, {x:0},{x:80,repeat:555,yoyo:true,ease:Sine.easeInOut,onComplete:function(){
        TweenMax.to("#arrow".target, 1.5, {x:0,ease:Elastic.easeOut})}
      });
  }

  function animations(){
    buttonTap(0);
    arrowMove(0);
  }
// Remove or comment out below before final launch
animations();
})
