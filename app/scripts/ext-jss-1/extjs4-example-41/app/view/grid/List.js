Ext.define('Example.view.grid.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.gridlist',
    title : 'Grid List',
    initComponent: function() {
    	this.store = {
	            fields: ['name', 'email'],
	            data  : [
	                {name: 'Ed',    email: 'ed@sencha.com'},
	                {name: 'Tommy', email: 'tommy@sencha.com'}
	            ]
	        };

        this.columns = [
            {header: 'Name',  dataIndex: 'name',  flex: 1},
            {header: 'Email', dataIndex: 'email', flex: 1}
        ];

        this.callParent(arguments);
    }
});
/*
Ext.define('Example.view.grid.List' ,{
    extend: 'Ext.grid.Panel',
    alias : 'widget.gridlist',
    initComponent: function() {   
    	 this.store = {
    	            fields: ['name', 'email'],
    	            data  : [
    	                {name: 'Ed',    email: 'ed@sencha.com'},
    	                {name: 'Tommy', email: 'tommy@sencha.com'}
    	            ]
    	        };
    	
    	this.items = [{
            xtype: 'grid',
    	    title : 'Grid List',
            width: 400,
            height: 200,
            title: 'Application Users',
            columns: [
                {
                    text: 'Name',
                    width: 100,
                    sortable: false,
                    hideable: false,
                    dataIndex: 'name'
                },
                {
                    text: 'Email Address',
                    width: 150,
                    dataIndex: 'email',
                    hidden: true
                },
                {
                    text: 'Phone Number',
                    flex: 1,
                    dataIndex: 'phone'
                }
            ]
    	 }];

        this.callParent(arguments);
    }
});
*/