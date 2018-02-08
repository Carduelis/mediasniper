import "./styles/style.less";
import $ from "jquery";
import "fullpage.js/dist/jquery.fullPage.js";
const rootElement = document.getElementById("root");
import { slides } from "./data";

const selector = str => `[data-selector="${str}"]`;
const getSlideByIndex = index => slides[index - 1];
const getSlideEl = slide => $(`[data-slide="${slide.titleId}"]`);

$(document).ready(function() {
	$("#fullpage").fullpage({
		anchors: slides.map(slide => slide.anchor),
		menu: selector("menu"),
		onLeave: function(index, nextIndex, direction) {
			console.log(`${direction} from ${index} to ${nextIndex}`);
			const slide = getSlideByIndex(index);
			const nextSlide = getSlideByIndex(nextIndex);
			$(".menu").attr("data-color", nextSlide.color);

			reRunAnimationButton(getSlideEl(nextSlide).find(".button"));
		},
		afterLoad: function(anchorLink, index) {
			const slide = getSlideByIndex(index);
			console.log(anchorLink, index, slide);
			const $slide = getSlideEl(slide);
			$(".menu").attr("data-color", slide.color);
			aliveScreenSplashes($slide);
		},
		afterRender: function() {
			console.log(arguments);
		},
		afterResize: function() {},
		afterResponsive: function(isResponsive) {},
		afterSlideLoad: function(anchorLink, index, slideAnchor, slideIndex) {
			console.log(arguments);
			// aliveScreenSplashes($())
		},
		onSlideLeave: function(
			anchorLink,
			index,
			slideIndex,
			direction,
			nextSlideIndex
		) {
			// wtf
			console.log(anchorLink, index, slideIndex, direction, nextSlideIndex);
		}
	});
});

function reRunAnimationButton($btn) {
	$btn.find("span").css("opacity", 0);

	setTimeout(function() {
		setTimeout(function() {
			$btn.find("span").removeAttr("style");
		}, 100);
		reanimate($btn);
	}, 300);
}

function reanimate($el) {
	$el.removeClass("animated");
	setTimeout(() => $el.addClass("animated"), 10);
}

function aliveScreenSplashes($el) {
	$el.find(".screen-card").each(function() {
		const $card = $(this);
		const SCREEN_WIDTH = 1024;
		const SCREEN_HEIGHT = 768;
		const css = {
			width: $card.data("width") / SCREEN_WIDTH * $card.width(),
			height: $card.data("height") / SCREEN_HEIGHT * $card.height()
		};
		$card.css({
			"justify-content": $card.data("x"),
			"align-items": $card.data("y")
		});
		$card.find("span").css(css);
	});
}
