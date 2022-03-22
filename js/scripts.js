/*!
* Start Bootstrap - Shop Homepage v5.0.4 (https://startbootstrap.com/template/shop-homepage)
* Copyright 2013-2021 Start Bootstrap
* Licensed under MIT (https://github.com/StartBootstrap/startbootstrap-shop-homepage/blob/master/LICENSE)
*/
// This file is intentionally blank
// Use this file to add JavaScript to your project


// Back to Top


$(document).ready(function(){

    $(window).scroll(function(){

        if($(window).scrollTop()>150){
            $("#backToTop").fadeIn();
        }else{
            $("#backToTop").fadeOut();
        }

    });


    $("#backToTop").click(function(){
        
        $("html,body").animate({scrollTop:0},700);

        return false;

    });


});
