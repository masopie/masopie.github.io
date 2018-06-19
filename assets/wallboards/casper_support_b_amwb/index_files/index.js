// Individual animation functions
function mattressAnimate(delayTimeReveal, delayTimeHide){
  // tm = new TimelineMax({delay:delayTime,repeat:0})
  // tm
  // .to(frame000, 0.1, {opacity:1})
  // .to(frame001, 0.1, {opacity:1})
  // .to(frame002, 0.1, {opacity:1})
  // .to(frame003, 0.1, {opacity:1})
  // .to(frame004, 0.1, {opacity:1})
  // .to(frame005, 0.1, {opacity:1})
  // .to(frame006, 0.1, {opacity:1})
  // .to(frame007, 0.1, {opacity:1})
  // .to(frame008, 0.1, {opacity:1})
  // .to(frame009, 0.1, {opacity:1})
  // .to(frame010, 0.1, {opacity:1})
  // .to(frame011, 0.1, {opacity:1})
  // .to(frame012, 0.1, {opacity:1})
  // .to(frame013, 0.1, {opacity:1})
  // .to(frame014, 0.1, {opacity:1})
  // .to(frame015, 0.1, {opacity:1})
  // .to(frame016, 0.1, {opacity:1})
  // .to(frame017, 0.1, {opacity:1})
  // .to(frame018, 0.1, {opacity:1})
  // .to(frame019, 0.1, {opacity:1})
  // .to(frame020, 0.1, {opacity:1})
  // .to(frame021, 0.1, {opacity:1})
  // .to(frame022, 0.1, {opacity:1})
  // .to(frame023, 0.1, {opacity:1})
  // .to(frame024, 0.1, {opacity:1})
  // .to(frame025, 0.1, {opacity:1})
  // .to(frame026, 0.1, {opacity:1})
  // .to(frame027, 0.1, {opacity:1})
  // .to(frame028, 0.1, {opacity:1})
  // .to(frame029, 0.1, {opacity:1})
  // .to(frame030, 0.1, {opacity:1})

  // #staggerTo(), reveals each frame iteratively:
  var images = $('.mattressFrame');
  var timeline = new TimelineMax({delay:delayTimeReveal,repeat:0});
  timeline.append(
    // TweenMax.staggerTo(images, 0.01, {css:{autoAlpha:1}, repeat:0, yoyo:true, repeatDelay:0.5}, 0.05)
    TweenMax.staggerTo(images, 0.075, {css:{autoAlpha:1}, repeat:0, yoyo:true, repeatDelay:0.5}, 0.075)
  )
}

// Main animation function
function animation(){
  console.log("animation starting");
  mattressAnimate(2);
  
}

$(document).on("touchstart", "#isi", function(){
 clearInterval(ascroll);
});

// -----------------------------------------------
//
// Remove or comment out below before final launch
// startScrolling();
animation();
//
// -----------------------------------------------
//
//
//
//
//
