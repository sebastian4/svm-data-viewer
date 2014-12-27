Ext.define('StoreApp.store.OrderItem', {
    extend      : 'Ext.data.Store',
    requires    : [
        'StoreApp.model.Product',
        'StoreApp.model.OrderItem',
        'StoreApp.model.Order'
    ],

    storeId   : 'OrderItem',
    model     : 'StoreApp.model.OrderItem',
//    autoLoad  : true,
    singleton : true, // For using store in grid "store : StoreApp.store.OrderItem"
    proxy     : {
        type   : 'ajax',
        url    : 'data/OrderItems.json',
        reader : {
            type           : 'json',
            root           : 'order_items',
            totalProperty  : 'total'
        }
    }
});
