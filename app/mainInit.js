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

	$('.video-link').on('click', function() {
		$('.video-fixed').addClass('opened');
	});
	$('.video-fixed').on('click', function() {
		$('.video-fixed').removeClass('opened');
	});
}
