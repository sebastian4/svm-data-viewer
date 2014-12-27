Ext.define('StoreApp.model.Product', {
    extend   : 'Ext.data.Model',
    fields   : [
            {name : 'id',          type : 'int'},
            {name : 'name',        type : 'string'},
            {name : 'description', type : 'string'},
            {name : 'price',       type : 'float'}
    ],
    hasMany  : {model : 'StoreApp.model.OrderItem', name : 'orderItems'}
});
