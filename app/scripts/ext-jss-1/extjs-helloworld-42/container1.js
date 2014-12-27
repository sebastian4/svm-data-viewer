// Not Working. Need to check.
Ext.onReady(function() {
			var containerPanel = Ext.create('Ext.panel.Panel', {
						renderTo : Ext.getBody(),
						title : 'Add Panel',
						width : 400,
						height : 400,
						layout : 'column',
						suspendLayout : true
					});

			containerPanel.add({
						xtype : 'panel',
						title : 'Panel - 1',
						width : 0.5,
						height : 200
					});
			containerPanel.add({
						xtype : 'panel',
						title : 'Panel - 2',
						width : 0.5,
						height : 200
					});
			containerPanel.suspendLayout = false;
			containerPanel.doLayout();
		})