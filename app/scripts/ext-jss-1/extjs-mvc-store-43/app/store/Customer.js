Ext.define('StoreApp.store.Customer', {
    extend      : 'Ext.data.Store',
    requires    : [
        'StoreApp.model.Customer'
    ],
    
    storeId   : 'Customer',
    model     : 'StoreApp.model.Customer',
//    autoLoad  : true,
//    singleton : true, // For using store in grid "store : StoreApp.store.Customer"
    proxy     : {
        type   : 'ajax',
        url    : 'data/Customers.json',
        reader : {
            type           : 'json',
            root           : 'customers',
            totalProperty  : 'total'
        }
    }
});
