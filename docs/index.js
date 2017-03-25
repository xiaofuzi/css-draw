import cssDraw from '../src/cssDraw.js';

var icons = cssDraw.$icons.map(function (icon) {
	return {
		name: icon,
		html: cssDraw[icon]().html()
	};
})

Vue.config.devtools = true

import vModal from './components/common/Modal.js'
import vIconpreview from './components/iconPreview/iconPreview.js'

new Vue({
	el: '#app',
	data: {
		iconArray: icons,
        isShowModal: true,
        isShowModalFooter: false
	},
	components: {
		vIconpreview
	},
    methods: {
        onHide () {
            this.isShowModal = false;
        }
    },
    mounted () {
    	cssDraw.render({
    		shadowDom: true
    	});
    }
})