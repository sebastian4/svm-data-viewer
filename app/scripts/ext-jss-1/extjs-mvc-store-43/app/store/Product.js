Ext.define('StoreApp.store.Product', {
    extend      : 'Ext.data.Store',
    requires    : ['StoreApp.model.Product'],

    storeId   : 'Product',
    model     : 'StoreApp.model.Product',
//    autoLoad  : true,
//    singleton : true, // For using store in grid "store : StoreApp.store.Product"
    proxy     : {
        type   : 'ajax',
        url    : 'data/Products.json',
        reader : {
            type           : 'json',
            root           : 'products',
            totalProperty  : 'total'
        }
    }
});
