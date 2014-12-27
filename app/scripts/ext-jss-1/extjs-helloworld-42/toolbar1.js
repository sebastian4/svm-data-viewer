var bt1;
var bt2;
var bt3;
var tool;
Ext.onDocumentReady(function() {
			bt1 = Ext.create('Ext.button.Button', {
						text : 'Button -1',
						disabled : true,
						scope : this,
						handler : function() {
							disableToolBar()
						}
					});
			bt2 = Ext.create('Ext.button.Button', {
						text : 'Button -2',
						disabled : true,
						scope : this
					});
			bt3 = Ext.create('Ext.button.Button', {
						text : 'Button -3',
						disabled : true,
						scope : this
					});
			var btn1 = Ext.create('Ext.button.Button', {
						id : 'btn1',
						text : 'Enable',
						disabled : false,
						scope : this,
						handler : function() {
							changeBtn(true)
						}
					});
			var btn2 = Ext.create('Ext.button.Button', {
						id : 'btn2',
						text : 'Disable',
						disabled : false,
						scope : this,
						handler : function() {
							changeBtn(false)
						}
					})

			tool = Ext.create('Ext.toolbar.Toolbar', {
						renderTo : document.body,
						width : 500,
						title : 'ToolBar',
						items : [bt1, bt2, bt3, btn1, btn2]
					})
		})

function changeBtn(bln) {
	if (bln) {
		bt1.enable();
		bt2.enable();
		bt3.enable();
	} else {
		bt1.disable();
		bt2.disable();
		bt3.disable();
	}
}

function disableToolBar() {
	tool.disable();
}