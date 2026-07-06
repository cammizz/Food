$(document).ready(function() {
    $('#mobile_btn').on('click', function () {
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-bars fa-xmark');
    });

    const sections = $('section');
    const navItems = $('.nav-item');

    $(window).on('scroll', function () {
        const header = $('header');
        const scrollPosition = $(window).scrollTop() - header.outerHeight();

        let activeSectionIndex = 0;

        if (scrollPosition <= 0) {
            header.css('box-shadow', 'none');
        } else {
            header.css('box-shadow', '5px 1px 5px rgba(0, 0, 0, 0.1');
        }

        sections.each(function(i) {
            const section = $(this);
            const sectionTop = section.offset().top - 96;
            const sectionBottom = sectionTop + section.outerHeight();

            if(scrollPosition >= sectionTop && scrollPosition < sectionBottom) {
                activeSectionIndex = i;
                return false;
            }
        });

        navItems.removeClass('active');
        $(navItems[activeSectionIndex]).addClass('active');
    });

    ScrollReveal().reveal('#cta', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('.dish', {
        origin: 'left',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#testimonial_chef', {
        origin: 'left',
        duration: 1000,
        distance: '20%'
    });

    ScrollReveal().reveal('.feedback', {
        origin: 'right',
        duration: 2000,
        distance: '20%'
    });

    ScrollReveal().reveal('#special-drinks', {
        origin: 'bottom',
        duration: 2000,
        distance: '20%',
        beforeReveal: function () {
            $('.drink-item').eq(0).addClass('active');
        }
    });

    $('.dish-heart').on('click', function () {
        $(this).find('i').toggleClass('active-heart');
    });

    // --- LÓGICA DO SLIDER DE BEBIDAS 3D ---
    const drinkItems = $('.drink-item');
    let currentDrink = 0;

    $('#next_drink').on('click', function() {
        drinkItems.eq(currentDrink).removeClass('active'); 
        currentDrink++; 
        if (currentDrink >= drinkItems.length) {
            currentDrink = 0; 
        }
        drinkItems.eq(currentDrink).addClass('active'); 
    });

    $('#prev_drink').on('click', function() {
        drinkItems.eq(currentDrink).removeClass('active');
        currentDrink--; 
        if (currentDrink < 0) {
            currentDrink = drinkItems.length - 1; 
        }
        drinkItems.eq(currentDrink).addClass('active');
    });
});