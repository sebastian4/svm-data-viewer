/**
 * @autor Manuel Ángel de la Vega manuel.delavega@beeva.com
 */
Ext.define("MVCExample.model.Imagen", {
    extend: "Ext.data.Model",
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
    proxy : {
        type  : "ajax",
        url   : "data/json/imagenes.json",
        reader: {
            type: "json",
            root: "data"
        }
    }
});