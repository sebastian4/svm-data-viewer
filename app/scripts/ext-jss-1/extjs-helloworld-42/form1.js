Ext.onDocumentReady(function() {
	Ext.create('Ext.form.Panel', {
		title : 'Form',
		headerPosition : 'top',
		width : 600,
		height : 400,
		renderTo : document.body,
		style : 'marginTop: 150px; marginLeft: 300px;',
		layout : {
			type : 'hbox',
			align : 'strech'
		},
		items : [{
			xtype : 'panel',
			layout : {
				type : 'vbox',
				align : 'strech'
			},
			padding : 10,
			width : 350,
			height : 350,
			defaultType : 'textfield',
			defaults : {
				allowBlank : false
			},
			items : [{
				xtype : 'textfield',
				fieldLabel : 'First Name',
				name : 'firstName',
				padding : 10,
				minLength : 3,
				minLengthText : 'Your name can\'t be that short! It must be atleast {0} characters long.',
				maxLength : 10,
				maxLengthText : 'Your name can\'t be more than {0} characters long!'
			}, {
				fieldLabel : 'Last Name',
				name : 'lastName',
				padding : 10,
				msgTarget : 'under'
			}, {
				fieldLabel : 'Side',
				padding : 10,
				msgTarget : 'side'
			}, {
				fieldLabel : 'Title',
				padding : 10,
				msgTarget : 'title'
			}, {
				fieldLabel : 'None',
				padding : 10,
				msgTarget : 'none'
			}, {
				fieldLabel : 'Error Panel',
				padding : 10,
				msgTarget : 'error-container',
				minLength : 5
			}]

		}, {
			xtype : 'panel',
			width : 220,
			hieght : 200,
			margin : '5 5 5 0',
			padding : '10',
			title : 'Field Error Message',
			frame : true,
			layout : 'fit',
			items : [{
						xtype : 'component',
						id : 'error-container'
					}]
		}]
	})
})