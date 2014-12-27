Ext.onReady(function() {
			Ext.create('Ext.panel.Panel', {
						renderTo : document.body,
						width : 500,
						height : 500,
						title : 'Container Panel',
						items : [{
									xtype : 'panel',
									title : 'Panel - 1',
									height : 100,
									width : '75%'
								}, {
									xtype : 'panel',
									title : 'Panel - 2',
									height : 100,
									width : '75%'
								}]
					});
			Ext.create('Ext.panel.Panel', {
						width : 100,
						height : 100,
						title : 'Panel',
						renderTo : document.body
					});
			Ext.create('Ext.panel.Panel', {
						renderTo : document.body,
						width : 400,
						height : 300,
						title : 'Panel Align',
						layout : 'column',
						items : [{
									xtype : 'panel',
									title : 'Panel - 1',
									columnWidth : 0.5,
									height : 100
								}, {
									xtype : 'panel',
									title : 'Panel - 2',
									columnWidth : 0.5,
									height : 120
								}]
					});
		});