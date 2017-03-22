import Drawer from './index.js';
import primitive from './primitive.js';

let cssDraw = Drawer();
if (window) {
	window['cssDraw'] = cssDraw;
}

const defaultStyle = {
	color: '#000000',
	bgColor: '#ffffff'
};

cssDraw.extend('empty', function (fontSize = '14px') {
	return new this.Graph({
		fontSize: fontSize,
		background: '#ffffff'
	})
	.setUnit('em')
	.size(1, 1);
})

cssDraw.extend('circle', function (r = 1) {
	return this.empty().use(primitive.circle(r));
});

cssDraw.extend('rect', function (w = 1, h = 1) {
	let rect = primitive.line(w, h);
	rect.style({
		top: '50%',
		marginTop: -(Number(h)/2) + rect.$unit
	});

	return this.empty().use(rect);
});

cssDraw.extend('trangle', function (bottom = 1, left = 1, right = 1) {
	let trangle = primitive.trangle(bottom, left, right);

	return this.empty().use(trangle.transform({
		scale: 'scale(0.5)',
		translateX: 'translateX(-50%)'
	}));
});

cssDraw.extend('leftArrow', function (size, color) {
	let arrow = new this.Graph();
		color = color || defaultStyle.color;

		arrow.size(2*size, size);
	let trangle = primitive.trangle(size/2, size/2, size/2);
		trangle.transform({
			rotate: 'rotate(-90deg)',
			translateX: 'translateX(' + String(-size/4) + trangle.$unit + ')'
		})
	let unit = trangle.$unit;
	let line = primitive.line(size, size/2, color)
		.style({
			top: size/4 + unit,
			left: size/2 + unit
		});

	arrow.use(trangle);
	arrow.use(line);

	return this.empty().size(2, 1).use(arrow);
});

cssDraw.extend('rightArrow', function (size, color) {
	let arrow = this.leftArrow(size, color);
	arrow.style({
		transform: 'rotate(180deg)'
	});

	return this.empty().size(2, 1).use(arrow);
});


cssDraw.extend('plus', function () {
	let plus = new this.Graph();
		plus.size(1, 1);
	let rect01 = primitive.line(1, 0.3);

	let rect02 = primitive.line(1, 0.3)
					.rotate(90)
	plus.use(rect01);
	plus.use(rect02);

	plus.transform({
		translateY: 'translateY(0.35em)'
	})

	let wrap = this.empty().use(plus);
	return wrap;
});

cssDraw.extend('minus', function (size, color) {
	let minus = new this.Graph().size(1, 1);
		let line = primitive.line(1, 0.3);

		minus.use(line);
		minus.transform({
			translateY: 'translateY(0.35em)'
		});
	return minus;
});

cssDraw.extend('heart', function () {
	let heart = new this.Graph()
		.size(1, 1);

	let h01 = primitive.halfCircleBox(1, 14)
					.rotate(-45);
	let h02 = primitive.halfCircleBox(1, 14)
				.rotate(45)
				.style({
					left: '15.5em'
				});

	let line01 = primitive.line(15, 1)
					.rotate(45)
					.style({
						top: '16.8em',
						left: '3.2em'
					});
	let line02 = primitive.line(15.5, 1)
					.rotate(-45)
					.style({
						top: '16.5em',
						left: '13.2em'
					});				

	heart.use([h01, h02, line01, line02]);
	heart.transform({
		scale: 'scale(0.05)'
	});
	heart.style({
		top: '-0.5em',
		left: '-0.5em'
	})

	return this.empty().size(1, 1).use(heart);
});

cssDraw.extend('solidHeart', function () {
	let _g = new this.Graph().size(1, 1);

	let circle01 = primitive.circle(3);
	let circle02 = primitive.circle(3)
					.style({
						left: '2em'
					});

	let line01 = primitive.line(3, 3)
					.rotate(-45)
					.style({
						top: '1em',
						left: '1em'
					});
	let line02 = primitive.line(3, 3)
					.rotate(45)
					.style({
						top: '1em',
						left: '1em'
					});
	_g.transform({
		scale: 'scale(0.26)'
	})
	.style({
		top: '-0.45em',
		left: '-0.5em'
	})

	_g.use([circle01, circle02, line01, line02]);
			
	return this.empty().use(_g);
});

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
