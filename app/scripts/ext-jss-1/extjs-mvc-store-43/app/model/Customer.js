Ext.define('StoreApp.model.Customer', {
    extend   : 'Ext.data.Model',
    requires : [
        'StoreApp.model.Order'
    ],
    fields   : [
           {name : 'id',          type : 'int'},
           {name : 'lastname',    type : 'string'},
           {name : 'firstname',   type : 'string'}
    ],
    hasMany  : {model : 'StoreApp.model.Order', name : 'orders'} /* Generates a orders() method on every Customer instance */
});
