Ext.onDocumentReady(function() {
			var i = 0;
			var addItems = [];
			var toolBar = Ext.create('Ext.toolbar.Toolbar', {
						renderTo : Ext.getBody(),
						width : 1000,
						items : [{
									xtype : 'button',
									text : 'Button - 1'
								}, {
									xtype : 'textfield',
									value : 'Text - 1'
								}]
					});
			alert(toolBar.items.length);
			for (var index = 0; index < toolBar.items.length; index++) {
				addItems.push(toolBar.items[index]);
			}
			Ext.create('Ext.toolbar.Toolbar', {
						renderTo : document.body,
						// layout : 'hbox',
						// align : 'center',
						width : 1000,
						items : [{
							text : 'Add a button',
							scope : this,
							handler : function() {
								Ext.Msg.prompt('Button',
										'Please enter the button name : ',
										function(btn, text) {
											if (btn == 'ok') {
												addItems.push(toolBar.add({
															text : text,
															id : ++i,
															handler : function(
																	thisBtn,
																	obj) {
																alert(thisBtn.id);
															}
														}));
											}
										});
							}
						}, {
							text : 'Add a text field',
							scope : this,
							handler : function() {
								Ext.Msg.prompt('TextField',
										'Please enter the textfield name: ',
										function(btn, text) {
											if (btn == 'ok') {
												addItems.push(toolBar.add({
															xtype : 'textfield',
															value : text,
															id : ++i
														}));
											}
										});
							}
						}, {
							text : 'Add a separator',
							scope : this,
							handler : function() {
								addItems.push(toolBar.add('-----'));
							}
						}, {
							text : 'Add a space',
							scope : this,
							handler : function() {
								addItems.push(toolBar.add('->'));
							}
						}, '->', {
							text : 'Remove last item',
							scope : this,
							handler : function() {
								if (addItems.length > 1) {
									toolBar.remove(addItems.pop());
								}
							}
						}, {
							text : 'Remove All items',
							scope : this,
							handler : function() {
								toolBar.removeAll();
							}
						}]
					});
		})