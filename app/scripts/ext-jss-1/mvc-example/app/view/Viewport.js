/**
 * @autor Manuel Ángel de la Vega manuel.delavega@beeva.com
 */
Ext.define("MVCExample.view.Viewport", {
    extend  : "Ext.container.Viewport",
    requires: ["MVCExample.view.imagenes.Grid", "MVCExample.view.imagenes.DataView"],
    layout  : "border",
    cls     : "viewport",
    items   : [
        {
            xtype      : "form",
            region     : "west",
            layout     : "anchor",
            collapsible: true,
            width      : 200,
            title      : "Criterios de búsqueda",
            defaults   : {
                labelSeparator: "",
                labelAlign    : "top",
                margin        : "10 7 10 7"
            },
            items      : [
                {
                    xtype     : "textfield",
                    fieldLabel: "nombre",
                    anchor    : "100%",
                    name      : "name"
                }
            ]
        },
        {
            xtype: "imagenesgrid",
            store: "Imagenes",
            region: "center"
            /*store: Ext.create("Ext.data.Store", {
             fields: [
             {
             name: "name",
             type: "string"
             },
             {
             name: "size",
             type: "float"
             },
             {
             name      : "createdAt",
             type      : "date",
             dateFormat: "dmY"
             },
             {
             name   : "type",
             mapping: "name",
             convert: function (name) {
             //Nunca hacer conversiones que impliquen visualización.
             //Sólo debe de utilizarse para crear nuevos campos de datos puros
             var splitted = name.split(".");
             return splitted[splitted.length - 1];
             }
             }
             ],
             data  : [
             {
             "name"     : "buscaminas.jpg",
             "size"     : 59.8,
             "createdAt": "15122013"
             },
             {
             "name"     : "no es tan sencillo.jpg",
             "size"     : 55.2,
             "createdAt": "15122013"
             },
             {
             "name"     : "password.jpg",
             "size"     : 61.6,
             "createdAt": "15122013"
             },
             {
             "name"     : "usb.jpg",
             "size"     : 105.9,
             "createdAt": "15122013"
             },
             {
             "name"     : "wallpaper.jpg",
             "size"     : 26.8,
             "createdAt": "15122013"
             }
             ]
             })*/
        },
        {
            xtype: "imagenesdataview",
            store: "Imagenes",
            region : "south",
            height : 400,
            collapsible : true,
            collapsed: true
        }
    ]

});