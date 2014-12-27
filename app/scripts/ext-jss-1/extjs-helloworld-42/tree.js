Ext.onReady(function() {
			Ext.create('Ext.tree.Panel', {
						renderTo : Ext.getBody(),
						title : 'Simple Tree',
						width : 300,
						height : 200,
						root : {
							name : 'Root',
							exapnded : true,
							children : [{
										text : 'Child - 1',
										leaf : true
									}, {
										text : 'Child - 2'
									}, {
										text : 'Child - 3',
										expanded : true,
										children : [{
													text : 'GrandChild - 1',
													leaf : true
												}, {
													text : 'GrandChild - 2'
												}]
									}]
						}
					});
			Ext.create('Ext.tree.Panel', {
						renderTo : document.body,
						title : 'Tree Example',
						width : 300,
						height : 200,
						fields : ['name', 'description'],
						columns : [{
									xtype : 'treecolumn',
									text : 'Name',
									dataIndex : 'name',
									width : 150,
									sortable : true
								}, {
									text : 'Description',
									dataIndex : 'description',
									sortable : true
								}],
						root : {
							name : 'Root',
							description : 'Root Description',
							expanded : true,
							children : [{
										name : 'Child 1',
										description : 'Description 1',
										leaf : true
									}, {
										name : 'Child 2',
										description : 'Description 2',
										leaf : true
									}]
						}
					})
		});