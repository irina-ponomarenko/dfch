$(document).ready(function () {

    /*-----------------counter------------------*/

    $('.to-bottom').on('click', function () {
        var $input = $(this).closest('.counter').find('input');
        var count = parseInt($input.val()) - 1;
        count = count < 1 ? 1 : count;
        $input.val(count);
        $input.change();
        return false;
    });
    $('.to-top').on('click', function () {
        var $input = $(this).closest('.counter').find('input');
        $input.val(parseInt($input.val()) + 1);
        $input.change();
        return false;
    });

    /*-----------------fixed menu-------------------*/

    $(window).scroll(function() {
        if ($(this).scrollTop() > 1){
            $('#menu').addClass("fixed");
            $('body').addClass("active-header");
            $('.top-header').addClass("noneBlock");
        } else{
            $('#menu').removeClass("fixed");
            $('body').removeClass("active-header");
            $('.top-header').removeClass("noneBlock");
        }
    });
});