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
        isShowModal: false,
        isShowModalFooter: false,
        currentIconName: ''
	},
	components: {
		vIconpreview
	},
    methods: {
        onHide () {
            console.log('onHide');
            this.isShowModal = false;
        },
        onClickIcon (name) {
            this.isShowModal = true;
            this.currentIconName = name;
        }
    },
    mounted () {
    	cssDraw.render({
    		shadowDom: false
    	});
    }
})