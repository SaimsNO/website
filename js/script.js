$('.owl-carousel').owlCarousel({
    loop:true,
    margin:10,
    
    responsive:{
        0:{
            items:1,
            nav:false,
        },
        600:{
            items:1,
            nav:false,
        },
        1000:{
            items:1,
            nav:true,
        }
    }
})