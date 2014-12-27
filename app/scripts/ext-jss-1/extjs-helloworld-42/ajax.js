Ext.onReady(function() {
			var formPanel = Ext.create('Ext.panel.Panel', {
						title : 'Form',
						headerPosition : 'top',
						width : 600,
						height : 400,
						renderTo : document.body,
						style : 'marginTop: 150px; marginLeft: 300px;'
					});
			Ext.Ajax.request({
						url : 'formStructure.json',
						success : function(response, options) {
							console.log(response.responseText);
						}
					});
			Ext.Ajax.request({
						url : 'formStructure.json',
						success : function(response, options) {
							var jsonResponse = Ext
									.decode(response.responseText);
							if (jsonResponse.success) {
								formPanel.add(jsonResponse.fields);
							}
						}
					});
		})