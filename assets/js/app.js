
$(document).ready(function(){
   
    AOS.init(
    );
    $('.list').click(function(){
        const value=$(this).attr('data-filter');
        if(value == 'all'){
            $('.itemBox').show('slow');
        }
        else{
            $('.itemBox').not('.'+value).hide('slow');
            $('.itemBox').filter('.' + value).show('slow');

        }
 
    })
    //add active
    $('.list').click(function(){
        $(this).addClass('active').siblings().removeClass('active');
    })

    $('.slider-customer').slick({
        autoplay:true,
        dots: true,
        arrows: false,
    });


    $('.nav li').click(
        function () {
            $('.nav li ').removeClass('active');
            $(this).addClass('active');
        }
    )

    $('.popup').click(
        function () {
            var src=$(this).attr('src');
            $('.modal').modal('show');
            $('#popup-img').attr('src',src);
          
    
        }
    )
        // scroll top
        $(window).scroll(function(){
            if($(window).scrollTop()>10){
                $("#btnTop").fadeIn();
            }else{
                $("#btnTop").fadeOut();
        
            }
        });
      
        $("#btnTop").click(function(){
            $("html,body").animate({scrollTop:0},500);
        });

   
})


    
