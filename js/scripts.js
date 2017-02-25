$(function () {
    var $element = $('.frame > span');
    var flag = 0;
    var counter = 0;
    var number = Math.floor(Math.random(9) * 10);
    $($element).eq(number).children().attr('src', 'images/0.png');
    $($element).eq(number).attr('id', 'empty');
    var num = 9;
    var i = 0;
    while (--num) {
        ++i;
        if ((number + i) > 8) number = 0 - i;
        $($element).eq(number + i).children().attr('src', 'images/' + i + '.png');

    }
    $('.showSample').click(function () {
        $('.sampleFrame').show().fadeOut(5000);
    });
    $($element).click(function () {
        flag = 0;
        if ("empty" == $($element).eq($(this).index() - 3).attr('id')) {
            $($element).eq($(this).index() - 3).children().attr('src', $(this).children().attr('src'));
            $($element).eq($(this).index() - 3).removeAttr('id');
            $(this).attr('id', 'empty');
            $(this).children().attr('src', 'images/0.png');
            flag = 1;
        } else if ("empty" == $($element).eq($(this).index() + 3).attr('id')) {
            $($element).eq($(this).index() + 3).children().attr('src', $(this).children().attr('src'));
            $($element).eq($(this).index() + 3).removeAttr('id');
            $(this).attr('id', 'empty');
            $(this).children().attr('src', 'images/0.png');
            flag = 1;
        } else if ("empty" == $(this).next().attr('id')) {
            $(this).next().children().attr('src', $(this).children().attr('src'));
            $(this).next().removeAttr('id');
            $(this).attr('id', 'empty');
            $(this).children().attr('src', 'images/0.png');
            flag = 1;
        } else if ("empty" == $(this).prev().attr('id')) {
            $(this).prev().children().attr('src', $(this).children().attr('src'));
            $(this).prev().removeAttr('id');
            $(this).attr('id', 'empty');
            $(this).children().attr('src', 'images/0.png');
            flag = 1;
        }
        if (flag) {
            document.getElementById('play').play();
            $('.hits').text(++counter);
        }
    });
});