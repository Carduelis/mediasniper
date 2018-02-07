import "./styles/style.less";
import $ from "jquery";
import "fullpage.js/dist/jquery.fullPage.js";
const rootElement = document.getElementById("root");

$(document).ready(function() {
	$("#fullpage").fullpage();
	$(".screen-card").each(function() {
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
});
