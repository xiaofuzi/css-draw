import Drawer from './index.js';

let cssDraw = Drawer();
if (window) {
	window['cssDraw'] = cssDraw;
}

const defaultStyle = {
	color: '#000000'
};

function line (w, h, color) {
	let line = new this.Graph();
	let color = defaultStyle.color || '#000000';
	line.size(w, 0);
	line.style({
		borderTopWidth: h + line.$unit,
		borderTopStyle: 'solid',
		borderTopColor: color
	})

	return line;
}

cssDraw.extend('empty', function (fontSize = '14px') {
	return new this.Graph({
		fontSize: fontSize,
		background: '#ffffff'
	})
	.setUnit('em')
	.size(1, 1);
})

cssDraw.extend('line', function (w, h) {
	

	return this.empty().use(line);
})

cssDraw.extend('circle', function (r) {
	return this.empty().use(this.line(r, r).style({borderRadius: '50%'}));
});

cssDraw.extend('rect', function (w, h) {
	let rect = new this.Graph();
	rect.size(w, h);

	return rect;
});

cssDraw.extend('trangle', function (bottom, left, right) {
	let trangle = new this.Graph();
		trangle.name = 'trangle';
		let color = defaultStyle.color || '#dddddd';
	trangle.style({
		borderWidth: 0,
		borderBottom: bottom + trangle.$unit + ' solid ' + color,
		borderLeft: left + trangle.$unit + ' solid transparent',
		borderRight: right + trangle.$unit + ' solid transparent'
	});

	return this.empty().use(trangle.transform({
		scale: 'scale(0.5)',
		translateX: 'translateX(-1' + trangle.$unit + ')'
	}));
});

cssDraw.extend('leftArrow', function (size, color) {
	let arrow = new this.Graph();
		color = color || '#000000';

		arrow.size(2, 1);
	let trangle = this.trangle(size, size, size);
		trangle.transform({
			rotate: 'rotate(-90deg)'
		})

	let line = this.line(size, size/2, color);
		line.style({
			top: -1 + line.$unit,
			left: -0.5 + line.$unit
		});

	arrow.use(trangle);
	arrow.use(line);

	arrow.transform({
		//scale: 'scale(0.5)',
		//translate: 'translate(-50%, -50%)'
	})

	return this.empty().use(arrow);
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
