import $ from 'jquery';
import init from './init';
import initMobile from './initMobile';
import destroy from './destroy';
import destroyMobile from './destroyMobile';
import isFullpageEnabled from './isFullpageEnabled';
import isMobileEnabled from './isMobileEnabled';

export default function(breakpoint = 800) {
	if ($(window).width() > breakpoint) {
		if (isFullpageEnabled()) {
			console.log('fullPageSlider has already been initialized');
		} else {
			destroyMobile();
			init();
		}
	} else {
		if (isMobileEnabled()) {
			console.log('isMobileEnabled === true');
		} else {
			initMobile();
			destroy();
		}
	}
}
