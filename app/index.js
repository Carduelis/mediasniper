import $ from 'jquery';
import './styles/style.less';
import 'fullpage.js/dist/jquery.fullPage.js';

import { slides } from './data';

const SUB_SLIDE_SEPARATOR = '-';

const selector = str => `[data-selector="${str}"]`;
const getSlideByIndex = index => slides[index - 1];
const getSlideEl = slide => {
	const id = slide.anchor.replace('slide', '');
	return $(`[data-slide="${id}"]`);
};

const isASubSlide = slide => slide.anchor.includes(SUB_SLIDE_SEPARATOR);
const getSubSlideIndex = slide => {
	if (isASubSlide(slide)) {
		return slide.anchor.split(SUB_SLIDE_SEPARATOR)[1];
	}
	return false;
};
let isFirstLoad = true;
$(document).ready(() => {
	$('.preloader').fadeOut();
	$('.header-toggle').on('click', () => {
		alert('Under construction');
	});
	$('#fullpage').fullpage({
		anchors: slides.map(slide => slide.anchor),
		// fixedElements: '.fixed',
		menu: '#uniqMenu',
		onLeave(index, nextIndex, direction) {
			console.log(`${direction} from ${index} to ${nextIndex}`);
			const slide = getSlideByIndex(index);
			const nextSlide = getSlideByIndex(nextIndex);
			// $('.menu').attr('data-color', nextSlide.color);

			$('.menu, .fixed-header, .socio-networks').attr('data-color', nextSlide.color);
			reRunAnimationButton(getSlideEl(nextSlide).find('.button'));
			if (!isASubSlide(nextSlide)) {
				$('.media-nav [data-menuanchor="slide04-1"]').removeClass('active');
				$('.slide04').fadeOut(100);
			}
			isFirstLoad = false;
		},
		afterLoad(anchorLink, index) {
			const slide = getSlideByIndex(index);
			console.log(anchorLink, index, slide);
			const $slide = getSlideEl(slide);
			if (isFirstLoad) {
				reRunAnimationButton(getSlideEl(slide).find('.button'));
				isFirstLoad = false;
			}
			$('.menu, .fixed-header, .socio-networks').attr('data-color', slide.color);
			aliveScreenSplashes($slide);
			if (isASubSlide(slide)) {
				$('.media-nav [data-menuanchor="slide04-1"]').addClass('active');
				$('.slide04').fadeIn(150);
			} else {
			}
		},
		afterRender() {
			console.log('render');
		},
		afterResize() {
			console.log('resize');
		},
		afterResponsive() {},
		afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {
			// console.log(...rest);
			// aliveScreenSplashes($())
		},
		onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			// wtf
			console.log(anchorLink, index, slideIndex, direction, nextSlideIndex);
		}
	});
});

function reRunAnimationButton($btn) {
	$btn.find('span').css('opacity', 0);

	setTimeout(() => {
		setTimeout(() => {
			$btn.find('span').removeAttr('style');
		}, 100);
		reanimate($btn);
	}, 300);
}

function reanimate($el) {
	$el.removeClass('animated');
	setTimeout(() => $el.addClass('animated'), 10);
}

function aliveScreenSplashes($el) {
	// OPTIMIZE: we need to prevent unnesessary calculations of width/height,
	// and call animations via adding class of "animated"
	// instead of removing and adding styles
	const $screenCard = $el.find('.screen-card');
	$screenCard.find('span').css('transform', 'scale(0)');
	$screenCard.each(function (i) {
		const $card = $(this);
		// console.log($card);
		const SCREEN_WIDTH = 1024; // window.innerWidth;
		const SCREEN_HEIGHT = 768; // window.innerHeight;
		const outerCss = {
			'justify-content': $card.data('x'),
			'align-items': $card.data('y')
		};
		const innerCss = {
			transform: 'scale(1)',
			width: $card.data('width') / SCREEN_WIDTH * $card.width(),
			height: $card.data('height') / SCREEN_HEIGHT * $card.height()
		};
		$card.css(outerCss);
		setTimeout(() => {
			$card.find('span').css(innerCss);
		}, 100 + i * 50);
	});
}
