Ext.define('StoreApp.view.product.Grid', {
    extend        : 'Ext.grid.Panel',
    alias         : 'widget.productgrid',
    requires      : [
        'StoreApp.store.Product'
    ],
    constructor   : function() {
        Ext.apply(this, {
//            store : StoreApp.store.Product, // The store needs to have "singleton: true"
            store   : Ext.create('StoreApp.store.Product'),
            columns : [
                {
                    header    : 'ID',
                    dataIndex : 'id'
                },
                {
                    header    : 'Name',
                    dataIndex : 'name'
                },
                {
                    header    : 'Description',
                    dataIndex : 'description'
                },
                {
                    header    : 'Price',
                    dataIndex : 'price'
                }
            ]
        });
        this.callParent(arguments);
    }
});
