//layout.js

$(document).ready(function(){

  // 모달창
  const modal=`
  <div class="modal">
    <div class="inner">
      <a href="#" title="배너">
        <img src="./images/main_Popup_PC_450x600.jpg" alt="">
      </a>
      <p>
        <input type="checkbox" id="ch">
        <label for="ch">오늘 하루 열지 않음</label>
        <input type="button" value="닫기" id="close_btn">  
      </p>
    </div>
  </div>
  `;

  $('body').append(modal);

  let ch = $('.modal #ch');

  if($.cookie('popup') == 'none'){
    $('.modal').hide();
  }

  function closeModal(){
    if(ch.is(':checked')){
      $.cookie('popup', 'none', {expires: 1, path: '/'});
    }
    $('.modal').hide();
  }

  $('.modal #close_btn').click(function(){
    closeModal();
  });

  // 헤더
  $('header').hover(function(){
    $('header').addClass('act');
    $('header h1 img').attr('src','./images/logo_casper_black.png');
    $('header .gnb > li > a, header i.fas').css('color','#333');
  }, function(){ 
    $('header').removeClass('act');
    $('header h1 img').attr('src','./images/logo_casper_white.png');
    $('header .gnb > li > a, header i.fas').css('color','#fff');
  });

  // 내비게이션 변수선언
  let gnb = $('.gnb li, #m_nav li');

  gnb.click(function(){
    let i = $(this).index()+2;
    console.log(i);

    $('html, body').animate({scrollTop:$('main section').eq(i).offset().top-70},400, 'easeOutCubic');
    return false;
  });

  // 세로 스크롤 이벤트
  $(window).scroll(function(){

    let sPos = $(this).scrollTop();
    console.log(sPos);

    if(sPos >= 900){
      $('header').addClass('act');
      $('header h1 img').attr('src','./images/logo_casper_black.png');
      $('header .gnb > li > a, header i.fas').css('color','#333');

      $('header').mouseleave(function(){
        $('header').addClass('act');
        $('header h1 img').attr('src','./images/logo_casper_black.png');
        $('header .gnb > li > a, header i.fas').css('color','#333');
      });
    } else{
      $('header').removeClass('act');
      $('header h1 img').attr('src','./images/logo_casper_white.png');
      $('header .gnb > li > a, header i.fas').css('color','#fff');

      $('header').mouseleave(function(){
        $('header').removeClass('act');
        $('header h1 img').attr('src','./images/logo_casper_white.png');
        $('header .gnb > li > a, header i.fas').css('color','#fff');
      });
    }
  });

});