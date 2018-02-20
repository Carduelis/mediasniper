import $ from "jquery";
import { closeMenu, setColors, UI } from "../actions";
import { slides } from "../data";

const setMenuAs = ({ opened, slided }) => {
	const ui = new UI();
	function log() {
		let log = "";
		if (typeof opened !== "undefined") {
			log += `opened: ${opened}; `;
		}
		if (typeof slided !== "undefined") {
			log += `slided: ${slided}; `;
		}
		return log;
	}
	console.log(opened, slided);
	console.warn(log());
	if (slided === true) {
		ui.get("menuButton").attr("data-state", "arrow");
		ui.get("menu").addClass("slided");
		setColors({ header: "black" });
		ui.get("logo").addClass("fadeout");

		ui.get("projectPage").addClass("opened");
	}

	if (slided === false) {
		ui.get("header").fadeIn();
		ui.get("menuButton").attr("data-state", "close");
		ui.get("menu").removeClass("slided");
		ui.get("logo").removeClass("fadeout");

		ui.get("projectPage").removeClass("opened");
	}
	if (opened === false) {
		if ($.fn.fullpage.setAllowScrolling) {
			console.log("allow scrolling");
			$.fn.fullpage.setAllowScrolling(true);
		} else {
			console.log("could not allow scrolling");
		}
		ui.get("menu").removeClass("opened");
		ui.get("menuButton").removeAttr("data-state");
		let color = "white";
		if (window.location.hash.match("slide")) {
			const slideAnchor = window.location.hash.replace("#", "");
			color = slides.find(slide => slide.anchor === slideAnchor).color;
			console.log(color);
		}
		setColors(["header", "socio", "sideNav"], color);
	}
	if (opened === true) {
		if ($.fn.fullpage.setAllowScrolling) {
			console.log("disallow scrolling");
			$.fn.fullpage.setAllowScrolling(false);
		} else {
			console.log("could not disallow scrolling");
		}
		ui.get("menu").addClass("opened");
		ui.get("menuButton").attr("data-state", "close");
		ui.get("header").attr("data-color", "white");
	}
};

export { setMenuAs };
