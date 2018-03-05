import $ from 'jquery';
import { UI, setMenuAs } from '../actions';
export default function() {
	const ui = new UI();
	ui.get('fp').removeClass('mobile');
	$(window).off('scroll');
	$('[data-slide="05"]').find('.item').off();
}
