import $ from 'jQuery';
import { toggleLogo, UI, setMenuAs } from './actions';

export default function(path) {
	const ui = new UI();
	ui.get('menu').find('a').on('click', function() {
		if ($(this).attr('href').match('projects')) {
		} else {
			setMenuAs({opened: false});
		}
	});
}
