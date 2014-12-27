/*Ext.onReady(function(){
	new Ext.Component({
		renderTo: document.body,
		html: 'hello'
	});
});
Ext.onReady(function() {
 Ext.Msg.alert('Status', '<h1>Hello World!<\/h1>');
});*/
Ext.application({
	name : 'Hello Application',
	launch : function() {
		Ext.create('Ext.container.Viewport', {
			layout : 'fit',
			items : [ {
				title : 'Extjs: App',
				html : 'hello'
			} ]
		});
	}
});