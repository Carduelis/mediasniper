import { UI } from '../actions';

export default function() {
	const ui = new UI();
	return ui.get('fp').hasClass('mobile-enabled');
}
