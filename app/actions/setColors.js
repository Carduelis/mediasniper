import $ from 'jquery';
import { UI } from '../actions';

const setColors = function(params, color) {
	const ui = new UI();
	if (color) {
		if (params instanceof Array) {
			params.forEach(item => {
				ui.get(item).attr('data-color', color);
			})
		} else {
			throw new TypeError('params is not an array')
		}
	} else {
		Object.keys(params).forEach(key => {
			ui.get(key).attr('data-color', params[key]);
		})
	}
}

export { setColors };
