import $ from 'jquery';
import debounce from 'debounce';
import { setColors, screenSplashes, UI } from '../actions';
import { reRunAnimationButton } from '../animater';
import { slides } from '../data';

export default function() {
	const ui = new UI();
	ui.get('fp').addClass('mobile');
	$('a[href^="#slide"]').on('click', function(e) {
		e.preventDefault();
		const slideId = $(this).attr('href').replace('#slide', '');
		const scrollTop = $(`[data-slide="${slideId}"]`).offset().top;
		$('html, body').animate({ scrollTop }, 200);
		return false;
	});
	const { hash } = window.location;
	const slideId = hash.replace('#slide', '');
	console.log(`Current slide is ${slideId}`);
	if (slides.find(slide => slide.anchor.match(slideId))) {
		const scrollTop = ui.get('slide', slideId).offset().top;
		$('html, body').animate({ scrollTop }, 200);
	}
	reRunAnimationButton(ui.get('slide', '01').find('.button'));
	// HACK: need to indicate while a slide changes for another one
	setTimeout(() => {
		screenSplashes($('.section'));
	}, 500);



	function updateEachSection() {
		const socioHeight = ui.get('socio').height();
		const headerHeight = ui.get('header').height();
		const sectionHeight = $(this).height();
		const sectionOffsetTop = $(this).offset().top;
		const sectionOffsetBottom = sectionHeight + sectionOffsetTop;
		const slideId = $(this).children().attr('data-slide');
		// const $slide = ui.get('slide', slideId);

		const windowScrollBottom = window.scrollY + window.outerHeight;
		const slide = slides.find(slide => slide.anchor.match(slideId));
		if (slideId === '01') {
			if (window.scrollY > sectionHeight) {
				ui.get('header').attr('data-logo', 'hide');
			} else {
				ui.get('header').removeAttr('data-logo');
			}
		}

		// function updateSideNavigationIndication() {
		// 	if (
		// 		sectionOffsetTop < window.scrollY &&
		// 		sectionOffsetBottom > window.scrollY
		// 	) {
		// 		setColors(['sideNav'], slide.color);
		// 		ui.get('sideNav').find('.item').each(function() {
		// 			const $li = $(this);
		// 			$li.removeClass('active');
		// 			const primarySlideId = slideId.split('-')[0];
		// 			console.log(primarySlideId);
		// 			if ($li.children().attr('data-menuanchor').match(slideId)) {
		// 				$li.addClass('active');
		// 			}
		// 		});
		// 	}
		// }
		// if (slideId == '02' || slideId == '03') {
		// 	if (window.scrollY > sectionOffsetTop) {
		// 		// $slide.find('.flex-scroll').animate({scrollLeft: 20}, 75);
		// 		// setTimeout(function() {
		// 		// 	$slide.find('.flex-scroll').animate({scrollLeft: 0}, 75);
		// 		// }, 75);
		// 	}
		// }
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

	const onScroll = debounce(() => {
		$('.section').each(updateEachSection);
	}, 150);
	$(window).on('scroll', onScroll);
}
