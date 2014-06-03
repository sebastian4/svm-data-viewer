/**
 * @autor Manuel Ángel de la Vega manuel.delavega@beeva.com
 */
Ext.define("MVCExample.view.imagenes.Grid", {
    extend: "Ext.grid.Panel",
    alias : "widget.imagenesgrid",
    cls   : "imagenes-grid",
    title : "Resultados",

    initComponent: function () {
        var me = this;

        me.columns = [
            {
                dataIndex: "name",
                header   : "Nombre",
                flex     : 1
            },
            {
                xtype    : "templatecolumn",
                dataIndex: "size",
                align    : "right",
                tpl      : "{size} Kb",
                header   : "Tamaño"
            },
            {
                xtype    : "templatecolumn",
                dataIndex: "type",
                header   : "Tipo",
                align    : "center",
                tpl      : "<span class='tipo {type}'>{type}</span>"
            },
            {
                xtype    : "datecolumn",
                dataIndex: "createdAt",
                align    : "center",
                header   : "F. creación",
                format   : "d.m.Y"
            }
        ]

        me.callParent(arguments);
    }
});