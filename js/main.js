$(document).ready(function () {
    $('.jcarousel').jcarouselAutoscroll({
        target: '+=1'
    });
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

    /*---------------catalog-open--------------*/

    $('.catalog-open-link').on('click', function (e) {
        e.preventDefault();
       $(this).closest('.catalog-drop-down').find('.left-navigation').slideToggle(500);
       $('.catalog-drop-down').toggleClass('btn-active');
    });

    $('.header-input-block').on('click',function () {
       $(this).closest('.item-filters').find('.list-filters-input').slideToggle('fast');
    });
});