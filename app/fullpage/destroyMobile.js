import $ from 'jquery';
import { UI } from '../actions';
export default function() {
	const ui = new UI();
	ui.get('fp').removeClass('mobile');
	$(window).off('scroll');
}
