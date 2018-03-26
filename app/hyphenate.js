/**
 * Простановка &shy-дефисов в русском тексте
 * @module
 */
module.exports = function(text) {
	if (text) {
		const RusA = '[абвгдеёжзийклмнопрстуфхцчшщъыьэюя]';
		const RusV = '[аеёиоуыэюя]';
		const RusN = '[бвгджзклмнпрстфхцчшщ]';
		const RusX = '[йъь]';
		// const Hyphen = '\xAD';
		const Hyphen = '\u00AD';

		const re1 = new RegExp('(' + RusX + ')(' + RusA + RusA + ')', 'ig');
		const re2 = new RegExp('(' + RusV + ')(' + RusV + RusA + ')', 'ig');
		const re3 = new RegExp('(' + RusV + RusN + ')(' + RusN + RusV + ')', 'ig');
		const re4 = new RegExp('(' + RusN + RusV + ')(' + RusN + RusV + ')', 'ig');
		const re5 = new RegExp(
			'(' + RusV + RusN + ')(' + RusN + RusN + RusV + ')',
			'ig'
		);
		const re6 = new RegExp(
			'(' + RusV + RusN + RusN + ')(' + RusN + RusN + RusV + ')',
			'ig'
		);

		text = text.replace(re1, '$1' + Hyphen + '$2');
		text = text.replace(re2, '$1' + Hyphen + '$2');
		text = text.replace(re3, '$1' + Hyphen + '$2');
		text = text.replace(re4, '$1' + Hyphen + '$2');
		text = text.replace(re5, '$1' + Hyphen + '$2');
		text = text.replace(re6, '$1' + Hyphen + '$2');
		return text;
	} else {
		return 'Безымянный';
	}
};
