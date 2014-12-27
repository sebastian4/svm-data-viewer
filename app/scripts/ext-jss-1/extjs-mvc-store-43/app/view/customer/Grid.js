Ext.define('StoreApp.view.customer.Grid', {
    extend        : 'Ext.grid.Panel',
    alias         : 'widget.customergrid',
    requires      : [
        'StoreApp.store.Customer',
        'StoreApp.store.Order'
    ],
    constructor   : function() {
        Ext.apply(this, {
//            store : StoreApp.store.Customer, // The store needs to have "singleton: true"
            store   : Ext.create('StoreApp.store.Customer'),
            columns : [
                {
                    header    : 'ID',
                    dataIndex : 'id'
                },
                {
                    header    : 'Firstname',
                    dataIndex : 'firstname'
                },
                {
                    header    : 'Lastname',
                    dataIndex : 'lastname'
                }
            ]
        });
        this.store.load();
        this.callParent(arguments);
    }
});
