Ext.define('Mm.store.Forms', {
    extend: 'Ext.data.Store',
    model: 'Mm.model.Form',
    autoDestroy: true,
    autoLoad: true,
    proxy: {
        type: 'ajax',
        api: {
            read: 'data/listforms.json',      	
        },
        reader: {
            type: 'json',
            root: 'forms',
            totalProperty: 'total',
            successProperty: 'success'
        }
    }
});