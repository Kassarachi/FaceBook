// Stories start
$('.stories_slider').owlCarousel({
    loop: false,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 3
        },
        600: {
            items: 4
        },
        795: {
            items: 3
        },
        1000: {
            items: 4
        }
    }
});


$('.next_btn_stories').click(function() {
    $('.owl-carousel').owlCarousel().trigger('next.owl.carousel');
});


// Stories end




$('.people_slider').owlCarousel({
    loop: true,
    margin: 0,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        447: {
            items: 2
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

$('.next_btn').click(function() {
    $('.people_slider').trigger('next.owl.carousel');
});



$(function() {
    $('[data-bs-toggle="tooltip"]').tooltip()
})