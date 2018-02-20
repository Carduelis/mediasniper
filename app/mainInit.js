import $ from "jQuery";
import { toggleLogo, UI, setMenuAs } from "./actions";

export default function(path) {
	const ui = new UI();
	ui.get("menu").find("a").on("click", function() {
		if ($(this).attr("href").match("projects")) {
			setMenuAs({ slided: true });
		} else {
			setMenuAs({ opened: false });
		}
	});

	ui.get("videoButton").on("click", function() {
		ui.get("videoFixed").addClass("opened");
		ui.get("videoContainer").html(`
			<iframe id="ytplayer" type="text/html" width="640" height="360"
			src="https://www.youtube.com/embed/7Gskpudh0oE?autoplay=1&origin=http://example.com"
			frameborder="0"></iframe>
		`);
	});
	ui.get("videoCloseButton").on("click", function() {
		ui.get("videoContainer").empty();
		ui.get("videoFixed").removeClass("opened");
	});
}
