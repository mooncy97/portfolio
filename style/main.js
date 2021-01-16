$(document).ready(function(){

 //menu버튼 이벤트
  $('.btn1').on({
    click : function(e){
      e.preventDefault();
      var offset1 = $('#section1').offset();

      $("html").animate({
        scrollTop: offset1.top
      }, 500);
    }
  })

  $('.btn2').on({
    click : function(e){
      e.preventDefault();
      var offset2 = $('#section2').offset();

      $("html").animate({
        scrollTop: offset2.top
      }, 500);
    }
  })

  $('.btn3').on({
    click : function(e){
      e.preventDefault();
      var offset3 = $('#section4').offset();

      $("html").animate({
        scrollTop: offset3.top
      }, 500);
    }
  })


  //star배경
  var stars=800;
  var $stars=$(".stars");
  var r=800;
  for(var i=0;i<stars;i++){
    var $star=$("<div/>").addClass("star");
    $stars.append($star);
  }
  $(".star").each(function(){
    var cur=$(this);
    var s=0.2+(Math.random()*1);
    var curR=r+(Math.random()*300);
    cur.css({ 
      transformOrigin:"0 0 "+curR+"px",
      transform:" translate3d(0,0,-"+curR+"px) rotateY("+(Math.random()*360)+"deg) rotateX("+(Math.random()*-50)+"deg) scale("+s+","+s+")"
        
    })
  })
  // 

  setTimeout(function(){

    $('#parallax .selfie img').css({
      'width' : '40%',
      'opacity' : '1'
    })

    
  },1000);

  setTimeout(function(){
        $('#parallax h1 strong').css({
      'transform':'translateY(250px)',
      'opacity':'1',
      'transition':'all 2.5s ease'
    })
  },2000);
  

  //스크롤효과
  var area2Pos=$('#section2').offset().top;

  $(window).scroll(function(){
    var scrollPos=$(window).scrollTop();

    if(scrollPos >= area2Pos - $(window).height()*0.6){
      $('.text-area h2, .text-area p, .text-area span').css({
          'transform':'translateY(0)',
          'transition':'transform 1s ease', 
          'opacity' : '1'
      })

      $('.text-area p').css({
        'transition':'all 3s ease',
        'transition-delay' : '.4s',
        'opacity' : '1'
      })

      $('.text-area span').css({
        'transition':'all 4s ease',
        'transition-delay' : '.9s'
      })

    }

  })



})



// portfolio
