document.addEventListener('DOMContentLoaded', () => {
	'use strict';
    
    //Slick slider settings
    $('.main__slider').slick({
        dots: true,
        arrows: false,
        infinite: true,
        autoplay: true,
        autoplaySpeed: 3000,
    }); 
		
	

    // Hidden Info section
	let mainBtn = document.querySelector('.main-info__button'),
        mainInfoBox = document.querySelector('.main-info__box'),
        isSectionVisible = false,
    // Modal window opening and closing
        overlay = document.querySelector('.overlay'),
        footer = document.querySelector('.footer'),
        footerHeight = footer.offsetTop,
    // Burger-menu for mob version
        isBurgerMenuOpened = false,
        burgerBtn = document.querySelector('.burger__button'),
        burgerMenu = document.querySelector('.burger__menu');


    document.body.addEventListener('click', (event) => {
		let target = event.target;


        // Burger-menu for mob version
        if (target.classList.contains('burger__button')) {
            if (!isBurgerMenuOpened) {
                burgerMenu.setAttribute('style', 'display: block');
			    burgerBtn.setAttribute('style', 'background-image: url(./img/header/burger-menu/burger-menu-focused.svg)');
                
            } else {
                burgerMenu.setAttribute('style', 'display: none');
			    burgerBtn.setAttribute('style', 'background-image: url(./img/header/burger-menu/burger-menu.svg)');
            }
            isBurgerMenuOpened = !isBurgerMenuOpened;
        }

        // Hidden Info section
        if (target.classList.contains('main-info__button')) {
            if (isSectionVisible) {
                mainInfoBox.setAttribute('style', 'transform: translate(0, 0%)');
                mainBtn.setAttribute('style', 'transform: translate(-50%, -100%) rotate(180deg);');
            } else {
                mainInfoBox.setAttribute('style', 'transform: translate(0, -100%)');
                mainBtn.setAttribute('style', 'transform: translate(-50%, -100%) rotate(0deg);');
            }
            isSectionVisible = !isSectionVisible;
        }

        // Modal window opening and closing
        // Modal window opening
        if (target && target.classList.contains('login__btn')) {
            overlay.setAttribute('style', `display: block; height: ${footerHeight}px;`);
        }
        // Modal window closing
        if (target.classList.contains('overlay') || target.classList.contains('overlay__close')) {
            overlay.setAttribute('style', 'display: none');
        }
	});
})




