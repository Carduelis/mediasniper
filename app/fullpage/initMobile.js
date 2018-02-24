import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
import debounce from 'debounce';
import { setColors, screenSplashes, UI } from '../actions';
import { reRunAnimationButton, reanimate } from '../animater';
import { slides } from '../data';

export default function() {
	const ui = new UI();
	ui.get('fp').addClass('mobile');
	const { hash } = window.location;
	const slideId = hash.replace('#slide', '');
	console.warn(slideId);
	if (slides.find(slide => slide.anchor.match(slideId))) {
		const scrollTop = ui.get('slide', slideId).offset().top;
		$('html, body').animate({ scrollTop }, 200);
	}
	reRunAnimationButton(ui.get('slide', '01').find('.button'));
	// HACK: need to indicate while a slide changes for another one
	setTimeout(() => {
		reRunAnimationButton($('.section').find('.button'));
		screenSplashes($('.section'));
	}, 500);

	function updateSection() {
		const socioHeight = ui.get('socio').height();
		const headerHeight = ui.get('header').height();
		const sectionHeight = $(this).height();
		const sectionOffsetTop = $(this).offset().top;
		const sectionOffsetBottom = sectionHeight + sectionOffsetTop;
		const slideId = $(this).children().attr('data-slide');
		const $slide = ui.get('slide', slideId);
		const windowScrollBottom = window.scrollY + window.outerHeight;
		const slide = slides.find(slide => slide.anchor.match(slideId));

		function updateSideNavigationIndication() {
			if (
				sectionOffsetTop < window.scrollY &&
				sectionOffsetBottom > window.scrollY
			) {
				setColors(['sideNav'], slide.color);
				ui.get('sideNav').find('.item').each(function() {
					const $li = $(this);
					$li.removeClass('active');
					const primarySlideId = slideId.split('-')[0];
					console.log(primarySlideId);
					if ($li.children().attr('data-menuanchor').match(slideId)) {
						$li.addClass('active');
					}
				});
			}
		}

		if (
			windowScrollBottom > socioHeight + sectionOffsetTop &&
			windowScrollBottom < sectionOffsetBottom
		) {
			setColors(['socio'], slide.color);
		}

		if (
			window.scrollY > sectionOffsetTop - headerHeight / 2 &&
			window.scrollY + headerHeight / 2 < sectionOffsetBottom
		) {
			setColors(['header'], slide.color);
		}
	}

	const onScroll = debounce(e => {
		$('.section').each(updateSection);
	}, 50);
	$(window).on('scroll', onScroll);
}
