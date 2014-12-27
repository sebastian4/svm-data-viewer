Ext.define('StoreApp.store.Order', {
    extend      : 'Ext.data.Store',
    requires    : [
        'StoreApp.model.Order',
        'StoreApp.model.OrderItem'
    ],

    storeId   : 'Order',
    model     : 'StoreApp.model.Order',
//    autoLoad  : true,
//    singleton : true, // For using store in grid "store : StoreApp.store.Order"
    proxy     : {
        type   : 'ajax',
        url    : 'data/Orders.json',
        reader : {
            type           : 'json',
            root           : 'orders',
            totalProperty  : 'total'
        }
    }
});
