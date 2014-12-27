Ext.onDocumentReady(function() {
			Ext.create('Ext.toolbar.Toolbar', {
						renderTo : document.body,
						title : 'Toolbar',
						width : 400,
						items : [{
									text : 'button'
								}, {
									xtype : 'splitbutton',
									text : 'split'
								}, '->', {
									xtype : 'textfield',
									emptyText : 'Please enter the text'
								}]

					})
		})