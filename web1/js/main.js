
$(document).ready(function(){
 // gnb



    var bg=$('<div class="gnb-line"></div>');
            $('.header').append(bg)

    $('.gnb-deth1 > li > a').on({
        mouseenter:function(){
            $(this).css({
                'background':'#006a9b',
                'color':'#fff'
            })

            $(this).parent().children().next().css({
                'background':'#f7f7f7'
            })

            $('.gnb-deth2 , .gnb-line').stop().slideDown();
            

        },
        mouseleave:function(){
            $(this).css({
                'background':'#fff',
                'color':'#333',
                'border-bottom':'1px solid #cbcbcb'
            })
            
            $(this).parent().children().next().css({
                'background':'#fff'
            })

            $('.gnb-deth2 , .gnb-line').stop().slideUp();
            
        }
    })

    $('.gnb-deth2').on({
        mouseenter:function(){
            $(this).parent().find('>a').css({
                'background':'#006a9b',
                'color':'#fff'
            })

            $(this).css({
                'background':'#f7f7f7'
            })

            $('.gnb-deth2 , .gnb-line').stop().slideDown();
            
        },
        mouseleave:function(){
            $(this).parent().find('>a').css({
                'background':'#fff',
                'color':'#333',
                'border-bottom':'1px solid #cbcbcb'
            })

            $(this).css({
                'background':'#fff'
            })

            $('.gnb-deth2 , .gnb-line').stop().slideUp();
            
        }
    })  





 // visual-banner

    /* main_banner */
    var num=0;
    var bannerWidth=790;
    var sid;
    $('.visual-next').on('click',function(e){
        e.preventDefault();
        banner();
    })

    $('.visual-prev').on('click',function(e){
        e.preventDefault();
        banner('prev');
    })

    function banner(dis){
        if(dis=='prev'){
            num--;
            if(num<0) num=1
            $('.visual-banner').prepend($('.visual-banner > li:last'));
            $('.visual-banner').css('left','-790px')
            $('.visual-banner').animate({
                left:'0'
            },1000)
        } else{
            num++;
            if(num>1) num=0
            $('.visual-banner').animate({
                left:'-790px'
            },1000,function(){
                $('.visual-banner').append($('.visual-banner > li:first'))
                $('.visual-banner').css('left','0')
            })
        }
        clearInterval(sid)
        $('.visual-num .number').text(num+1);
        $('.visual-play').removeClass('visual-stop');
    }

    function autos(){
        num++;
        if(num>1) num=0
        $('.visual-banner').animate({
            left:'-790px'
        },1000,function(){
            $('.visual-banner').append($('.visual-banner > li:first'))
            $('.visual-banner').css('left','0')
        })
        $('.visual-num .number').text(num+1);
    }

    $('.visual-play').on('click',function(e){
        e.preventDefault()
        if($(this).hasClass('visual-stop')==true){
            clearInterval(sid);
            $(this).removeClass('visual-stop')
        }else{
            sidss=setInterval(autos,2000)
            $(this).addClass('visual-stop')
        }

    })

    sid=setInterval(autos,2000);






 // notice


    $('.notice-list > li > ul').not(':first').hide()

    $('.notice-list > li > h3 > a').on('click',function(e){
        e.preventDefault();
        $('.notice-list > li > h3 > a.on').removeClass('on')
        $(this).addClass('on')

        $('.notice-list > li > ul').hide()
        $(this).parent().next('ul').show()
    })



 // sub-popup

    var newNum=0;
    var sids;
    $('.sub-visual li:gt(0)').hide();
    $('.sub-prev').on('click',function(e){
        e.preventDefault()
        newNum--
        if(newNum<1){
            newNum=3;
        }
        $('.sub-num span').text(newNum);
        $('.sub-visual li:visible').hide()//현재 보여지고 있는것을 숨기고
        $('.sub-visual li').eq(newNum-1).show()
    })

    $('.sub-next').on('click',function(e){
        e.preventDefault()
        newNum++
        if(newNum>3){
            newNum=1;
        }
        $('.sub-num span').text(newNum);
        $('.sub-visual li:visible').hide()//현재 보여지고 있는것을 숨기고
        $('.sub-visual li').eq(newNum-1).show()

    })


    $('.sub-play').on('click',function(e){
        e.preventDefault()
        if($(this).hasClass('sub-stop')==true){
            clearInterval(sids);
            $(this).removeClass('sub-stop')
        }else{
            sids=setInterval(set,1500)
            $(this).addClass('sub-stop')
        }

    })
    sids=setInterval(set,1500)

    function set(){
        $('.sub-next').trigger('click')
    }

    
    //section-3
    $('.btn-service-next > a').on('click',function(e){
        e.preventDefault();
        $('.service-list').animate({
            left:'-146px'
        },400,function(){
            $('.service-list').append($('.service-list li:first'));
            $('.service-list').css('left','0')
        })
        
    })

    $('.btn-service-prev > a').on('click',function(e){
        e.preventDefault();
        $('.service-list').prepend($('.service-list li:last'));
            $('.service-list').css('left','-146px')
            $('.service-list').animate({
                left:'0'
            },400)
    })

    
 //section-4

    var number=1;
    $('.tour-left').on('click',function(){
       $('.tour-img').append($('.tour-img > li:first'))
       number--;
       //  console.log(num--)
        if(number<1) number=4;
        $('.tour-on span').text(number)
    })

    $('.tour-right').on('click',function(){
        $('.tour-img').prepend($('.tour-img > li:last')) //li의 마지막꺼를 배너리스트의 앞으로 가져다놀거야
        number++;
       //  console.log(num++)
        if(number>4) number=1;
        $('.tour-on span').text(number)
        
    })



    // footer banner
    var menuWidths=115;
    var sidd;


        $('.btn-banner-prev').on('click',function(e){
            e.preventDefault();
            if($('.banner-list').is(':animated')==false){

                clearInterval(sidd)
                sidd=setInterval(auto,2000)

                $('.banner-list').animate({
                    left:'-'+menuWidths+'px'
                },1000,function(){
                    $('.banner-list').append($('.banner-list li:first'));
                    $('.banner-list ').css('left', '0px')
                })
            }
        })

        $('.btn-banner-next').on('click',function(e){
            e.preventDefault();
            
            if($('.banner-list').is(':animated')==false){

                clearInterval(sidd)
                sidd=setInterval(auto,2000)

                $('.banner-list').prepend($('.banner-list li:last'));
                    $('.banner-list').css('left', '-'+menuWidths+'px')

                $('.banner-list').animate({
                    left:'0'
                },1000)

            
            }
        })


        sidd=setInterval(auto,2000)
        function auto(){
        $('.btn-banner-prev').trigger('click')
    }
})






