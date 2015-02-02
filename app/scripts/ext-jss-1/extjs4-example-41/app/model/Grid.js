Ext.define('Mm.model.Grid', {
    extend: 'Ext.data.Model',
    fields: ['id', 
             'network', 
             { name: 'allow', type: 'bool'},
             { name: 'allocation', type: 'float'},]
});