import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
import debounce from 'debounce';
import init from './init';
import destroy from './destroy';
import isEnabled from './isEnabled';
import aliveScreenSplashes from '../fullpage/screenSplashes';
import { reRunAnimationButton, reanimate } from '../animater';
import { UI, setMenuAs, setColors } from '../actions';
import { slides } from '../data';

export default function(route) {
	console.log(route);
	const ui = new UI();
	ui.get('menuButton').on('click', function() {
		const $btn = $(this);
		if ($btn.attr('data-state') === 'close') {
			setMenuAs({opened: false});
		} else {
			setMenuAs({opened: true});
		}
	});
	if (isEnabled()) {
		console.log('fullPageSlider has already been initialized');
	} else {
		if ($(window).width() > 800) {
			init();
			$('#fullpage').removeClass('mobile');
		} else {
			$('#fullpage').addClass('mobile');

			reRunAnimationButton($('[data-slide="01"]').find('.button'));
			// HACK: need to indicate while a slide changes for another one
			setTimeout(function(){
				reRunAnimationButton($('.section').find('.button'));
				aliveScreenSplashes($('.section'));
			}, 500);

			$(window).on('scroll', debounce(function(e) {
				$('.section').each(function() {
					const socioHeight = ui.get('socio').height();
					const headerHeight = ui.get('header').height();
					const sectionHeight = $(this).height();
					const sectionOffsetTop = $(this).offset().top;
					const sectionOffsetBottom = sectionHeight + sectionOffsetTop;
					const slideId = $(this).children().attr('data-slide');
					const $slide = $(`[data-slide="${slideId}"]`);
					const windowScrollBottom = window.scrollY + window.outerHeight;
					const slide = slides.find(slide => slide.anchor.match(slideId));

					if (sectionOffsetTop < window.scrollY && sectionOffsetBottom > window.scrollY) {
						setColors(['sideNav'], slide.color);
						ui.get('sideNav').find('.item').each(function() {
							const $li = $(this);
							$li.removeClass('active')
							const primarySlideId = slideId.split('-')[0];
							console.log(primarySlideId)
							if ($li.children().attr('data-menuanchor').match(slideId)) {
								$li.addClass('active');
							}
						});
					}
					if (windowScrollBottom > socioHeight + sectionOffsetTop && windowScrollBottom < sectionOffsetBottom) {
						setColors(['socio'], slide.color);
					}

					if (window.scrollY > sectionOffsetTop - headerHeight/2 && window.scrollY + headerHeight/2 < sectionOffsetBottom) {
						setColors(['header'], slide.color);
					}
				})
			}, 50));
			destroy();
		}
	}

	$(window).on('resize', function() {
		if ($(window).width() > 800) {
			init();
			$('#fullpage').removeClass('mobile');
		} else {
			$('#fullpage').addClass('mobile');
			destroy();
		}
	});
}
