import Drawer from './index.js';

let cssDraw = Drawer();
if (window) {
	window['cssDraw'] = cssDraw;
}

const defaultStyle = {
	color: '#000000'
};

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
	let unit = plus.$unit;
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

	plus.transform({
		transform: 'translateY(' + size/3 + unit + ')'
	})

	let wrap = new this.Graph().size(1, 1).use(plus);

	return wrap;
});

cssDraw.extend('minus', function (size, color) {
	let minus = new this.Graph();
		minus.size(size, size);
	let unit = minus.$unit;
	color = color || '#000000';
	let rect01 = this.rect(size, size/3)
		.style({
			background: color
		});

	minus.use(rect01);

	minus.transform({
		transform: 'translateY(' + size/3 + unit + ')'
	})

	let wrap = new this.Graph().size(1, 1).use(minus);

	return wrap;
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

	heartWrap.transform({
		scale: 'scale(0.6, 0.6)',
		translateX: 'translateX(' + -size * (2/5) + unit + ')'
	});

	heart.use(heartWrap);
	return heart;
})

cssDraw.extend('asterisk', function (size = 14, color) {
	let asterisk = new this.Graph().size(1, 1)
		.style({
			fontSize: size + 'px'
		});

	color = color || defaultStyle.color;
	let unit = asterisk.$unit;
	let rects = [0, 1, 2, 3].map((item) => {
		let rect = this.rect(1, 1/5)
			.bgColor(color)
			.rotate(item*45);
		return rect;
	});

	let wrap = new this.Graph().size(1, 1);
		wrap.transform({
				translateY: 'translateY(' + 0.4 + unit + ')'
			})
	wrap.use(rects);
	asterisk.use(wrap);

	return asterisk;
})