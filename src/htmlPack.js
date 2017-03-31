/**
 * css properties
 */
const cssProps = [
	'position',
	'top',
	'left',
	'right',
	'bottom',
	'padding',
	'margin',
	'border',
	'borderRadius',
	'display',
	'color',
	'backgroundColor',
	'width',
	'height'
];

function parse (selector) {
	let el = document.querySelector(selector);
	_tranverse(el);
	console.log(el.id = '', el.className='', el);
	document.body.appendChild(el);
	return el.outerHTML;
}

function _elProcess (el) {
	cssProps.forEach((prop) => {
		let value = getComputedStyle(el)[prop];
		if (value !== undefined) {
			el.style[prop] = value;
		} else {
			console.warn('getComputedStyle is not support ' + prop);
		}
	})
}

function _tranverse (el) {
		console.log(el.children);
	if (el.children.length) {
		_elProcess(el);
		[].forEach.call(el.children, (child) => {
			_elProcess(child)
		})
	}
}

parse('#app-icon');