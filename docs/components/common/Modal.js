let templateStr = `   
    <div class="modal" :class='modalClass'>
        <div class="modal-content">
            <h4>{{title}}</h4>
            <div style='position: absolute; width: 100%; padding-right: 50px;text-align:right;'>
                <i v-on:click='onCancel' data-icon='close' class="css-icon" style='font-size: 14px;'></i>
            </div>
            <div>
                <slot></slot>
            </div>
        </div>
        <div class="modal-footer" v-if='isShowFooter'>
            <a href="javascript:void(0);" v-on:click='onOk' class=" modal-action modal-close waves-effect waves-green btn-flat">{{okText}}</a>
            <a href="javascript:void(0);" v-on:click='onCancel' class=" modal-action modal-close waves-effect waves-green btn-flat">{{cancelText}}</a>
        </div>
  </div>
`

Vue.component('vModal', {
    template: templateStr,
    props: {
        isShow: {
            type: Boolean,
            default: false
        },
        title: {
            type: String
        },
        okText: {
            type: String,
            default: 'yes'
        },
        cancelText: {
            type: String,
            default: 'cancel'
        },
        isShowFooter: {
            type: Boolean,
            default: true
        }
    },
    computed: {
        modalClass () {
            return {
                open: this.isShow
            };
        }
    },
    methods: {
        onOk () {
            this.$emit('ok');
        },
        onCancel () {
            console.log('cancel');
            this.$emit('cancel');
        }
    }
});

