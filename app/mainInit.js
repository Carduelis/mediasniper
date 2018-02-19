import $ from 'jQuery';
import { toggleLogo, UI, setMenuAs } from './actions';


export default function(path) {
	const ui = new UI();
	ui.get('menu').find('a').on('click', function() {
		if ($(this).attr('href').match('projects')) {
			setMenuAs({slided: true})
		} else {
			setMenuAs({opened: false});
		}
	});

	ui.get('videoButton').on('click', function() {
		ui.get('videoFixed').addClass('opened');
	});
	ui.get('videoCloseButton').on('click', function() {
		ui.get('videoFixed').removeClass('opened');
	});
}
