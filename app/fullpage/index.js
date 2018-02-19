import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
import init from './init';
import destroy from './destroy';
import isEnabled from './isEnabled';
import { UI, setMenuAs } from '../actions';

export default function(route) {
	console.log(route);
	const ui = new UI();
	ui.get('menuButton').on('click', function() {
		const $btn = $(this);
		if ($btn.attr('data-state') === 'close') {
			setMenuAs({opened: false});
		} else {
			setMenuAs({opened: true});
		}
	});
	if (isEnabled()) {
		console.log('fullPageSlider has already been initialized');
	} else {
		if ($(window).width() > 800) {
			init();
		} else {
			init();
		}
	}

	$(window).on('resize', function() {
		if ($(window).width() > 800) {
			// init();
		} else {
			// destroy();
		}
	});
}
