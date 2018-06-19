$(function() {
    $("#backButton").on("click", function(){
      console.log("back button click");
      window.open("index.html", "_self")
    })

    $("#cta").on("click", function(){
      console.log("cta click");
      window.open("banner_1.html", "_self")
    })


    // Tap open handlers
    $("#whiteBorder1").on("click", function(){
      console.log("annual limit click");
      expand1();
      // blurBanner();
    })

    $("#whiteBorder2").on("click", function(){
      console.log("co-insurance click");
      expand2();
      // blurBanner();
    })

    $("#whiteBorder3").on("click", function(){
      console.log("co-pay click");
      expand3();
      // blurBanner();
    })

    $("#whiteBorder4").on("click", function(){
      console.log("co-pay saving card/coupon click");
      expand4();
      // blurBanner();
    })

    $("#whiteBorder5").on("click", function(){
      console.log("deductible click");
      expand5();
      // blurBanner();
    })

    $("#whiteBorder6").on("click", function(){
      console.log("EOB click");
      expand6();
      // blurBanner();
    })

    $("#whiteBorder7").on("click", function(){
      console.log("formulary click");
      expand7();
      // blurBanner();
    })

    $("#whiteBorder8").on("click", function(){
      console.log("out-of-pocket maximum click");
      expand8();
      // blurBanner();
    })

    $("#whiteBorder9").on("click", function(){
      console.log("premium click");
      expand9();
      // blurBanner();
    })

    $("#whiteBorder10").on("click", function(){
      console.log("prior auth click");
      expand10();
      // blurBanner();
    })



    // Tap close handlers
    $("#closeButton1").on("click", function(){
      console.log("annual limit close click");
      close1();
    })

    $("#closeButton2").on("click", function(){
      console.log("annual limit close click");
      close2();
    })

    $("#closeButton3").on("click", function(){
      console.log("co-pay close click");
      close3();
      // blurBanner();
    })

    $("#closeButton4").on("click", function(){
      console.log("co-pay saving card/coupon close click");
      close4();
      // blurBanner();
    })

    $("#closeButton5").on("click", function(){
      console.log("deductible close click");
      close5();
      // blurBanner();
    })

    $("#closeButton6").on("click", function(){
      console.log("EOB close click");
      close6();
      // blurBanner();
    })

    $("#closeButton7").on("click", function(){
      console.log("formulary close click");
      close7();
      // blurBanner();
    })

    $("#closeButton8").on("click", function(){
      console.log("out-of-pocket maximum close click");
      close8();
      // blurBanner();
    })

    $("#closeButton9").on("click", function(){
      console.log("premium close click");
      close9();
      // blurBanner();
    })

    $("#closeButton10").on("click", function(){
      console.log("prior auth close click");
      close10();
      // blurBanner();
    })

    var pressTimer;
});

function blurBanner(delayTime){
  tm = TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(mainBannerBlur, 1, {opacity: 1}, '-=1')
}

function expand1(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded1, 0.5, {left:'81',top:'539px',width:'905px',height:'560px'})
    .to(expandedImg1, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText1, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon1, 0.5, {left:'315px',top:'25px',width:'246px',height:'173px'}, '-=0.5')

    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded1'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton1'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')

    // Comment out below - icon border outline now part of banner image
    // .to($('.whiteBorderLeftColumn'), 3, {"-webkit-filter":"blur(7px)","filter":"blur(7px)"}, '-=3')
    // .to($('.whiteBorderRightColumn'), 3, {"-webkit-filter":"blur(7px)","filter":"blur(7px)"}, '-=3')
}

function expand2(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded2, 0.5, {left:'81',top:'539px',width:'905px',height:'560px'})
    .to(expandedImg2, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText2, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon2, 0.5, {left:'315px',top:'25px',width:'272px',height:'175px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded2'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton2'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand3(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded3, 0.5, {left:'81',top:'786px',width:'905px',height:'560px'})
    .to(expandedImg3, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText3, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon3, 0.5, {left:'385px',top:'40px',width:'148px',height:'181px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded3'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton3'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand4(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded4, 0.5, {left:'81',top:'786px',width:'905px',height:'560px'})
    .to(expandedImg4, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText4, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon4, 0.5, {left:'270px',top:'25px',width:'381px',height:'234px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded4'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton4'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand5(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded5, 0.5, {left:'81',top:'1048px',width:'905px',height:'560px'})
    .to(expandedImg5, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText5, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon5, 0.5, {left:'355px',top:'25px',width:'214px',height:'172px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded5'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton5'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand6(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded6, 0.5, {left:'81',top:'1048px',width:'905px',height:'560px'})
    .to(expandedImg6, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText6, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon6, 0.5, {left:'315px',top:'25px',width:'295px',height:'232px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded6'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton6'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand7(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded7, 0.5, {left:'81',top:'1257px',width:'905px',height:'560px'})
    .to(expandedImg7, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText7, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon7, 0.5, {left:'360px',top:'35px',width:'206px',height:'182px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded7'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton7'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand8(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded8, 0.5, {left:'81',top:'1257px',width:'905px',height:'560px'})
    .to(expandedImg8, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText8, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon8, 0.5, {left:'315px',top:'25px',width:'287px',height:'225px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded8'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton8'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand9(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded9, 0.5, {left:'81',top:'1257px',width:'905px',height:'560px'})
    .to(expandedImg9, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText9, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon9, 0.5, {left:'371px',top:'30px',width:'175px',height:'172px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded9'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton9'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}

function expand10(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
  // 858x560.png
    .to(expanded10, 0.5, {left:'81',top:'1257px',width:'905px',height:'560px'})
    .to(expandedImg10, 0.5, {width:'905px'}, '-=0.5')
    .to(expandedText10, 0.5, {left:'50px',top:'275px',width:'813px',height:'266px','z-index':10}, '-=0.5')
    .to(icon10, 0.5, {left:'328px',top:'30px',width:'259px',height:'225px'}, '-=0.5')
    // set is basically a 0-second duration tween
    // the below .set() forces the z-index change, which seems to fail inside a .to()
    .set($('#expanded10'), {css:{"z-index":5000}}, '-=0.5')
    .set($('#closeButton10'), {css:{opacity:1}}, '-=0.5')
    .to($('#mainBannerBlur'), 0.5, {opacity:1}, '-=0.5')
}



function close1(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded1, 0.5, {left:'278px',top:'629px',width:'0px',height:'0px'})
    .to(expandedImg1, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText1, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon1, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton1'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close2(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded2, 0.5, {left:'728px',top:'629px',width:'0px',height:'0px'})
    .to(expandedImg2, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText2, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon2, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton2'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close3(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded3, 0.5, {left:'246px',top:'881px',width:'0px',height:'0px'})
    .to(expandedImg3, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText3, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon3, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton3'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close4(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded4, 0.5, {left:'728px',top:'881px',width:'0px',height:'0px'})
    .to(expandedImg4, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText4, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon4, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton4'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close5(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded5, 0.5, {left:'246px',top:'1150px',width:'0px',height:'0px'})
    .to(expandedImg5, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText5, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon5, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton5'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close6(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded6, 0.5, {left:'728px',top:'1150px',width:'0px',height:'0px'})
    .to(expandedImg6, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText6, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon6, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton6'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close7(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded7, 0.5, {left:'246px',top:'1400px',width:'0px',height:'0px'})
    .to(expandedImg7, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText7, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon7, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton7'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close8(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded8, 0.5, {left:'728px',top:'1400px',width:'0px',height:'0px'})
    .to(expandedImg8, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText8, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon8, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton8'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close9(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded9, 0.5, {left:'246px',top:'1660px',width:'0px',height:'0px'})
    .to(expandedImg9, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText9, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon9, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton9'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}

function close10(delayTime){
  tm = new TimelineMax({delay:delayTime,repeat:0})
  tm
    .to(expanded10, 0.5, {left:'728px',top:'1660px',width:'0px',height:'0px'})
    .to(expandedImg10, 0.5, {width:'0px'}, '-=0.5')
    .to(expandedText10, 0.5, {left:'-24px',top:'0px',width:'0px',height:'0px','z-index':5000}, '-=0.5')
    .to(icon10, 0.5, {left:'17px',top:'17px',width:'0px',height:'0px','z-index':10}, '-=0.5')
    .set($('#closeButton10'), {css:{opacity:0}}, '-=0.5')
    .to($('#mainBannerBlur'), 1.5, {opacity:0}, '-=0.5')
}