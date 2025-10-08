        $(document).ready(function () {
            $('.client-slider').slick({
                variableWidth: false,
                centerPadding: '60px',
                slidesToShow: 4,
                slidesToScroll: 1,
                autoplay: true,
                infinite: true,
                pauseOnFocus: false,
                pauseOnHover: false,
                arrows: true,
                autoplaySpeed: 3000,
                responsive: [
                    {
                        breakpoint: 1200,
                        settings: {
                            arrows: true,
                            centerPadding: '40px',
                            slidesToShow: 3
                        }
                    },
                    {
                        breakpoint: 768,
                        settings: {
                            arrows: true,
                            centerPadding: '40px',
                            slidesToShow: 2
                        }
                    },
                    {
                        breakpoint: 500,
                        settings: {
                            arrows: true,
                            centerPadding: '40px',
                            slidesToShow: 1
                        }
                    }
                ]
            });
        });