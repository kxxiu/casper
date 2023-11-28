// main.js

$(document).ready(function(){

  // 인트로 하단 이동 버튼
  $('.next_btn').click(function(){
    $('html, body').animate({scrollTop:$('#top3').offset().top-70},500, 'easeOutQuint');
    return false;
  });

  // top3 슬라이드
  var swiper = new Swiper(".top3", {
    autoplay:{
      delay:2500,
      disableOnInteraction: false,
    },
    loop: true,
    navigation:{
      nextEl:".top3 .swiper-button-next",
      prevEl:".top3 .swiper-button-prev",
    },
    pagination:{
      el:".swiper-pagination2",
      clickable: true,
    }
  });

  // 이벤트 배너 구현
  const banner = $('.e_banner > ul');
  const c_btn = $('.e_banner .ctrl_btn span');
  let i = $('.e_banner .ctrl_btn span').index();
  let width = $('.e_banner').width(); //1200

  console.log(i);

  function moveLeft(){
    if(i==3){
      i=0;
    }else{
      i++;
    }
    let mv = -(width * i);
    console.log(mv);
    banner.stop().animate({'left':mv},500);

    c_btn.removeClass('act01');
    $('.ctrl_btn span').eq(i).addClass('act01');
  }

  c_btn.click(function(){
    i = $(this).index();

    clearInterval(Timer);
    
    let mv = -(width * i);
    console.log(mv);
    banner.stop().animate({'left':mv},500,'easeOutQuart');

    c_btn.removeClass('act01');
    $(this).addClass('act01');
  });

  let Timer = setInterval(moveLeft, 3000);

  c_btn.mouseleave(function(){
    clearInterval(Timer);
    Timer = setInterval(moveLeft, 3000);
  });

  // 고객지원 랜덤이미지
  let imgR = ['event_banner1', 'event_banner2', 'event_banner3', 'event_banner4'];
  let ran = Math.ceil(Math.random()*4-1);

  document.getElementById('random').innerHTML=`<a href="#"><img src="./images/${imgR[ran]}.jpg" alt=""></a>`

});