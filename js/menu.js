/**
 * 모바일 사이즈에서 메뉴 관리 
 */

// 메뉴-열기
// const mnuEl = document.querySelector('header .util_area .btn_mnu');
// // $("#header .util_area .btn_mnu").on("click", function(){        
// //   console.log("test");
// // });

// mnuEl.addEventListener('click', function(){
//   console.log("test");
//   // gsap.to(window, .7, {
//   //   scrollTo: 0
//   // })
// })

// var clsElts = document.getElementsByTagName('*');
// console.log(clsElts);

// Array.prototype.forEach.call(allElements, function(el) {
  

// });
// mnuEl.on("click", function(){     
  
//   console.log("1st js btn clicked.");   
// });




// document.getElementById("btn_menu").onclick = function() {
//   console.log("2nd js btn clicked.");   
// };


$("header .util_area .btn_mnu").on("click", function(){     
  console.log("clicked.");   
  $(".mob_gnb_wrap").fadeIn(200, function(){
     
    $(".mob_gnb_dimm").removeClass("off");
    $(".mob_gnb_dimm").addClass("on");
     gsap.to($(".mob_gnb_wrap"), 1, {opacity:1, delay:0.2, ease:Power3.easeOut,display:'block',right:'0%'});
  });
});
 
$(".btn_gnb_close").on("click", function(){     
  console.log("close clicked.");   
  //$(".mob_gnb_wrap").fadeOut(2000, function(){
    $(".mob_gnb_dimm").removeClass("on");
    $(".mob_gnb_dimm").addClass("off");
     gsap.to($(".mob_gnb_wrap"), 1, {opacity:0, delay:0.2, ease:Power3.easeOut,display:'none',right:'-100%'});

  //});
});


// gsap.to(요소, 지속시간, 옵션);
// gsap.to(badgeEl, .6, {
//   opacity: 0,
//   display: 'none'
// });

// const menuEls = document.querySelectorAll('.mob_gnb_menus .');
// menuEls.forEach(function(menuEl, index){
//   gsap.to(menuEl, 1, {
//     delay: (index + 1) * .7, //0.7 1.4 2.1 2.8
//     opacity: 1
//   })
// })

$(".mob_gnb_menus .mob_gnb_ttl2").click(function(){
  var index = $(".mob_gnb_menus .mob_gnb_ttl2").index(this);
  // $(".mob_gnb_menus .mob_gnb_ttl2 span").eq(index).
  // mob_gnb_arrow_down
  console.log(index);

  let status = $(".mob_gnb_menus > ul > ul").eq(index).css('display');
  console.log(status); //콘솔창에 로그를 남기며, 확인했으면 삭제하기

  if (status == 'block') {
      $(".mob_gnb_menus > ul > ul").eq(index).hide();
      $(".mob_gnb_menus .mob_gnb_ttl2 span").eq(index).removeClass("mob_gnb_arrow_up");
      $(".mob_gnb_menus .mob_gnb_ttl2 span").eq(index).addClass("mob_gnb_arrow_down");
      
      //$('#btn-posting-box').text('포스팅박스 열기');
  } else {
      $(".mob_gnb_menus > ul > ul").eq(index).show();
      $(".mob_gnb_menus .mob_gnb_ttl2 span").eq(index).removeClass("mob_gnb_arrow_down");
      $(".mob_gnb_menus .mob_gnb_ttl2 span").eq(index).addClass("mob_gnb_arrow_up");
  }

  // $(".mob_gnb_dimm").removeClass("on");
  // //  $("li:eq(" + index + ")").attr("data-val", "hello");
 
});
    