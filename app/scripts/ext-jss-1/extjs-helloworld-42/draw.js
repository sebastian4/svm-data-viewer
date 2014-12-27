// Not Working. Need to check.
Ext.onReady(function() {
			var comp = Ext.create('Ext.draw.Component', {
						viewBox : false
					});
			Ext.create('Ext.Window', {
						width : 500,
						height : 500,
						layout : 'fit',
						items : [comp]
					}).show();
			var cir = comp.surface.add({
						type : 'circle',
						x : 100,
						y : 100,
						radius : 100,
						fill : '#cc5'
					});
			cir.addListener('mouseup', function() {
						alert('mouse upped!');
					});
		})