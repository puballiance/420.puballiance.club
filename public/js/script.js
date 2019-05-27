$('document').ready(function() {
    // RESTYLE THE DROPDOWN MENU
    $('#google_translate_element').on("click", function() {
        // Change font family and color
        $("iframe").contents().find(".goog-te-menu2-item div, .goog-te-menu2-item:link div, .goog-te-menu2-item:visited div, .goog-te-menu2-item:active div, .goog-te-menu2 *")
            .css({
                'color': '#544F4B',
            });
        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2-item-selected').css('display', 'none');

        // Change menu's padding
        $("iframe").contents().find('.goog-te-menu2').css('padding', '0px');

        // Change the padding of the languages
        $("iframe").contents().find('.goog-te-menu2-item div').css('padding', '20px');

        // Change the width of the languages
        $("iframe").contents().find('.goog-te-menu2-item').css('width', '100%');
        $("iframe").contents().find('table').css('width', '100%');
        $("iframe").contents().find('td').css('width', '100%');

        // Change hover effects
        $("iframe").contents().find(".goog-te-menu2-item div").hover(function() {
            $(this).css('background-color', '#4385F5').find('span.text').css('color', '#FFFFFF');
        }, function() {
            $(this).css('background-color', '#FFFFFF').find('span.text').css('color', '#544F4B');
        });

        // Change Google's default blue border
        $("iframe").contents().find('.goog-te-menu2').css('border', 'none');

        // Change the iframe's box shadow
        $(".goog-te-menu-frame").css('box-shadow', '0 16px 24px 2px rgba(0, 0, 0, 0.14), 0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.3)');

        // Change the iframe's size and position?
        $(".goog-te-menu-frame").css({
            'height': '100%',
            'width': '100%',
            'top': '0px'
        });
        // Change iframes's size
        $("iframe").contents().find('.goog-te-menu2').css({
            'height': '100%',
            'width': '100%'
        });
    });
    // Auto Scroll
    $(".scrollTo").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;
            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function() {
                window.location.hash = hash;
            });
        };
        $('#navbarSupportedContent').collapse('hide');
    });
    $(".wow-in").addClass("wow fadeIn");
    new WOW().init();
    objectFitImages();
    jarallax(document.querySelectorAll('.jarallax'));
    jarallax(document.querySelectorAll('.jarallax-keep-img'), {
        keepImg: true,
    });

    /*    var openPhotoSwipe = function() {
            var pswpElement = document.querySelectorAll('.pswp')[0];
            var items = [{
                src: '../public/img/hive/map.png',
                w: 2241,
                h: 2441
            }];
            var options = {
                index: 0, // start at first slide
                closeEl: true,
                focus: false,
                captionEl: false,
                fullscreenEl: false,
                zoomEl: true,
                shareEl: false,
                counterEl: false,
                arrowEl: false,
                history: false,
                preloaderEl: true,
                getDoubleTapZoom: function(isMouseClick, item) {
                    if (isMouseClick) {
                        return 1;
                    } else {
                        return item.initialZoomLevel < 0.7 ? 1 : 1.5;
                    }
                }
            };
            var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
            gallery.init();
        };
        document.getElementById('open-map').onclick = openPhotoSwipe; */
});
