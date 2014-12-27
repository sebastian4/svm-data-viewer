Ext.onDocumentReady(function() {
			var panel1 = Ext.create('Ext.panel.Panel', {
						title : 'Panel - 1',
						html : 'Child - 1',
						width : 100
					});
			var panel2 = Ext.create('Ext.panel.Panel', {
						title : 'Panel - 2',
						html : 'Child - 2',
						width : 200
					});
			Ext.create('Ext.container.Viewport', {
						items : [panel1, panel2]
					})
		})