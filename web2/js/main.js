
$(document).ready(function(){

    //    gnb
   
    $('.gnb-wrap').on({
        mouseenter:function(){
            $('.gnb-deth-2').css({
               'height':'240'
            },500)
            $('.gnb-l').css({
                'height':'240px'
            },500)            
        },
        mouseleave:function(){

            $('.gnb-deth-2').css({
                'height':'0'
             },500)
             $('.gnb-l').css({
                 'height':'0'
             },500)            
        }
    })


    //visual

    var num=0;
    var menuWidth=1263;
    var sid;
    
    $('.visual-btn-next').on('click',function(e){
        e.preventDefault();
        banner();
    })

    $('.visual-btn-prev').on('click',function(e){
        e.preventDefault();
        banner('prev');
    })

    function banner(dis){
        if(dis=='prev'){
            num--;
            if(num<0) num=3
            $('.visual').prepend($('.visual > li:last'));
            $('.visual').css('left','-1263px')
            $('.visual').animate({
                left:'0'
            },500)
        } else{
            num++;
            if(num>3) num=0
            $('.visual').animate({
                left:'-1263px'
            },500,function(){
                $('.visual').append($('.visual > li:first'))
                $('.visual').css('left','0')
            })
        }

    }

    function autos(){
        num++;
        if(num>3) num=0
        $('.visual').animate({
            left:'-1263px'
        },500,function(){
            $('.visual').append($('.visual > li:first'))
            $('.visual').css('left','0')
        })
    }
    


    sid=setInterval(autos,3000);

    $('.visual-wrap').on({
        mouseenter : function(){
            clearInterval(sid)
        },
        mouseleave : function(){
            clearInterval(sid);
            sid=setInterval(autos,3000);
        }
    })



    // 매장명검색

    var store=$('#storeName').val();
    $('#storeName').on('click',function(){
        if(store == '매장명 또는 주소를 입력하세요'){
            $('#storeName').val('');
        }
       
    })

    $('.search-s').on('click',function(){
        if(store == '' || '매장명 또는 주소를 입력하세요'){
            alert('정확한 매장명을 입력해주세요.')
        }
    })



    
    // best-combination

    var combiPos=$('.content2').offset().top

    $(window).scroll(function(){
        var scrollPos=$(this).scrollTop();
        console.log(scrollPos)

        if(scrollPos >= combiPos - $(window).height()*0.6){
            $('.comb-text01, .comb-text01:after, .txt-wrap').css({
                'transform':'translateY(0)',
                'opacity':'1',
                'transition':'transform 1s ease'
            })
        }

     })






// 티레시피

    // var recipePos=$('.content3').offset().top
    // // console.log(recipePos)  //1625

    // $(window).scroll(function(){
    //     var scrollPos=$(this).scrollTop();
    //     // console.log(scrollPos)

    //     if(scrollPos >= recipePos - $(window).height()*0.6){
    //         $('.recipe:eq(0)').addClass('pos');

    //         }
    // })
    var num=0;
    // $('.tea-recipe li:gt(0)').hide();

    $('.reci-btn-next').on('click',function(e){
        e.preventDefault();
        num++;
        if(num>2){
            num=0;
        }

        $('.tea-recipe li').removeClass('pos');
        $('.tea-recipe li').eq(num).addClass('pos');  
        
    })

    $('.reci-btn-prev').on('click',function(e){
        e.preventDefault();
        num--;
        if(num<0){
            num=2;
        }

        $('.tea-recipe li').removeClass('pos');
        $('.tea-recipe li').eq(num).addClass('pos');        
    })




    //seasonMenu
    var seasonPos=$('.content5').offset().top

    $(window).scroll(function(){
        var scrollPos=$(this).scrollTop();
        console.log(scrollPos)

        if(scrollPos >= seasonPos - $(window).height()*1){
            $('.season-title, .season-menu').css({
                'transform':'translateY(0)',
                'opacity':'1',
                'transition':'transform 1s ease'
            })
        }

     })

})

