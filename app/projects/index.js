import $ from 'jquery';
import { UI, setMenuAs } from '../actions';

function initialize(ui) {
	setMenuAs({ opened: true });
	setTimeout(()=>{
		setMenuAs({ slided: true });
	}, 150);

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
	const ui = new UI();
	initialize(ui);

	const $projects = ui.get('projectPage').find('.project-item');
	if (id) {
		ui.get('projectPage').attr('data-view', 'project');
		$projects.each(function() {
			const $project = $(this);
			if ($project.attr('data-id') === id) {
				$project.attr('data-state', 'fullscreen');
			} else {
				$project.attr('data-state', 'hidden');
			}
		});

		} else {
		ui.get('projectPage').attr('data-view', 'list');
		$projects.attr('data-state', 'item');
	}
}
