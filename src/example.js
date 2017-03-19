import Drawer from './index.js';

let cssDraw = Drawer();
if (window) {
	window['cssDraw'] = cssDraw;
}

cssDraw.extend('circle', function (r) {
	let circle = new this.Element({
		borderRadius: '50%'
	});
	circle.size(r, r);

	return circle;
});

cssDraw.extend('rect', function (w, h) {
	let rect = new this.Element();
	rect.size(w, h);

	return rect;
});

cssDraw.extend('trangle', function (bottom, left, right, deg, color) {
	let trangle = new this.Element();
		color = color || '#dddddd';
	trangle.style({
		borderWidth: 0,
		borderBottom: bottom + trangle.$unit + ' solid ' + color,
		borderLeft: left + trangle.$unit + ' solid transparent',
		borderRight: right + trangle.$unit + ' solid transparent',
		transform: "rotate(" + deg + "deg)"
	});
	return trangle;
});

cssDraw.extend('leftArrow', function (size, color) {
	let arrow = new this.Graph();
		color = color || '#000000';

		arrow.size(size*2, size*2);
	let trangle = this.trangle(size, size, size, -90, color);
		trangle.style({
			top: (size/2) + trangle.$unit,
			left: -(size/2) + trangle.$unit
		});

	let rect = this.rect(size, size);
		rect.style({
			background: color,
			top: size - size/2 + rect.$unit,
			left: size + rect.$unit
		});

	arrow.use(trangle);
	arrow.use(rect);

	return arrow;
});

cssDraw.extend('rightArrow', function (size, color) {
	let arrow = this.leftArrow(size, color);
	arrow.style({
		transform: 'rotate(180deg)'
	});

	return arrow;
});


cssDraw.extend('plus', function (size, color) {
	let plus = new this.Graph();
		plus.size(1, 1);

	color = color || '#000000';
	let rect01 = this.rect(size, size/3)
		.style({
			background: color
		});

	let rect02 = this.rect(size, size/3)
		.style({
			background: color,
			transform: 'rotate(90deg)'
		});

	plus.use(rect01);
	plus.use(rect02);

	return plus;
});

cssDraw.extend('halfCircle', function (r, w, color) {
	let halfCircle = new this.Graph()
		.size(w, r);

	color = color || '#000000';
	let unit = halfCircle.$unit;
	halfCircle.bgColor(color)
		.style({
			borderTopLeftRadius: r + unit,
			borderBottomLeftRadius: r + unit
		});
	console.log(halfCircle);
	return halfCircle;
})

cssDraw.extend('heart', function (size, color) {
	let heart = new this.Graph()
		.size(size, size);

	let heartWrap = new this.Graph().size(size, size);
	color = color || '#000000';
	let unit = heart.$unit;
	let g01 = this.halfCircle(1*size, (8/5)*size)
		.style({
			transform: 'rotate(45deg)'
		});
	let g02 = this.halfCircle(1*size, (8/5)*size)
		.style({
			left: size*(2/5) + unit,
			transform: 'rotate(135deg)'
		});

	heartWrap.use(g01);
	heartWrap.use(g02);
	heartWrap.style({
		transform: 'scale(0.6, 0.6)'
	});

	heart.use(heartWrap);
	return heart;
})
