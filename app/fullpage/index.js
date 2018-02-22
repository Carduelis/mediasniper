import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
import init from './init';
import initMobile from './initMobile';
import destroy from './destroy';
import destroyMobile from './destroyMobile';
import isEnabled from './isEnabled';
import { reRunAnimationButton, reanimate } from '../animater';
import { UI, setMenuAs, setColors, screenSplashes, slide } from '../actions';
import { slides } from '../data';

export default function(route) {
	console.log(route);
	const ui = new UI();
	ui.get('menuButton').on('click', function() {
		const $btn = $(this);
		if ($btn.attr('data-state') === 'close') {
			setMenuAs({ opened: false });
		} else {
			setMenuAs({ opened: true });
		}
	});
	if (isEnabled()) {
		console.log('fullPageSlider has already been initialized');
	} else {
		if ($(window).width() > 800) {
			destroyMobile();
			init();
		} else {
			initMobile();
			destroy();
		}
	}

	$(window).on('resize', () => {
		if ($(window).width() > 800) {
			destroyMobile();
			init();
		} else {
			initMobile();
			destroy();
		}
	});
}
