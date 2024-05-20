$(document).ready(function(){


$('.fa-bars').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-tooggle');
});

$(window).on('load scroll',function(){
    $('.fa-bars').removeClass('fa-times');
    $('.navbar').removeClassClass('nav-tooggle');

});




});