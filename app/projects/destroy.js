import $ from 'jquery';
import { UI, setMenuAs } from '../actions';

export default function () {
	const ui = new UI();
	ui.get('menuButton').off();
}
