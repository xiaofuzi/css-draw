import {
	Element
} from './index.js';

const defaultStyle = {
	color: '#000000',
	bgColor: '#ffffff'
};

let graph = {};
window.graph = graph;

graph.line = function (w, h, color, style) {
	let _line = new Element();
	_line.size(w, 0);
	_line.style({
		borderTopColor: color || defaultStyle.color,
		borderTopWidth: h + _line.$unit,
		borderTopStyle: style || 'solid'
	})

	return _line;
};

graph.circle = function (r, color) {
	let _circle = this.line(r, r, color);
	_circle.style({
		borderRadius: '50%'
	});

	return _circle;
}

graph.halfCircle = function (r, color) {
	let _circle = this.line(r, r/2, color);
	_circle.style({
		borderTopLeftRadius: r/2 + _circle.$unit,
		borderTopRightRadius: r/2 + _circle.$unit
	});

	return _circle;
}

graph.circleBox = function (r1, r2, color1, color2) {
	let _circleBox = this.rect(r2, r2, color2);
		_circleBox.radius('50%');

		color1 = color1 || defaultStyle.color;
		_circleBox.border(r1 + _circleBox.$unit + ' solid ' + color1);

	return _circleBox;
}

graph.halfCircleBox = function (r1, r2, color1, color2) {
	let _circleBox = this.rect(r2, r2/2, color2);
		_circleBox.style({
			borderTopLeftRadius: (r2 + r1) + _circleBox.$unit,
			borderTopRightRadius: (r2 + r1) + _circleBox.$unit
		});

		color1 = color1 || defaultStyle.color;
		_circleBox.style({
			border: r1 + _circleBox.$unit + ' solid ' + color1,
			borderBottomWidth: 0
		});

	return _circleBox;
}

graph.rect = function (w, h, color) {
	let _rect = new Element();
	_rect.size(w, h)
		.style({
			backgroundColor: color || defaultStyle.bgColor
		})
		.border(1);

	return _rect;
}

graph.trangle = function (bottom = 1, left = 1, right = 1, color) {
	let _trangle = new Element();
	color = color || defaultStyle.color;
	_trangle.style({
		borderWidth: 0,
		borderBottom: bottom + _trangle.$unit + ' solid ' + color,
		borderLeft: left + _trangle.$unit + ' solid transparent',
		borderRight: right + _trangle.$unit + ' solid transparent'
	});

	// border color inherit flag
	_trangle.name = 'trangle';
	return _trangle;
}

export default graph;