Ext.onDocumentReady(function() {
			Ext.create('Ext.panel.Panel', {
						renderTo : Ext.getBody(),
						title : 'Panel',
						width : 300,
						height : 200,
						tbar : [{
									xtype : 'tbtext',
									text : 'Title'
								}]
					});
			'->', '->'
			Ext.create('Ext.panel.Panel', {
						renderTo : Ext.getBody(),
						title : 'Panel for separator',
						width : 300,
						height : 200,
						tbar : ['item 1', {
									xtype : 'tbseparator',
									text : 'Title'
								}, 'item 2']
					})
		})