var moveUp=document.querySelector(".moveUp");window.addEventListener("scroll",function(){var e=window.pageYOffset,t=document.documentElement.clientHeight;t<e&&moveUp.classList.add("moveUp-show"),e<t&&moveUp.classList.remove("moveUp-show")}),moveUp.addEventListener("click",function e(){0<window.pageYOffset&&(window.scrollBy(0,-80),setTimeout(e,0))});var hamburger=document.querySelector(".hamburger-button"),mainMenu=document.querySelector(".main-menu"),mainCards=document.querySelector(".main-cards li");hamburger.addEventListener("click",function(){mainMenu.classList.toggle("open-menu"),hamburger.classList.toggle("hamburger-button-active"),mainCards.classList.toggle("addingmargingtop")});for(var openingSubmenu=document.querySelectorAll(".opening-submenu"),subMenu=document.querySelectorAll(".sub-menu"),parentItem=document.querySelectorAll(".parent-item"),openSubmenu=function(e,t){e.addEventListener("click",function(){t.classList.toggle("sub-menu-open")})},i=0;i<subMenu.length;i++)openSubmenu(openingSubmenu[i],subMenu[i]);var title=document.querySelector("title");if('Сайт аудиторской компании ООО "Аудит-Эксперт Бизнес"'===title.text){var nextSlide=document.querySelectorAll(".right-slider-button"),previousSlide=document.querySelectorAll(".left-slider-button");function showSlides(e){var t,l=document.querySelectorAll(".main-slide");for(e>l.length&&(slideIndex=1),e<1&&(slideIndex=l.length),t=0;t<l.length;t++)l[t].style.display="none";l[slideIndex-1].style.display="block"}var slideIndex=1;function plusSlide(){showSlides(slideIndex+=1)}function minusSlide(){showSlides(slideIndex-=1)}showSlides(slideIndex);var slides=document.querySelectorAll(".main-slide");for(i=0;i<nextSlide.length;i++)nextSlide[i].addEventListener("click",function(){for(var e=0;e<nextSlide.length;e++)slides[e].classList.add("main-slide-animation");plusSlide()}),previousSlide[i].addEventListener("click",function(){for(var e=0;e<nextSlide.length;e++)slides[e].classList.add("main-slide-animation");minusSlide()});var nextService=document.querySelector(".arrow-right"),previousService=document.querySelector(".arrow-left");function showService(e,t){var l,n=document.querySelectorAll(".key-servises-list > li");if("right"===t){var o=0,i=0,d=0,s=0;for(l=0;l<n.length;l++)"block"===getComputedStyle(n[l]).display&&0===o&&(o+=1,n[l].style.display="none",s=l),0<l&&"none"===getComputedStyle(n[l]).display&&"block"===getComputedStyle(n[l-1]).display&&0===i&&(i+=1,n[l].style.display="block"),"block"===getComputedStyle(n[l]).display&&(d+=1),0===d&&l===n.length-1&&(n[s+1].style.display="block")}else if("left"===t){o=0,i=0;for(l=1;l<n.length;l++)"none"===getComputedStyle(n[l-1]).display&&"block"===getComputedStyle(n[l]).display&&0===o&&(o+=1,n[l-1].style.display="block"),0<l&&"none"===getComputedStyle(n[l]).display&&"block"===getComputedStyle(n[l-1]).display&&0===i?(i+=1,n[l-1].style.display="none"):l===n.length-1&&"block"===getComputedStyle(n[l]).display&&"block"===getComputedStyle(n[l-1]).display&&0===i&&(n[l].style.display="none")}"block"===getComputedStyle(n[0]).display?previousService.style.display="none":"none"===getComputedStyle(n[0]).display&&(previousService.style.display="block"),"block"===getComputedStyle(n[n.length-1]).display?nextService.style.display="none":"none"===getComputedStyle(n[n.length-1]).display&&(nextService.style.display="block")}var serviceIndex=1;function plusService(){showService(serviceIndex+=1,"right")}function minusService(){showService(serviceIndex-=1,"left")}showService(serviceIndex),nextService.addEventListener("click",function(){plusService()}),previousService.addEventListener("click",function(){minusService()})}if('Страница "Отзывы" сайта ООО "Аудит-Эксперт Бизнес"'===title.text){var closePopup=document.querySelector(".modal-close"),popup=document.querySelector(".modal-img"),overlay=document.querySelector(".overlay"),showPopup=document.querySelectorAll(".feedbacks-img"),toShowPopup=function(e){popup.style.display="block",overlay.style.display="block",popup.querySelector("img").src="img/licence/feedback"+e+"large.jpg"},addImgClickHandler=function(e,t){e.addEventListener("click",function(){toShowPopup(t+1)})};for(i=0;i<showPopup.length;i++)addImgClickHandler(showPopup[i],i);closePopup.addEventListener("click",function(e){e.preventDefault(),popup.style.display="none",overlay.style.display="none"}),window.addEventListener("keydown",function(e){"Escape"===e.key&&(popup.style.display="none",overlay.style.display="none")}),overlay.addEventListener("click",function(){popup.style.display="none",overlay.style.display="none"})}if('Страница "О компании ООО "Аудит-Эксперт Бизнес"'===title.text){var nextFeedback=document.querySelector(".arrow-right"),previousFeedback=document.querySelector(".arrow-left");function showFeedback(e,t){var l,n=document.querySelectorAll(".comments-of-clients li");if("right"===t){var o=0,i=0,d=0,s=0;for(l=0;l<n.length;l++)"block"===getComputedStyle(n[l]).display&&0===o&&(o+=1,n[l].style.display="none",s=l),0<l&&"none"===getComputedStyle(n[l]).display&&"block"===getComputedStyle(n[l-1]).display&&0===i&&(i+=1,n[l].style.display="block"),"block"===getComputedStyle(n[l]).display&&(d+=1),0===d&&l===n.length-1&&(n[s+1].style.display="block")}else if("left"===t){o=0,i=0;for(l=1;l<n.length;l++)"none"===getComputedStyle(n[l-1]).display&&"block"===getComputedStyle(n[l]).display&&0===o&&(o+=1,n[l-1].style.display="block"),0<l&&"none"===getComputedStyle(n[l]).display&&"block"===getComputedStyle(n[l-1]).display&&0===i?(i+=1,n[l-1].style.display="none"):l===n.length-1&&"block"===getComputedStyle(n[l]).display&&"block"===getComputedStyle(n[l-1]).display&&0===i&&(n[l].style.display="none")}"block"===getComputedStyle(n[0]).display?previousFeedback.style.display="none":"none"===getComputedStyle(n[0]).display&&(previousFeedback.style.display="block"),"block"===getComputedStyle(n[n.length-1]).display?nextFeedback.style.display="none":"none"===getComputedStyle(n[n.length-1]).display&&(nextFeedback.style.display="block")}var feedbackIndex=1;function plusFeedback(){showFeedback(feedbackIndex+=1,"right")}function minusFeedback(){showFeedback(feedbackIndex-=1,"left")}showFeedback(feedbackIndex),nextFeedback.addEventListener("click",function(){plusFeedback()}),previousFeedback.addEventListener("click",function(){minusFeedback()})}