var icons = cssDraw.$icons.map(function (icon) {
	return {
		name: icon,
		html: cssDraw[icon]().html
	};
})

Vue.config.devtools = true

new Vue({
	el: '#app',
	data: {
		iconArray: icons
	}
})