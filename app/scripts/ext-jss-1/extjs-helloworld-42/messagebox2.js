Ext.onReady(function() {
	Ext.Msg.prompt('Name', 'Please enter the text : ', function(btn, text) {
				if (btn == 'ok') {
					Ext.Msg.alert('Status', 'Name has been entered as ' + text);
				}
			});
})