import $ from 'jquery';
import isEnabled from './isEnabled';
import { UI, setMenuAs } from '../actions';
export default function() {
	if (isEnabled()) {
		const ui = new UI();
		$.fn.fullpage.destroy('all');
		ui.get('menuButton').off();
		$('.slide04').hide();
	} else {
		console.log('nothing to destroy')
	}
}
