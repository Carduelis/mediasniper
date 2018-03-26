import $ from 'jquery';
import isFullpageEnabled from './isFullpageEnabled';
import { UI } from '../actions';
export default function() {
	if (isFullpageEnabled()) {
		const ui = new UI();
		$.fn.fullpage.destroy('all');
		ui.get('menuButton').off();
		$('.slide04').hide();
	} else {
		console.log('Could not destroy fullpage cause it has not been initialized');
	}
}
