Ext.onReady(function() {
			Ext.create('Ext.Container', {
						renderTo : Ext.getBody(),
						items : [{
									xtype : 'button',
									text : 'Button Example'
								}]
					});
			Ext.create('Ext.Button', {
						text : 'Click Me',
						handler : function() {
							Ext.Msg.alert('Status', 'Button has been clicked');
						},
						renderTo : document.body
					});
			Ext.create('Ext.Button', {
						text : 'Dynamic Button Change',
						renderTo : Ext.getBody(),
						handler : function() {
							if (this.count) {
								this.count++;
							} else {
								this.count = 1;
							}
							Ext.Msg.alert('Status', 'Button Click : '
											+ this.count);
						}
					});
			Ext.create('Ext.Button', {
						renderTo : Ext.getBody(),
						text : 'Button - 1',
						scale : 'large'
					});
			Ext.create('Ext.Button', {
						renderTo : document.body,
						text : 'Button - 2',
						tooltip : 'Please click the button',
						enableToggle : true
					});
			Ext.create('Ext.Button', {
						text : 'Menu Button',
						renderTo : Ext.getBody(),
						arrowAlign : 'bottom',
						menu : [{
									text : 'Item - 1'
								}, {
									text : 'Item - 2'
								}, {
									text : 'Item - 3'
								}]
					});
			Ext.create('Ext.button.Split', {
						text : 'Option',
						renderTo : document.body,
						handler : function() {
							alert('Button Click!!!!!');
						},
						menu : new Ext.menu.Menu({
									items : [{
												text : 'Click - 1',
												handler : function() {
													alert('Click - 1')
												}
											}, {
												text : 'Click - 2',
												handler : function() {
													alert('Click - 2')
												}
											}]
								})
					});
		});