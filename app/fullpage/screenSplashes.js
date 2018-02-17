import $ from 'jquery';

export default function ($el) {
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
