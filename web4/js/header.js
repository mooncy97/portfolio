$(document).ready(function(){

    // header스크롤 스타일변경

    $(window).scroll(function(){
        var scrollTop=$(this).scrollTop();

        if(scrollTop>=100){
            $('.header').addClass('head-scroll');
        }else{
            $('.header').removeClass('head-scroll');

        }
    })

    // 웹 gnb
    $('.sub-navi').on({
        mouseenter : function(){
            $(this).find(".deth-2").stop().slideDown(500);
        },
        mouseleave : function(){
            $(this).find(".deth-2").stop().slideUp(500);
        }
    })
    

    // 모바일 gnb
    $('.hamburger-bar').on({
        click : function(e){
            e.preventDefault();
            $('.mobile-navi').animate({
                'right' : '0%'
            },500)
        }
    })

    $('.close-btn').on({
        click :function(e){
        e.preventDefault();
        $('.mobile-navi').animate({
            'right' : '-100%'
        },500)
        }
    })

    $('.m-deth2 > a').on({
        click : function(e){
            e.preventDefault();
            $(this).next().stop().slideToggle(500);

            $(this).toggleClass('show');
            if($(this).hasClass('show')){
                $(this).find('i').prop('class','fa fa-chevron-up')
            }else{
                $(this).find('i').prop('class','fa fa-chevron-down')
            }
        }
    })

})