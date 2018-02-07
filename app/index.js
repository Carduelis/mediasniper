import "./styles/style.less";
import $ from 'jquery';
import 'fullpage.js/dist/jquery.fullPage.js';
const rootElement = document.getElementById("root");
console.log('kek');

$(document).ready(function() {
	$('#fullpage').fullpage();
})
