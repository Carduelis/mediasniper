import $ from 'jQuery';
import { UI } from '../actions';

const closeMenu = function() {
	const ui = new UI();

	const currentColor = ui.get('header').data('color');
	ui.get('menu').addClass('opened');
	ui.get('menuButton').addClass('active');
	ui.get('header').attr('data-oldcolor', currentColor);
	ui.get('header').attr('data-color', 'white');

}

export { closeMenu }
