Ext.define('StoreApp.model.Order', {
    extend   : 'Ext.data.Model',
    fields   : [
            {name : 'id',          type : 'int'},
            {name : 'customer_id', type : 'int'}, /* refers to the customer that this order belongs to*/
            {name : 'date',        type : 'date'}
    ],
    belongsTo: 'StoreApp.model.Customer', /* Generates a getCustomer method on every Order instance */
    hasMany: {model : 'StoreApp.model.OrderItem', name : 'orderItems'} /* Generates a orderitems() method on every Order instance */
});
