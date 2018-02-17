import $ from 'jquery';

const reanimate = $el => {
	$el.removeClass('animated');
	setTimeout(() => $el.addClass('animated'), 10);
}
const reRunAnimationButton = $btn => {
	$btn.find('span').css('opacity', 0);

	setTimeout(() => {
		setTimeout(() => {
			$btn.find('span').removeAttr('style');
		}, 100);
		reanimate($btn);
	}, 300);
}
export { reRunAnimationButton, reanimate }
