import $ from 'jquery';

const toggleLogo = function() {
	const $logo = $('.header-logo-block');
	const $menu = $('.fixed-menu');
	if ($menu.hasClass('slided')) {
		$logo.addClass('fadeout');
	} else {
		$logo.removeClass('fadeout');
	}
}

export { toggleLogo }
