Ext.onDocumentReady(function() {
			Ext.create('Ext.toolbar.Toolbar', {
						renderTo : document.body,
						title : 'Toolbar',
						width : 900,
						items : [{
									text : 'button'
								}, {
									xtype : 'splitbutton',
									text : 'split'
								}, '->', {
									xtype : 'textfield',
									emptyText : 'Please enter the text'
								}, {
									xtype : 'tbseparator'
								}, 'text 1', {
									xtype : 'tbspacer'
								}, 'text 2', 'text 3']
					})
		})