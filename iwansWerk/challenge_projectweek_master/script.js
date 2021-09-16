// Werkend maken van slider
$( function() {
    $( "#pwr_buttons" ).resizable();
  } );

$( function() {
    $( "#pwr_buttons" ).draggable();
  } );

$( function() {
    $( "#bright_slide" ).draggable();
  } );

//Button color change
$(document).ready(function(){
  $("#switch_red").click(function(){
    $(".red_light_off").toggleClass("red_light_on");
    setColor('red');
    if ('red' === false) {
      setColor('red')===true;
    }
    if ('red' === true) {
      setColor('red')===false;
    }
  });
  $("#switch_green").click(function(){
    $(".green_light_off").toggleClass("green_light_on");
    setColor('green');
    if ('green' === false) {
      setColor('green')===true;
    }
    if ('green' === true) {
      setColor('green')===false;
    }
  });
  $("#switch_blue").click(function(){
    $(".blue_light_off").toggleClass("blue_light_on");
    setColor('blue');
  });
  // slider 
  function Refresh() {
      var red = $(".slider.red").slider("value");
      $("#power_red").css("opacity", red);
  
      var green = $(".slider.green").slider("value");
      $("#power_green").css("opacity", green);
  
      var blue = $(".slider.blue").slider("value");
      $("#power_blue").css("opacity", blue);
  }
    $(".slider").slider({
      orientation: "horizontal",
      range: "min",
      max: 1,
      value: 0.5,
      step: 0.1,
      slide: Refresh,
      change: Refresh
    });
    $(".slider.red").slider("value", 1);
    $(".slider.green").slider("value", 1);
    $(".slider.blue").slider("value", 1);
});
fetch('../../assets/js/library.json')

  .then(response => response.json())
  .then(data =>{
    console.log(data);
  });
  // function set(params) {
    
  // }

  function setColor(color) {
    fetch('dataUpdate.php?color=' + color);
}

  // console.log("het werkt")
//color slider brightness
// // $( function(){
//   function Refresh() {
//   //   var red = $(".slider.red").slider("value");
//   //   $("#power_red").css("background-color");

//   //   var green = $(".slider.green").slider("value");
//   //   $("#power_green").css("background-color");
//   //   console.log("testen")

//   //   var blue = $(".slider.blue").slider("value");
//   //   $("#power_blue").css("background-color");
   
//   $(".slider").slider({
//     orientation: "horizontal",
//     range: "min",
//     max: 255,
//     value: 127,
//     slide: Refresh,
//     change: Refresh
//   });
//   $(".slider.red").slider("value", 255);
//   $(".slider.green").slider("value", 255);
//   $(".slider.blue").slider("value", 255);
// // });