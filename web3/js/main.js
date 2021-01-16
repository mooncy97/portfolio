$(document).ready(function(){
    $('.lnb-btn').on('click',function(){
        $('.gnb-wrap').animate({
            'right':'0%'
        },500);

        $('.dim').show();

    })  

    $('.close_btn').on('click',function(){
        $('.gnb-wrap').animate({
            'right':'-100%'
        },500);

        $('.dim').hide();
    })

    $('.search').on('click',function(){
        $('.search-bar').slideToggle(200)
    })

})

