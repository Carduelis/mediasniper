import $ from 'jquery';
import debounce from 'debounce';
import mainSwitcher from './mainSwitcher';
import { UI, setMenuAs } from '../actions';

export default function(route) {
	console.log(route);
	const ui = new UI();
	ui.get('menuButton').on('click', function() {
		const $btn = $(this);
		if ($btn.attr('data-state') === 'close') {
			setMenuAs({ opened: false });
		} else {
			setMenuAs({ opened: true });
		}
	});

	mainSwitcher(800);
	// let height = $(window).height();
	let width = $(window).width();
	$(window).on('resize', debounce(() => {
		// const deltaHeight = Math.abs(height - $(window).height());
		const deltaWidth = Math.abs(width - $(window).width());
		// if (deltaHeight < 50 && deltaHeight !== 0) {
		if (deltaWidth === 0) {
			console.log('skipping resize event');
		} else {
			mainSwitcher(800);
		}
	}, 150));
}
