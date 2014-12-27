Ext.onReady(function() {
			Ext.create('Ext.panel.Panel', {
						renderTo : document.body,
						title : 'Paging',
						width : 500,
						height : 200,
						columns : [{
									header : 'Name'
								}, {
									header : 'Email'
								}, {
									header : 'Phone'
								}],
						dockedItems : [{
									xtype : 'pagingtoolbar',
									dock : 'bottom',
									displayInfo : true
								}]
					})
		})