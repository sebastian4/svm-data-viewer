Ext.onReady(function() {
			var store = Ext.create('Ext.data.TreeStore', {
						root : {
							children : [{
										text : 'Child -1',
										leaf : true
									}, {
										expanded : true,
										text : 'Child -2',
										children : [{
													text : 'Children -1',
													leaf : true
												}, {
													text : 'Children -2',
													leaf : true
												}, {
													text : 'Children -3',
													leaf : false
												}]
									}, {
										text : 'Child -3',
										leaf : true
									}]
						}
					});
			Ext.create('Ext.tree.Panel', {
						title : 'Tree Panel Example',
						store : store,
						width : 200,
						height : 300,
						renderTo : document.body
					});
		})