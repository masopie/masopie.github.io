$(document).ready(function(){
    console.log("Work complete!");
    $(".boop").mousedown(function(event){
      event.preventDefault();
      var hueHueHue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("color", hueHueHue)
      // $("#boop").css()
    })
    $(".boop").mouseup(function(event){
      event.preventDefault();
      var hueHueHue = 'rgb(' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ',' + (Math.floor((256-199)*Math.random()) + 200) + ')';
      $(this).css("color", hueHueHue)
      // $("#boop").css()
    })
    $(".transfrorm").on("submit", function(event){
      alert("hello!")
    })
})
