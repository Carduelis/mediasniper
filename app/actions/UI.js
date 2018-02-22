import $ from 'jquery';

class UI {
	constructor() {
		this.map = map;
		this.cached = {};
	}

	get(key, params, useCache = true) {
		if (!params) {
			if (useCache && this.cached[key]) {
				return this.cached[key];
			}
			this.cached[key] = $(this.map[key]);
			return this.cached[key];
		} else {
			try {
				return $(this.map[key](params));
			} catch (e) {
				console.warn(e, 'there is no such key as a function', key);
				return null;
			}
		}
	}
}

const map = {
	logo: '.header-logo-block',
	fp: '#fullpage',
	menu: '.fixed-menu',
	sideNav: '.menu',
	header: '.fixed-header',
	menuButton: '#mainMenuButton',
	socio: '.socio-networks',
	projectPage: '.projects-page',
	videoButton: '.video-link',
	videoCloseButton: '.video-fixed button',
	videoFixed: '.video-fixed',
	videoContainer: '#video-container',
	slide: id => (id ? `[data-slide=${id}]` : '[data-slide]')
};

export { UI };
