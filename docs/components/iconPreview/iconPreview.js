import prism from 'prismjs';
import cssDraw from '../../../src/cssDraw.js';

function codeWrap (code, lang = 'markup') {
	code = Prism.highlight(`${code}`, Prism.languages[lang]);
	return `<pre class="language-${lang}"><code class="language-${lang}">${code}</code></pre>`;
};

let template = `
	<div>
		<h2>{{iconName}}</h2>
		<hr/>
		<div style='margin: 10px;' v-html='iconHtml'></div>
		<h4>可以通过如下两种方式使用：</h4>
		<div>
			<h5>1. 动态渲染 [需调用 cssDraw.render() 函数]</h5>
			<div v-html='renderHtml'></div>
			<h5>2. 静态渲染 [使用渲染后的 html 源码]</h5>			
			<div v-html='renderedHtml'></div>
		</div>
	</div>
`;
export default {
	template: template,
	data () {
		return {
			renderHtml: '',
			renderedHtml: '',
			iconHtml: ''
		};
	},
	props: {
		iconName: {
			type: String
		}
	},
	methods: {
		onRender () {
			if (!this.iconName) return ;
			let iconInstance = cssDraw[this.iconName]();
			this.iconHtml = iconInstance.html();
			this.renderHtml = codeWrap(`<i data-icon='${this.iconName}' class="css-icon"></i>`, 'javascript');
			this.renderedHtml = codeWrap(this.iconHtml);
		}
	},
	watch: {
		iconName () {
			this.onRender();
		}
	},
	mounted () {
		this.onRender();
	}
}