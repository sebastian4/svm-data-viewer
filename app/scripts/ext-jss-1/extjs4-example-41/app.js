Ext.application({
    name: 'Example',
    appFolder: 'app',
    controllers: [
        'Grid', 'Form', 
    ],
    launch: function() {
    	Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    xtype: 'panel',
                    title: 'Panel Example',
                    xtype: 'tabpanel',
                    items: [{
                        title: 'Form',
                        xtype: 'formlist'
                    }, {
                        title: 'Grid',
                        xtype: 'gridlist'
                    }, 
                    ]
                }
            ]
        });
    }
});