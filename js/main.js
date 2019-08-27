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

    /*-------------click link sort---------------*/

    $('.sorting-link').on('click', function () {
       $('.sorting-link').removeClass('active-sort');
       $(this).addClass('active-sort');
    });

    $('.switcher-btn').on('click', function (e) {
        e.preventDefault();
        $('.switcher-btn').removeClass('active-btn-list');
        $(this).addClass('active-btn-list');
    });

/*--------------back to top-------------*/

    $('.up-btn').on('click', function () {
        $('body,html').animate({
            scrollTop: 0
        }, 400);
        return false;
    });

    $(".square-button").on('click', function () {
        $(this).closest('.wrapper-sort-catalog').find('.list-button').removeClass('active-btn-list');
        $(this).closest('.wrapper-sort-catalog').find('.container-card').removeClass('sort-block-li');
        $(this).closest('.wrapper-sort-catalog').find('.list-catalog-sort').removeClass('display-inline');
        $(this).addClass('active-btn-list');

    });

    $(".list-button").on('click', function () {
        $(this).closest('.wrapper-sort-catalog').find('.square-button').removeClass('active-btn-list');
        $(this).addClass('active-btn-list');
        $(this).closest('.wrapper-sort-catalog').find('.list-catalog-sort').addClass('display-inline');
        $(this).closest('.wrapper-sort-catalog').find('.container-card').addClass('sort-block-li')
    });


});