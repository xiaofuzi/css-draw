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

function iconWrap (fontSize = 'inherit') {
	return new cssDraw.Graph({
		fontSize: fontSize,
		background: 'transparent',
		position: 'relative'
	})
	.setUnit('em')
	.size(1, 1);
}

cssDraw.extend('circle', function (r = 1) {
	return iconWrap().use(primitive.circle(r).center());
});

cssDraw.extend('rect', function (w = 1, h = 1) {
	let rect = primitive.line(w, h)
				.center();

	return iconWrap().use(rect);
});

cssDraw.extend('trangle', function (bottom = 1, left = 1, right = 1) {
	let trangle = primitive.trangle(bottom, left, right);

	return iconWrap().use(
		trangle
			.center()
			.transform({
				scale: 'scale(0.5)'
			})
	);
});

cssDraw.extend('leftArrow', function () {
	let arrow = new this.Graph();

		arrow.size(2, 1);
	let trangle = primitive.trangle(1/2, 1/2, 1/2);
		trangle.transform({
			rotate: 'rotate(-90deg)',
			translateX: 'translateX(' + String(-1/4) + trangle.$unit + ')'
		})
	let unit = trangle.$unit;
	let line = primitive.line(1, 1/2)
		.style({
			top: 0.25 + unit,
			left: 1/2 + unit
		});

	arrow.use(trangle);
	arrow.use(line);

	return iconWrap().size(2, 1).use(arrow.center());
});

cssDraw.extend('rightArrow', function () {
	let arrow = this.leftArrow();
	arrow.style({
		transform: 'rotate(180deg)'
	});
	arrow.x = 0;
	arrow.y = 0;

	return iconWrap().size(2, 1).use(arrow);
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
		translate: 'translate(-50%,.35em)'
	})

	let wrap = iconWrap().use(plus);
	return wrap;
});

cssDraw.extend('minus', function (size, color) {
	let minus = new this.Graph().size(1, 1);
		let line = primitive.line(1, 0.3);

		minus.use(line);
		minus.style({
			top: '50%'
		});
		minus.transform({
			translateY: 'translate(-50%, -12.5%)'
		})
	return iconWrap().use(minus);
});

cssDraw.extend('heart', function () {
	let heart = new this.Graph()
		.size(1, 1);

	let h01 = primitive.halfCircleBox(1, 14)
					.rotate(-45);
		h01.y = 5;
	let h02 = primitive.halfCircleBox(1, 14)
				.rotate(45)
				.style({
					left: '14em'
				});
		h02.y = 5;

	let line01 = primitive.line(14, 1)
					.rotate(45)
					.style({
						top: '19em',
						left: '2em'
					});
	let line02 = primitive.line(14, 1)
					.rotate(-45)
					.style({
						top: '19em',
						left: '12em'
					});				

	heart.use([h01, h02, line01, line02]);
	heart.transform({
		scale: 'scale(0.035)'
	});
	heart.style({
		top: '-0.5em',
		left: '-0.5em'
	})

	return iconWrap().use(heart);
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
		scale: 'scale(0.16)'
	})
	.style({
		top: '-0.25em',
		left: '-0.35em'
	})

	_g.use([circle01, circle02, line01, line02]);
			
	return iconWrap().use(_g);
});

cssDraw.extend('navLeft', function () {
	let _icon = new this.Graph()
			.size(1, 1)
			.style({
				background: 'transparent'
			});
	let line01 = primitive.line(1, 0.2)
					.style({
						top: '0',
						left: '0'
					});
	let line02 = primitive.line(1, 0.2)
					.rotate(90)
					.style({
						top: '0',
						left: '50%'
					})
					.transform({
						translate: 'translate(42%, 50%)'
					})
	_icon.use([line01, line02])
			.rotate(-135);
	_icon.x = '0.25em';

	return iconWrap().size(1, 1).use(_icon);
})

cssDraw.extend('navRight', function () {
	let icon = this.navLeft();
		icon.rotate(180);
		icon.x = '-0.05em';
	return iconWrap().use(icon);
})

cssDraw.extend('close', function () {
	let _icon = new this.Graph()
			.size(1, 1)
			.style({
				background: 'transparent'
			});
	let line01 = primitive.line(1, 0.2)
					.style({
						top: '0',
						left: '0'
					});
	let line02 = primitive.line(1, 0.2)
					.rotate(90);

	_icon.use([line01, line02]);

	_icon.rotate(45)
		.style({
			top: '0.25em',
			left: '-0.3em'
		})
	return iconWrap().size(1, 1).use(_icon);
})

cssDraw.extend('rectCirlle', function (rate = 1.5) {
	let icon = new this.Graph().size(1, 1);
		let circle01 = primitive.halfCircle(1)
						.style({
							top: '0.25em'
						})
						.rotate(-90);
		let r2 = 1/rate;
		let circle02 = primitive.halfCircle(r2)
							.style({
								top: 0.34 + 'em',
								left: 1.45 + 'em'
							})
							.rotate(90);

		let trap = primitive.trangle(1, (1-r2)/2, (1-r2)/2)
						.style({
							width: r2 + 'em',
							top: 0.01 + 'em',
							left: 0.74 + 'em',
							borderBottomLeftRadius: '50%',
							borderBottomRightRadius: '50%'
						})
						.rotate(90);
		icon.use([circle02, trap]);
		icon.x = -0.75;
		return iconWrap().size(1, 1).use(icon);

})

cssDraw.extend('envelope', function () {
	let x1 = 1/4;
	let x2 = 1/2;
	let circle01 = primitive.trangle(x1, x1, x1)
					.style({
						bottom: 0,
						left: x1/2 + 'em'
					});
	let circle02 = primitive.trangle(x1, x1, x1)
					.style({
						bottom: 0,
						left: x1 + x1/2 + 'em'
					});
	let circle03 = primitive.trangle(x1, x1, x1)
					.style({
						top: x1*2 + 'em',
						left: 0
					})
					.rotate(90);
	let circle04 = primitive.trangle(x1, x1, x1)
					.style({
						top: '0.5em',
						right: 0,
						left: '0.5em'
					})
					.rotate(-90);
	let circle05 = primitive.trangle(x2, x2, x2)
					.style({
						top: x1*(3/4) + 'em'
					})
					.rotate(180)
					.transform({
						scale: 'scale(0.75)'
					})
	let icon = new this.Graph().size(1, 1).use([circle01, circle02, circle03, circle04, circle05]);
		icon.transform({
			translateY: 'translateY(-0.125em)'
		});
		icon.x = '-0.005em';
	return iconWrap().size(1, 1).use(icon);
})

cssDraw.extend('pencil', function () {
	let icon = new this.Graph().size(1, 1);
	let trangle = primitive.trangle(1/4, 1/4, 1/4)
					.style({
						left: 0.075 + 'em'
					})
					.rotate(-90)
					.transform({
						scale: 'scale(0.5)'
					})

	let body = primitive.line(1/2, 1/4)
					.style({
						left: 1/2 + 'em'
					})

	let end = primitive.line(1/8, 1/4)
					.style({
						left: 1.125 + 'em'
					})

	icon.use([trangle, body, end]);

	icon.transform({
		scale: 'scale(1)'
	})
	.rotate(-45)
	.style({
		top: 0.5 + 'em',
		left: 0.125 + 'em'
	});
	return iconWrap().use(icon);
})

cssDraw.extend('glass', function () {
	let _icon = new this.Graph().size(1, 1);
	let trangle = primitive.trangle(0.5, 0.5, 0.5)
					.rotate(180);
	let line  = primitive.line(0.5, 0.3)
					.rotate(90);
		line.x = 0.25;
		line.y = 0.4;

	let line01 = primitive.line(0.75, 0.2);
		line01.x = 0.125;
		line01.y = 0.75;

	_icon.use([trangle, line, line01]);
	_icon.x = 0;
	return iconWrap().use(_icon);
})

cssDraw.extend('search', function () {
	let _icon = new this.Graph().size(1, 1);
	let circle = primitive.circleBox();
	let line  = primitive.line(1, 0.2)
					.rotate(45);
		line.x = 0.6;
		line.y = 1.1;

	_icon.use([circle, line]);
	_icon.center();
	_icon.transform({
		scale: 'scale(0.5)'
	})

	return iconWrap().use(_icon);
})

cssDraw.extend('asterisk', function () {
	let asterisk = new this.Graph().size(1, 1);

	let unit = asterisk.$unit;
	let lines = [0, 1, 2, 3].map((item) => {
		let line = primitive.line(1, 1/5)
			.rotate(item*45);
		return line;
	});
	asterisk = asterisk.use(lines);
	asterisk.x = 0;
	asterisk.y = 0.5;
	return iconWrap().use(asterisk);
});

export default cssDraw;
