$(document).ready(function(){


$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-tooggle');
});

$(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClassClass('nav-tooggle');

    if($(window).scrollTop() > 30){
        $('.header').css({'background':'#e9091c','box-shadow':'0 .2rem .5rem rgba(0,0,0,.4)' });
    }else{
        $('.header').css({'background':'none','box-shadow':'none' });
    }

});







});