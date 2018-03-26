import $ from 'jquery';
import { UI, setMenuAs } from './actions';

export default function(/*path*/) {
	const ui = new UI();
	ui.get('menu').find('a').on('click', function() {
		if ($(this).attr('href').match('projects')) {
			setMenuAs({ slided: true });
		} else {
			setMenuAs({ opened: false });
		}
	});

	const $hashItems = $('[data-slide="05"]').find('.item');
	$hashItems.on('click', function() {
		const $clickedItem = $(this);
		$hashItems.not($clickedItem).removeClass('active');
		$clickedItem.toggleClass('active');
	});
	
	ui.get('videoButton').on('click', () => {
		ui.get('videoFixed').addClass('opened');
		ui.get('videoContainer').html(`
			<iframe id='ytplayer' type='text/html' width='640' height='360'
			src='https://www.youtube.com/embed/7Gskpudh0oE?autoplay=1&origin=http://example.com'
			frameborder='0'></iframe>
		`);
	});
	ui.get('videoCloseButton').on('click', () => {
		ui.get('videoContainer').empty();
		ui.get('videoFixed').removeClass('opened');
	});
}
