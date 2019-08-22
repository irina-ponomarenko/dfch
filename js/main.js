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
});