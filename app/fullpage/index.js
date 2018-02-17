import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
import init from './init';
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
		init();
	}
}
