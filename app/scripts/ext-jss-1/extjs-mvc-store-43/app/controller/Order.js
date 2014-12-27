Ext.define('StoreApp.controller.Order', {
    extend     : 'Ext.app.Controller',

    models     : ['Order'],
    stores     : ['Order', 'OrderItem', 'Product'],
    
    init : function()
    {
        this.control({
            '.ordergrid' : {
                selectionchange: this.onOrderSelectionChanged
            }
        });
    },
    
    onOrderSelectionChanged : function(view, selections, options)
    {
        // Return if nothing's selected.
        if (selections.length <= 0) {
            return;
        }
        
        // Get the stores for order items and products
        var orderItemStore = this.getOrderItemStore();
        var productStore = this.getProductStore();
        
        // Get the ID of the selected order
        var orderId = selections[0].get('id');
        
        // Filter our intermediate store by the order's ID.
        // Then we can use all the items in orderItemStore to get the
        // products associated with an order.
        orderItemStore.clearFilter();
        orderItemStore.filter('order_id', orderId);
        orderItemStore.load();
        
        // Get all product IDs belonging to the selected order
        var filters = new Ext.util.MixedCollection();
        
        var productIds = [];
        orderItemStore.each(function(record){
            var pid = record.get('product_id');
            productIds.push(pid);
            filters.add('id', pid);
        });
        
        productStore.clearFilter();
        var filterValue = new RegExp(productIds.join('|'));
        productStore.filter({property :'id', value : filterValue});
        productStore.load();
        productStore.filter({property :'id', value : filterValue});
    }
    
});
