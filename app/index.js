import $ from 'jquery';
import './styles/style.less';
import { Router } from 'director/build/director';
// import Path from './router';
// import page from 'page';
import fullPageSlider from './fullpage';
import destroySlider from './fullpage/destroy';
import init from './mainInit';
import projects from './projects';
import destroyProjects from './projects/destroy';

$(document).ready(() => {
	$('.preloader').fadeOut();
	router.init(['/']);
	init();
});


const router = new Router({
	'/': [destroyProjects, fullPageSlider],
	'/projects': [destroySlider, projects],
	'/projects/:id': [destroySlider, projects],
	'*': function(route) {
		destroyProjects();
		if (route.match('slide')) {
			fullPageSlider(route);
		} else {
			alert('404 Not Found');
		}
	}
});
