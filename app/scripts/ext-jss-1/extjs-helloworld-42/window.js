Ext.onReady(function() {
			Ext.create('Ext.Window', {
						title : 'Window Example',
						height : 300,
						width : 500,
						layout : 'fit',
						items : [{
									xtype : 'grid',
									border : true,
									columns : [{
												header : 'Header - 1'
											}, {
												header : 'Header - 2'
											}]
								}],
						store : Ext.create('Ext.data.ArrayStore', {})
					}).show();
		})