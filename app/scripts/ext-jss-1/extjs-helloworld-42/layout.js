Ext.onReady(function() {
			Ext.define('MyApp.MyWindow', {
						extend : 'Ext.Window',
						minimizable : true,
						maximizable : true,
						title : 'Welcome!',
						initComponent : function() {
							this.items = [{
										xtype : 'textfield',
										name : 'tfName',
										fieldLabel : 'Enter your name'
									}], this.callParent(arguments);
						}
					});
			var win = Ext.create('MyApp.MyWindow');
			win.show();
		});