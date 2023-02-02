$('.form-item input[type=radio]').on('change', function (e) {
    var ths = $(this);
    var nextElementOffsetTop = ths.parents('.form-item').next().offset().top - 100;
    $('html, body').animate({
        scrollTop: nextElementOffsetTop
    }, 1000);
    return false;

});
$('.select').on('change', function (e) {
    var ths = $(this);
    ths.addClass('entered')
});
$('.input-label .input').on('change', function (e) {
    var ths = $(this);
    if(ths.val().length > 0){
        ths.addClass('entered')
    }else{
        ths.removeClass('entered')
    }

});
