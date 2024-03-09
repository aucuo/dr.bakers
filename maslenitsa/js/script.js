$('.hero__row-item').click(function () {
    $(this).toggleClass('active');
});

// SWITCHER
$(document).ready(function () {
    // Функция для обновления позиции и размера ::before
    function updateBackground($switcher) {
        var $activeOption = $switcher.find('.switcher__option--active');
        var $switcherBackground = $switcher.find('.js-switcher-wrapper');
        var width = $activeOption.outerWidth();
        var position = $activeOption.position();

        if ($activeOption.hasClass('switcher__option--left')) {
            $switcherBackground.css("left", `${position.left}px`);
            $switcherBackground.css("width", `${width}px`);
        }
        else {
            $switcherBackground.css("left", `${position.left}px`);
            $switcherBackground.css("width", `${width}px`);
        }
    }

    $('.js-switcher-wrapper').each(function () {
        updateBackground($(this));
    });

    $('.js-switcher').click(function () {
        var $this = $(this);
        var $switcher = $this.closest('.switcher');
        $switcher.find('.switcher__option--active').removeClass('switcher__option--active');
        $this.addClass('switcher__option--active');

        updateBackground($switcher);

        var $activeOption = $switcher.find('.switcher__option--active');
        var $target = $(`.${$activeOption.data("target")}`);
        var $remove = $(`.${$activeOption.data("remove")}`);
        if ($target.length != 0 && $remove.length != 0) {
            $target.toggleClass('active').slideDown(500);
            $remove.toggleClass('active').slideUp(500);
        }
    });
});



// MAIN BUTTON
function showLoader() {
    var $items = $('.js-loading-ticker-item'), currentIndex = 0;

    function tick() {
        $items.removeClass('is-active is-leaving');

        var prevIndex = currentIndex;
        currentIndex = (currentIndex + 1) % $items.length;

        if (prevIndex >= 0) {
            $items.eq(prevIndex).addClass('is-leaving');
        }

        $items.eq(currentIndex).addClass('is-active');

        setTimeout(tick, 3000);
    }

    tick();
}

$('.js-cook').click(function () {
    var $heroParent = $('.hero')
    var $hero = $('.hero__main')
    var $loading = $('.loading')
    var $videos = $('.hero__videos')
    var $row = $hero.find('.hero__row');

    if ($row.hasClass('active')) {
        console.log("Обработка нажатых тегов")
        var $buttons = $row.find('.hero__row-item.active');
        console.log($buttons)
    } else {
        console.log("Обработка введенного текста")
        var $textarea = $('.hero__recipe-textarea')
        var text = $textarea.val()
        console.log(text)
    }
    $videos.fadeOut(500, function () {
        $hero.fadeOut(500, function () {
            $loading.fadeIn(500)
        });
    })
    showLoader();

    setTimeout(function () {
        console.log("Результат получен")

        var $result = $('.result')
        $result.css('height', 'auto');
        var originalHeight = $result.height();
        console.log(originalHeight)
        $heroParent.animate({
            height: originalHeight
        }, 500);
        $loading.fadeOut(500, function () {
            $result.fadeIn(500)
        })
    }, 2000);
});

const swiper = new Swiper('.swiper', {
    slidesPerView: 4,
    spaceBetween: 5,
    centeredSlides: true,
    breakpoints: {
        768: {
            slidesPerView: 4,
            spaceBetween: 20,
        },
    }
});

$(document).ready(function () {
    Fancybox.bind("[data-fancybox='result']", {
    });
});


$('.js-cook-again').click(function () {
    var $heroParent = $('.hero')
    var $hero = $('.hero__main')
    var $videos = $('.hero__videos')
    var $result = $('.result')

    var height = $heroParent.css("min-height");
    $heroParent.animate({
        height: height
    }, 500);

    $result.fadeOut(500, function () {
        $heroParent.css("height", "unset");
        $hero.fadeIn(500, function () {
            $videos.fadeIn(500)
        })
    });
});