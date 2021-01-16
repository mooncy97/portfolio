   $(document).ready(function(){

    
        // 스크롤 애니메이션
        var menuPos=$('.section_01').offset().top
        var storePos=$('.section_02').offset().top
        var historyPos=$('.section_03').offset().top
        var snsPos=$('.section_05').offset().top
        
        
        $(window).scroll(function(){
            var scrollPos=$(window).scrollTop();
            // console.log(scrollPos)
    
            if(scrollPos >= menuPos - $(window).height()*0.6){
                $('.menu-title , .menu-section').css({
                    'transform':'translateY(0)',
                    'opacity':'1',
                    'transition':'transform 1s ease'
                })

            }

            if(scrollPos >= storePos - $(window).height()*0.8){
                $('.store-title').css({
                    'transform':'translateY(0)',
                    'opacity':'1',
                    'transition':'transform 1s ease'
                })
            }

            if(scrollPos >= historyPos - $(window).height()*0.8){
                $('.history h2 , .history-img img:nth-of-type(1) , .history-img img:nth-of-type(2) , .history-text ').css({
                    'transform':'translateY(0)',
                    'opacity':'1',
                    'transition':'transform 1s ease'
                })

            }

            if(scrollPos >= snsPos - $(window).height()*0.8){
                $('.sns-title , .sns').css({
                    'transform':'translateY(0)',
                    'opacity':'1',
                    'transition':'transform 1s ease'
                })
            }
    
         })
                                      
        //배너
        var currentNum=0;
        var num=0
	    $(".banner-img ul li").hide();
	    $(".banner-img ul li.on").show();
         
        $(".prev-btn").on({
            click : function(e){
                e.preventDefault();
                prevEvent();
            }
        });
        $(".next-btn").on({
            click : function(e){
                e.preventDefault();
                nextEvent();
            }
        });

        function prevEvent(){
            if($('.banner-img li.on').is(':animated')==false){
                
            }
        }
        
    
    })