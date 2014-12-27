Ext.define('StoreApp.view.order.Grid', {
    extend        : 'Ext.grid.Panel',
    alias         : 'widget.ordergrid',
    requires      : [
        'StoreApp.store.Order',
        'StoreApp.store.OrderItem'
    ],
    constructor   : function() {
        Ext.apply(this, {
//            store : StoreApp.store.Order, // The store needs to have "singleton: true"
            store   : Ext.create('StoreApp.store.Order'),
            columns : [
                {
                    header    : 'ID',
                    dataIndex : 'id'
                },
                {
                    header    : 'Customer ID',
                    dataIndex : 'customer_id'
                },
                {
                    header    : 'Date',
                    dataIndex : 'date'
                }
            ]
        });
        this.callParent(arguments);
    }
});
