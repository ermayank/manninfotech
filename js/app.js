$(document).ready(function(){
    $('.sidenav').sidenav();
    // $('.materialboxed').materialbox();
    $('.parallax').parallax();
    $('.tabs').tabs();
    $('.materialboxed').materialbox();
    // $('.datepicker').datepicker({
    //   disableWeekends: true,
    //   yearRange: 1
    // });
    $('.tooltipped').tooltip();
     $('.scrollspy').scrollSpy();

  });

  TweenLite.set('.introline, .bigline',{x:'-101%'})

  var lines = new TimelineMax({repeat:5, yoyo:true, repeatDelay:2})
  .to('.bigline',1,{x:'0%'})
  .to('.introline',1,{x:'0%'}, "+=0.3")