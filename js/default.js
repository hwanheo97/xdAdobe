$(document).ready(function(){
    
 $(".btn_menu").on('click',function(){
   $(this).toggleClass('active');   
   $(".navigation").toggleClass('active').stop().slideToggle(1500); 
     /* slideToggle이 display:block역할*/
 });    
      $('header .search input').on('keydown',function(){
        $(this).addClass('active');
    });
    $('header .search input').on('blur keyup',function(){
        var val = $(this).val();   /*아무것도 안쓰고 나갈때*/
        if(val==""){
            $(this).removeClass('active');
        }
        
    });
    
    
}); /*end of ready()*/