Ext.define('StoreApp.controller.Customer', {
    extend : 'Ext.app.Controller',

    models : ['Customer'],
    stores : ['Customer', 'Order', 'Product'],

    init : function() {
        this.control({
            '.customergrid' : {
                selectionchange: this.onCustomerSelectionChanged
            }
        });
    },
    
    onCustomerSelectionChanged : function(view, selections, options) {
        if (selections.length <= 0) {
            return;
        }
        // Remove all items from the product store
        this.getProductStore().removeAll();
        
        // Determine the customer's ID and 
        var customerId = selections[0].get('id');
        
        // Load all the orders that are associated to the selected customer.
        var orderStore = this.getOrderStore();
        orderStore.clearFilter();
        orderStore.filter('customer_id', customerId);
        orderStore.load();
        
        // Some debug output for the selected customer.
        var customer = StoreApp.model.Customer(selections[0]);
    }
});
