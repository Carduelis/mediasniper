import $ from 'jquery';

class UI {
	constructor() {
		this.map = map;
		this.cached = {};
	}
	get(key, useCache = true) {
		if (useCache && this.cached[key]) {
			return this.cached[key]
		}
		this.cached[key] = $(this.map[key]);
		return this.cached[key];
	}
}

const map = {
	logo: '.header-logo-block',
	menu: '.fixed-menu',
	sideNav: '.menu',
	header: '.fixed-header',
	menuButton: '.menu-button',
	socio: '.socio-networks',
	projectPage: '.projects-page'
}

export { UI }
