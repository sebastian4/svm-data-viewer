Ext.define('Mm.model.Form', {
    extend: 'Ext.data.Model',
    fields: ['id', 
             'network', 
             { name: 'allow', type: 'bool'},
             { name: 'allocation', type: 'float'},]
});