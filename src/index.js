let win = window,
	doc = win.document;
/**
 * utils
 */
const utils = {
	setStyle (el, obj, cb) {
		Object.keys(obj).forEach((key) => {
			el.style[key] = obj[key];

			if (cb) {
				cb(key, obj[key]);
			}
		});
	},
	toLowerCase (str) {
		return str.toLowerCase(str);
	},
	mergeObj (parent, child) {
		Object.keys(child).forEach((key) => {
			parent[key] = child[key];
		});

		return parent;
	}
}

const defaultStyle = {
	div: {
		position: 'relative',
		fontSize: '14px',
		background: '#ffffff',
		width: '100px',
		height: '100px'
	},
	span: {
		position: 'relative',
		display: 'inline-block',
		background: '#ffffff'
	}
};
/**
 * Base class
 */
let uid = 0;
class Base {
	constructor (opts = {}, tagName = 'span') {
		this.$el = doc.createElement(tagName);
		this.$unit = 'px';
		this.$multi = 1;

		this.id = uid++;
		this.styleObj = {};

		this.defaultStyle(opts);
	}

	_fnWrap (cb) {
		cb();
		return this;
	}

	defaultStyle (opts = {}) {
		return this._fnWrap(() => {
			let styles = defaultStyle[utils.toLowerCase(this.$el.tagName)];
			this.style(styles);
			this.style(opts);
		});
	}

	style (object = {}) {
		if (typeof object === 'string') {
			return this.$el.style[object];
		} else {
			utils.mergeObj(this.styleObj, object);
			return this._fnWrap(() => {
				utils.setStyle(this.$el, object);
			});
		}
	}

	color (c) {
		return this._fnWrap(() => {
			this.style({
				color: c
			});
		});
	}

	bgColor (c) {
		return this._fnWrap(() => {
			this.style({
				backgroundColor: c
			});
		});
	}

	setUnit (unit) {
		this.$unit = unit;
		Object.keys(this.styleObj).forEach((attr) => {
			let val = this.styleObj[attr];
			//em 不对字号设置
			if (typeof val === 'string' && attr !== 'fontSize') {
				val = val.replace(/px/g, unit);
			}
			this.styleObj[attr] = val;
		});
		this.style(this.styleObj);
	} 

	size (x, y) {
		return this._fnWrap(() => {
			this.style({
				width: x + this.$unit,
				height: y + this.$unit
			});
		});
	}

	set w (val) {
		this.style({
			width: val + this.$unit
		});
	}

	get w () {
		return parseInt(this.style('width') || 0);
	}

	set h (val) {
		this.style({
			height: val + this.$unit
		});
	}

	get h () {
		return parseInt(this.style('height') || 0);
	}

	/**
	 * postion setting
	 */
	position (x, y) {
		return this._fnWrap(() => {
			this.style({
				top: y + this.$unit,
				left: x + this.$unit
			});
		});
	}

	set x (val) {
		this.style({
			left: val
		});
	}

	get x () {
		return parseInt(this.style('left') || 0);
	}

	set y (val) {
		this.style({
			top: val
		});
	}

	get y () {
		return parseInt(this.style('top') || 0);
	}

	multiple (val) {
		let self = this;
		self.multi = Number(val);
		return this._fnWrap(() => {
			setAttr('h');
			setAttr('w');
			setAttr('x');
			setAttr('y');
		});

		function setAttr (attr) {
			self[attr] = self[attr] * self.multi;
		}
	}

	appendTo (el) {
		el = typeof el === 'string' ? doc.querySelector(el) : el;
		el.append(this.$el);

		return this;
	}

	get el () {
		return this.$el;
	}

	get html () {
		return this.$el.outerHTML;
	}
}

/**
 * element class
 */
class Element extends Base {
	constructor (opts, tagName) {
		super(opts, tagName);
	}
}

/**
 * graph class
 */
class Graph extends Base {
	constructor (opts, tagName = 'span') {
		super(opts, tagName);

		this.style({
			fontSize: '14px'
		});

		this.setUnit('em');
	}

	use (element) {
		element.setUnit('em');
		element.appendTo(this.$el);
		element.style({
			position: 'absolute'
		});
	}
}

export default function Drawer () {
	let api = {};

	api.Element = Element;
	api.Graph = Graph;

	api.extend = function (name, cb) {
		if (api[name]) {
			console.warn(name + ' graphCreater was existed.');
		} else {
			api[name] = cb.bind(this);
		}
	};

	return api;
}


