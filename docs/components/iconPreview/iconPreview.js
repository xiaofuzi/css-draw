import prism from 'prismjs';
import cssDraw from '../../../src/cssDraw.js';

function codeWrap (code, lang = 'markup') {
	code = Prism.highlight(`${code}`, Prism.languages[lang]);
	return `<pre><code class="language-${lang}">${code}</code></pre>`;
};

let template = `
	<div>
		<h2>{{iconName}}</h2>
		<hr/>
		<div style='margin: 10px;' v-html='iconHtml'></div>
		<h4>There are two ways to use css-icon.</h4>
		<div>
			<h5>cssDraw.render()</h5>
			<div v-html='renderHtml'></div>
			<h5>icon html</h5>			
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