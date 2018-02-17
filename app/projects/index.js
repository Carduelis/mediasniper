import $ from 'jquery';
import { UI, setMenuAs } from '../actions';

function initialize() {
	const ui = new UI();
	setMenuAs({ opened: true });
	setMenuAs({ slided: true });

	ui.get('menuButton').on('click', function() {
		const $btn = $(this);
		if ($btn.attr('data-state') === 'arrow') {
			setMenuAs({slided: false});
			setMenuAs({ opened: true });
		} else {
			setTimeout(() => {
				// avoid white flashing from html background during initialization of fullpage.js-slider
				setMenuAs({ opened: false });
			}, 200);
			ui.get('header').attr('data-color', 'white');
			window.location.hash = '#/';
		}
	});
}


export default function(id) {
	initialize();
	if (id) {

	}
}
