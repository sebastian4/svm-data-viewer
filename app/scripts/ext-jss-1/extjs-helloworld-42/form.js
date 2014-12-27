Ext.onReady(function() {
			Ext.create('Ext.form.Panel', {
						title : 'Form',
						width : 300,
						height : 200,
						renderTo : document.body,
						bodyPadding : 25,
						defaultType : 'textfield',
						items : [{
									fieldLabel : 'First Name',
									name : 'firstName'
								}, {
									fieldLabel : 'Last Name',
									name : 'lastName'
								}, {
									xtype : 'datefield',
									fieldLabel : 'DOB',
									name : 'birthdate'
								}]
					});
			Ext.create('Ext.form.Panel', {
						renderTo : Ext.getBody(),
						width : 600,
						height : 100,
						title : 'User Form With HBOX',
						defaults : {
							xtype : 'textfield',
							padding : 15,
							labelAlign : 'top'
						},
						layout : {
							type : 'hbox'
						},
						items : [{
									fieldLabel : 'First Name',
									name : 'firstName'
								}, {
									fieldLabel : 'Last Name',
									name : 'lastName'
								}, {
									xtype : 'datefield',
									fieldLabel : 'DOB',
									name : 'birthdate'
								}]
					});
		});