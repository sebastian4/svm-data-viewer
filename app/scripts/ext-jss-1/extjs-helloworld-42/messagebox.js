Ext.onReady(function() {
			// Example - 1
			Ext.Msg.show({
						title : 'Save Changes',
						msg : 'Do you want to save the changes?',
						icon : Ext.Msg.QUESTION,
						buttons : Ext.Msg.YESNOCANCEL
					});
		})