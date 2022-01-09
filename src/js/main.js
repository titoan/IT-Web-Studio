let mainFunctions = {   

    cloneItem:function(parentItem, cloneItem, countItem){
        for (let i = countItem; i > 0; i--) {
            $(cloneItem).clone().appendTo(parentItem);
        }
    },

    tabs:function(){
        $('.schedule-tabs .item').click(function(e){
            e.preventDefault();
            let thisTab = $(this).attr('href');
            
            $(this).parent().find('.item').removeClass('active');
            console.log($(this).parent());
            $(this).addClass('active');

            $('.cards .tab-container').removeClass('active')
            $('.cards').find(thisTab).addClass('active');                      
        })
    },

    startOwlCarousel: function(){        
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
    },
}



// timer = setInterval(function () {
//     seconds = timeMinut%60 // Получаем секунды
//     minutes = timeMinut/60%60 // Получаем минуты
//     hour = timeMinut/60/60%60 // Получаем часы
    
//     // Условие если время закончилось то...
//     if (timeMinut <= 0) { 
       
//         clearInterval(timer);// Таймер удаляется        
//         alert("Время закончилось");// Выводит сообщение что время закончилось
//     } else { // Иначе
//         // Создаём строку с выводом времени
//         let strTimer = `${Math.trunc(hour)}:${Math.trunc(minuts)}:${seconds}`;
//         // Выводим строку в блок для показа таймера
//         timerShow.innerHTML = strTimer;
//     }
//     --timeMinut; // Уменьшаем таймер
// }, 1000)

