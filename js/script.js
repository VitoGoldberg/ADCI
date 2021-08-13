document.addEventListener('DOMContentLoaded', () => {
	'use strict';
    // открытие и закрытие main-info
	let mainBtn = document.querySelector('.main__info__button'),
    mainInfoBox = document.querySelector('.main__info__box'),
    switcherInfo = 0;

    document.body.addEventListener('click', (event) => {
		let target = event.target;
        
        /*/ бургер меню
		if (target.classList.contains('burger__button') && positionBurger == 0) {
			burgerMenu.setAttribute("style", "display: block");
			burgerBtn.setAttribute('style', 'background-image: url(./img/header/burger-menu-focused.svg)');
			positionBurger = +1;
		} else if (target.classList.contains('burger__button') && positionBurger == 1) {
			burgerMenu.setAttribute("style", "display: none");
			burgerBtn.setAttribute('style', 'background-image: url(./img/header/burger-menu.svg)');
			positionBurger--;
		}*/

		// поднимающийся блок с текстом
		if (target.classList.contains('main__info__button')) {
			if (switcherInfo) {
				mainInfoBox.setAttribute('style', 'transform: translate(0, 0%)');
				mainBtn.setAttribute('style', 'transform: translate(-50%, -100%) rotate(180deg);');
				switcherInfo--;
			} else {
				mainInfoBox.setAttribute('style', 'transform: translate(0, -100%)');
				mainBtn.setAttribute('style', 'transform: translate(-50%, -100%) rotate(0deg);');
				switcherInfo++;
			}
		}


		


		

	});
})