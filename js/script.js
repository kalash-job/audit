/* Работа кнопки-стрелки ВВЕРХ */
var moveUp = document.querySelector('.moveUp');

window.addEventListener('scroll', function () {
    var scrolled = window.pageYOffset;
    var coords = document.documentElement.clientHeight;
    if (scrolled > coords) {
        moveUp.classList.add('moveUp-show');
    }
    if (scrolled < coords) {
        moveUp.classList.remove('moveUp-show');
    }
});

moveUp.addEventListener('click', function backToTop() {
    if (window.pageYOffset > 0) {
        window.scrollBy(0, -80);
        setTimeout(backToTop, 0);
    }
});

/* Работа иконки меню в мобильной версии */
var hamburger = document.querySelector('.hamburger-button');
var mainMenu = document.querySelector('.main-menu');
var mainCards = document.querySelector('.main-cards li');

hamburger.addEventListener('click', function () {
    mainMenu.classList.toggle('open-menu');
    hamburger.classList.toggle('hamburger-button-active');
    mainCards.classList.toggle('addingmargingtop');
});

/* Работа стрелочек для открытия подменю в мобильной версии */
var openingSubmenu = document.querySelectorAll('.opening-submenu');
var subMenu = document.querySelectorAll('.sub-menu');
var parentItem = document.querySelectorAll('.parent-item');

var openSubmenu = function (buttonOpeningSubmenu, subMenu) {
    buttonOpeningSubmenu.addEventListener('click', function () {
        subMenu.classList.toggle('sub-menu-open');
    });
}
for (var i = 0; i < subMenu.length; i++) {
    openSubmenu(openingSubmenu[i], subMenu[i]);
}


/* Главный слайдер */

var nextSlide = document.querySelectorAll('.right-slider-button');
var previousSlide = document.querySelectorAll('.left-slider-button');

/* Основная функция слайдера */
function showSlides(n) {
    var i;
    var slides = document.querySelectorAll(".main-slide");
    if (n > slides.length) {
        slideIndex = 1
    }
    if (n < 1) {
        slideIndex = slides.length
    }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";

    }
    slides[slideIndex - 1].style.display = "block";

}

/* Индекс слайда по умолчанию */
var slideIndex = 1;
showSlides(slideIndex);

/* Функция увеличивает индекс на 1, показывает следующий слайд*/
function plusSlide() {
    showSlides(slideIndex += 1);
}

/* Функция уменьшяет индекс на 1, показывает предыдущий слайд*/
function minusSlide() {
    showSlides(slideIndex -= 1);
}

/*Обрабатываем клики по кнопкам управления слайдами*/
var slides = document.querySelectorAll(".main-slide");
for (var i = 0; i < nextSlide.length; i++) {
    nextSlide[i].addEventListener('click', function () {
        /*подключаем анимацию для всех слайдов после первого клика по стрелочке*/
        for (var j = 0; j < nextSlide.length; j++) {
            slides[j].classList.add('main-slide-animation');
        }
        plusSlide();
    });
    previousSlide[i].addEventListener('click', function () {
        /*подключаем анимацию для всех слайдов после первого клика по стрелочке*/
        for (var j = 0; j < nextSlide.length; j++) {
            slides[j].classList.add('main-slide-animation');
        }
        minusSlide();
    });
}


/* Слайдер НАШИ КЛЮЧЕВЫЕ УСЛУГИ*/
var nextService = document.querySelector('.arrow-right');
var previousService = document.querySelector('.arrow-left');

/* Основная функция слайдера */
function showService(n, direction) {
    var i;
    var services = document.querySelectorAll(".key-servises-list > li");
    if (direction === 'right') {
        var countLeft = 0;
        var countRight = 0;
        var countDisplayBlock = 0;
        var changingDisplayBlock = 0;
        for (i = 0; i < services.length; i++) {
            console.log(getComputedStyle(services[i]).display);

            if (getComputedStyle(services[i]).display === 'block' && countLeft === 0) {
                countLeft += 1;
                console.log('зашли в 1-й if', 'i=' + i, 'countLeft=' + countLeft);
                services[i].style.display = 'none';
                changingDisplayBlock = i;
            }
            console.log(getComputedStyle(services[i]).display);
            if (i > 0 && getComputedStyle(services[i]).display === 'none' && getComputedStyle(services[i - 1]).display === 'block' && countRight === 0) {
                countRight += 1;
                console.log('зашли в 2-й if', 'i=' + i, 'countRight=' + countRight);
                services[i].style.display = "block";
            }
            /*счетчик элементов с display = "block"*/
            if (getComputedStyle(services[i]).display === 'block') {
                countDisplayBlock += 1;
            }
            /*для варианта в мобильной версии, если ни у одного элемента нет display = "block"*/
            if (countDisplayBlock === 0 && i === services.length - 1) {
                services[changingDisplayBlock + 1].style.display = "block";
            }
        }
    } else {
        if (direction === 'left') {
            var countLeft = 0;
            var countRight = 0;
            for (i = 1; i < services.length; i++) {
                if (getComputedStyle(services[i - 1]).display === "none" && getComputedStyle(services[i]).display === "block" && countLeft === 0) {
                    countLeft += 1;
                    console.log('зашли в 3-й if');
                    services[i - 1].style.display = "block";
                }
                if (i > 0 && getComputedStyle(services[i]).display === "none" && getComputedStyle(services[i - 1]).display === "block" && countRight === 0) {
                    countRight += 1;
                    console.log('зашли в 4-й if');
                    services[i - 1].style.display = "none";
                } else if (i === services.length - 1 && getComputedStyle(services[i]).display === "block" && getComputedStyle(services[i - 1]).display === "block" && countRight === 0) {
                    services[i].style.display = "none";
                }
            }
        }
    }
    /*отключение стрелок в крайних положениях*/
    if (getComputedStyle(services[0]).display === "block") {
        previousService.style.display = "none";
    } else if (getComputedStyle(services[0]).display === "none") {
        previousService.style.display = "block";
    }
    if (getComputedStyle(services[services.length - 1]).display === "block") {
        nextService.style.display = "none";
    } else if (getComputedStyle(services[services.length - 1]).display === "none") {
        nextService.style.display = "block";
    }
}

/* Индекс первого слайда по умолчанию */
var serviceIndex = 1;
showService(serviceIndex);

/* Функция увеличивает индекс на 1, показывает первым следующий слайд*/
function plusService() {
    showService(serviceIndex += 1, 'right');
}

/* Функция уменьшяет индекс на 1, показывает первым предыдущий слайд*/
function minusService() {
    showService(serviceIndex -= 1, 'left');
}

/*Обрабатываем клики по кнопкам управления слайдами*/
nextService.addEventListener('click', function () {
    plusService();
});
previousService.addEventListener('click', function () {
    minusService();
});