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

document.addEventListener('DOMContentLoaded', function(){
 
    // Получаем все видео
    var videos = document.querySelectorAll('video');

    // Добавляем обработчик события click к кнопкам
    videos.forEach((video) => {
        var button = video.nextElementSibling;
        currentButton = button;
        
        if (currentButton){
            currentButton.addEventListener('click', (e) => {
                // Если видео не воспроизводится запустим его
                if (video.paused) {
                    video.play();
                    e.currentTarget.classList.add("play");
                } else {
                    video.pause();
                    e.currentTarget.classList.remove("play");
                    }
            });
        }

    });

});