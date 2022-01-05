let mainFunctions = {

    createCards: function () {
        console.log('dfdfdf')
        let parentItem = $('.cards > .tab-container > .owl-carousel');
        for (let i = 6; i >= 0; i--) {
            $('.card:first-child').clone().appendTo(parentItem);
        }
    },

    startOwlCarousel: function(){
        console.log('dfdfdf')
        $('.owl-carousel').owlCarousel({
            responsive: {
                0: {
                    items: 1,
                    center: true,
                },
                1366: {
                    items: 2,
                    margin: 10,
                },
                1820: {
                    items: 4,
                }
            },
        })
    }
}





