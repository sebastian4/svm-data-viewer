Ext.define('StoreApp.model.OrderItem', {
    extend   : 'Ext.data.Model',
    requires : [
        'StoreApp.model.Order',
        'StoreApp.model.Product'
    ],
    fields   : [
           {name : 'id',         type : 'int'},
           {name : 'order_id',   type : 'int'},
           {name : 'product_id', type : 'int'}
    ],
    belongsTo : 'StoreApp.model.Order',
    hasMany   : {model : 'StoreApp.model.Product', name : 'products', foreignKey : 'id'}
});
