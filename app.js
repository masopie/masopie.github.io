$(document).ready(function(){
    console.log("Work complete!");
    $("p").mousedown(function(event){
      event.preventDefault();
      var hueHueHue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("color", hueHueHue)
      // $("#boop").css()
    })
    $("p").mouseup(function(event){
      event.preventDefault();
      var hueHueHue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("color", hueHueHue)
      // $("#boop").css()
    })
})
