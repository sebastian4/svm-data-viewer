Ext.onDocumentReady(function() {
			Ext.create('Ext.panel.Panel', {
						title : 'Panel',
						headerPosition : 'top',
						width : 600,
						height : 400,
						renderTo : document.body,
						style : 'marginTop: 150px; marginLeft: 300px;',
						layout : {
							type : 'table',
							columns : 4,
							tdAttrs : {
								valign : 'top'
							}
						},
						items : [{
									width : 600,
									height : 100,
									html : 'Header',
									colspan : 4
								}, {
									width : 150,
									height : 300,
									html : 'Left Menu',
									rowspan : 2
								}, {
									width : 300,
									height : 150,
									html : 'Content Area',
									colspan : 2
								}, {
									width : 150,
									height : 300,
									html : 'Right Menu',
									rowspan : 2
								}, {
									width : 150,
									height : 150,
									html : 'Content 1'
								}, {
									width : 150,
									height : 150,
									html : 'Content 2'
								}]
					})
		})