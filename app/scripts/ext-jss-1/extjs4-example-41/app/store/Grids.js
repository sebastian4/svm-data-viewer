Ext.define('Mm.store.Grids', {
    extend: 'Ext.data.Store',
    model: 'Mm.model.Grid',
    autoDestroy: true,
    autoLoad: true,
    pageSize: 4,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/listgridss.json',       	
        },
        reader: {
            type: 'json',
            root: 'grids',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});