
Ext.Loader.setConfig({enabled: true});

Ext.Loader.setPath('StoreApp', './app')

Ext.require('StoreApp.view.customer.Grid');
Ext.require('StoreApp.view.order.Grid');
Ext.require('StoreApp.view.product.Grid');

Ext.application({
    name      : 'StoreApp',
    appFolder : './app',
    
    controllers : [
        'StoreApp.controller.Customer',
        'StoreApp.controller.Order'
    ],

    launch    : function() {
        var productgrid = Ext.create('StoreApp.view.product.Grid', {
            title  : 'All products (unfiltered)',
            store  : Ext.create('StoreApp.store.Product'),
            flex   : 1,
            height : '300px',
            frame  : true
        });
        productgrid.store.load();
        
        Ext.create('Ext.container.Viewport', {
            layout : 'hbox',
            width  : '100%',
            height : '300px',
            items  : [
                {
                    xtype  : 'customergrid',
                    title  : 'All Customers',
                    flex   : 1,
                    height : '300px',
                    frame  : true
                },
                {
                    xtype  : 'ordergrid',
                    title  : 'Orders (of the selected customer)',
                    flex   : 1,
                    height : '300px',
                    frame  : true
                },
                {
                    xtype  : 'productgrid',
                    title  : 'Products (associated with the selected order)',
                    flex   : 1,
                    height : '300px',
                    frame  : true
                },
                productgrid
            ]
        });
        
        
    }
});
