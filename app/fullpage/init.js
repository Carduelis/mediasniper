import $ from "jquery";
import  "fullpage.js/dist/jquery.fullPage.js";
import { setColors, screenSplashes, UI } from "../actions";
import { reRunAnimationButton, reanimate } from "../animater";
import { slides } from "../data";



const SUB_SLIDE_SEPARATOR = "-";
export default function() {
	window.isFirstLoad = true;
	const ui = new UI();
	ui.get('fp').fullpage({
		anchors: slides.map(slide => slide.anchor),
		// fixedElements: '.fixed',
		menu: "#uniqMenu",
		onLeave(index, nextIndex, direction) {
			console.log(`${direction} from ${index} to ${nextIndex}`);
			console.log();
			// const slide = getSlideByIndex(index);
			const nextSlide = getSlideByIndex(nextIndex);
			// $('.menu').attr('data-color', nextSlide.color);
			setColors(["sideNav", "header", "socio"], nextSlide.color);

			reRunAnimationButton(getSlideEl(nextSlide).find(".button"));
			reanimate($(".animated"));
			if (!isASubSlide(nextSlide)) {
				$('.media-nav [data-menuanchor="slide04-1"]').removeClass("active");
				$(".slide04").fadeOut(100);
			}
			window.isFirstLoad = false;
		},
		afterLoad(anchorLink, index) {
			const slide = getSlideByIndex(index);
			console.log(anchorLink, index, slide);
			const $slide = getSlideEl(slide);
			if (window.isFirstLoad) {
				reRunAnimationButton(getSlideEl(slide).find(".button"));
				reanimate($(".animated"));
				window.isFirstLoad = false;
			}
			setColors(["sideNav", "header", "socio"], slide.color);
			screenSplashes($slide);
			if (isASubSlide(slide)) {
				$('.media-nav [data-menuanchor="slide04-1"]').addClass("active");
				$(".slide04").fadeIn(150);
			} else {
				console.log('not a subslide');
			}
		},
		afterRender() {
			console.log("render");
		},
		afterResize() {
			console.log("resize");
		},
		afterResponsive() {},
		// afterSlideLoad(anchorLink, index, slideAnchor, slideIndex) {
		// 	// console.log(...rest);
		// 	// screenSplashes($())
		// },
		onSlideLeave(anchorLink, index, slideIndex, direction, nextSlideIndex) {
			// wtf
			console.log(anchorLink, index, slideIndex, direction, nextSlideIndex);
		}
	});
}

const getSlideByIndex = index => slides[index - 1];
const getSlideEl = slide => {
	const id = slide.anchor.replace("slide", "");
	return $(`[data-slide="${id}"]`);
};

const isASubSlide = slide => slide.anchor.includes(SUB_SLIDE_SEPARATOR);
// const getSubSlideIndex = slide => {
// 	if (isASubSlide(slide)) {
// 		return slide.anchor.split(SUB_SLIDE_SEPARATOR)[1];
// 	}
// 	return false;
// };
