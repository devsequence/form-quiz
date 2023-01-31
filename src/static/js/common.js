$('.select').on('change', function (e) {
    var ths = $(this);
    ths.addClass('entered')
});

// $('.quiz-item .quiz-item__link button, .quiz-item .quiz-item__link input').on('click', function (e) {
//     if($('.quiz-inner .quiz-item:last-of-type').hasClass('active')){}else{
//         $('.quiz-step').slideDown();
//
//         $('.quiz-step__title .total').html($('.quiz-inner .quiz-item').length - 2);
//
//         var myStr = $('.quiz-inner .quiz-item.active').data('quiz').replace(/\D/g,'');
//
//         $('.quiz-step__title .current').html(myStr);
//         var ska = $('.quiz-inner .quiz-item').length - 2;
//         var skaBliad = ( Number(myStr) / ska * 100);
//         $('.quiz-step__line span').css('width',  skaBliad + '%').addClass('active');
//
//
//         $('.quiz-item.active').removeClass('active').next().addClass('active');
//         $('.reviews-item.active').removeClass('active').next().addClass('active');
//         $('.quiz-media__item.active').removeClass('active').next().addClass('active');
//     }
//     if($('.quiz-inner .quiz-item:nth-last-of-type(1)').hasClass('active')){
//         $('.quiz-step').slideUp().addClass('hidden');
//     }
// });
//
//
// // AOS.init({disable: 'mobile'});
// // $('.header-btn').on('click', function (e) {
// //     var $this = $(this);
// //     $this.toggleClass('active');
// //     $('.header').toggleClass('active');
// // });
// // $('.courses-item').each(function (e) {
// //     var $ths = $(this);
// //     var $thsText = $ths.find('.courses-item__text').text();
// //     var dots = "...";
// //     var limit = 290;
// //     if($thsText.length > limit){
// //         var string = '';
// //         string = $thsText.substring(0,limit) +dots;
// //         $ths.find('.courses-item__text').text(string);
// //         $ths.find('.btn-secondary').on('click', function (e) {
// //             e.preventDefault();
// //             var $ths = $(this);
// //             var $thsParents = $ths.parents('.courses-item');
// //             var $thsParentsTop = $thsParents.offset().top;
// //             $ths.find('span').toggleClass('hidden');
// //             $thsParents.toggleClass('active');
// //             $('html, body').animate({
// //                 scrollTop: $thsParentsTop
// //             }, 300);
// //             if($thsParents.hasClass('active')){
// //                 $thsParents.find('.courses-item__text').text($thsText);
// //             }else {
// //                 $thsParents.find('.courses-item__text').text(string);
// //             }
// //             return false;
// //         });
// //     }else{
// //         $ths.find('.btn-secondary').on('click', function (e) {
// //             e.preventDefault();
// //             var $ths = $(this);
// //             var $thsParents = $ths.parents('.courses-item');
// //             var $thsParentsTop = $thsParents.offset().top;
// //             $ths.find('span').toggleClass('hidden');
// //             $thsParents.toggleClass('active');
// //             $('html, body').animate({
// //                 scrollTop: $thsParentsTop
// //             }, 300);
// //             return false;
// //         });
// //     }
// //
// // });
// // $(".more-slider").slick({
// //     speed: 500,
// //     fade: true,
// //     cssEase: 'linear',
// //     prevArrow: $('.more-slider-prev'),
// //     nextArrow: $('.more-slider-next')
// // });
// // $('.header-logo a, .footer-logo a').on('click', function (e) {
// //     e.preventDefault();
// //     $('html, body').animate({
// //         scrollTop: 0
// //     }, 1000);
// //     return false;
// // });
// //
// // if($('.hero').length > 0){
// //     $(window).on('scroll', function() {
// //         var $this = $(this),
// //             $header = $('.header');
// //         if ($this.scrollTop() > 1) {
// //             $header.addClass('scroll-nav');
// //         }
// //         else{
// //             $header.removeClass('scroll-nav');
// //         }
// //     });
// //     $('.header-nav a, .footer-nav a').on('click', function (e) {
// //         e.preventDefault();
// //         var ths = $(this);
// //         var thsId = ths.data('id');
// //         var headerHeight = $('.header').height();
// //         if ($(ths).data('id')) {
// //             $('html, body').animate({
// //                 scrollTop: $('#'+thsId).offset().top - 120
// //             }, 1000);
// //             $('.header, .header-btn').removeClass('active');
// //             return false;
// //         }else{
// //             $('.popup').addClass('active');
// //             ths.addClass('active');
// //         }
// //     });
// // }else{
// //     $('.header').addClass('page-header');
// //     $('.header-nav a, .footer-nav a').on('click', function (e) {
// //         var ths = $(this);
// //         if ($(ths).data('id')){}else{
// //             $('.popup').addClass('active');
// //             ths.addClass('active');
// //         }
// //     });
// // }
// // $(document).mouseup(function (e){
// //     var div = $('.popup');
// //     if (!div.is(e.target)
// //         && div.has(e.target).length === 0) {
// //         div.removeClass('active');
// //         $('.header-nav a, .footer-nav a').removeClass('active');
// //     }
// // });