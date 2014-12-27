Ext.define('Example.controller.Form', {
	extend: 'Ext.app.Controller',
	views: [
            'form.List'
        ],
    init: function() {
        this.control({
            'viewport > panel': {
                render: this.onPanelRendered
            }
        });
    },

    onPanelRendered: function() {
        console.log('The form was rendered');
    }
});