/**
 * @autor Manuel Ángel de la Vega manuel.delavega@beeva.com
 */
Ext.define("MVCExample.controller.ImagenesController", {
    extend: "Ext.app.Controller",
    stores: ["Imagenes"],
    views : ["Viewport"],

    refs: [
        {
            selector: "viewport form",
            ref     : "criteriosBusqueda"
        },
        {
            selector: "viewport imagenesdataview",
            ref     : "imagenesDataView"
        },
        {
            selector: "viewport imagenesgrid",
            ref     : "imagenesGrid"
        }
    ],

    init: function () {
        var me = this;
        me.control({
            "viewport imagenesgrid": {
                beforerender: me.onImagenesGridBeforeRender,
                select      : me.onImaganesSelect
            },
            "viewport imagenesdataview": {
                beforedeleteimagen: me.onBeforeDeleteImagen,
                deleteimagen      : me.onDeleteImagen
            },
            "viewport form field"  : {
                change: me.onFieldChanged
            }
        });
    },

    /**
     * Llama a las ejecuciones necesarias cuando se dispara el evento beforerender del MVCExample.view.imagenes.Grid
     * @param {MVCExample.view.imagenes.Grid} imagenesGrid
     */
    onImagenesGridBeforeRender: function (imagenesGrid) {
        var me = this;
        me.search();
    },

    /**
     * Se ejecuta cuando se dispara el evento change de cualquier campo del formulario
     * criterios de búsqueda
     * @param field campo que cambia
     * @param value nuevo valor
     */
    onFieldChanged: function (field, value) {
        var me = this;
        console.log("el campo '" + field.name + "' ha cambiado con el valor '" + value + "'");
        me.search();
    },

    /**
     * Se ejecuta cuando se dispara el evento select del MVCExample.view.imagenes.Grid.
     * Selecciona el mismo registro en el dataview MVCExample.view.imagenes.DataView
     *
     * @param {Ext.selection.RowModel} selModel
     * @param {MVCExample.model.Imagen} imagen
     */
    onImaganesSelect: function (selModel, imagen) {
        var me = this;
        me.getImagenesDataView().getView().getSelectionModel().select(imagen);
    },

    /**
     * Se dispara cuando se borra una imagen
     * @param {MVCExample.view.imagenes.DataView} imagenDataView
     * @param {MVCExample.model.Imagen} imagen
     */
    onDeleteImagen: function (imagenDataView, imagen) {
        var me = this;
        console.log("Borrada la imagen '" + imagen.get("name") + "'. Actualizamos número de resultados");
        me.getImagenesGrid().setTitle(Ext.util.Format.format("Resultados [{0}]",imagenDataView.getStore().getCount()));
    },

    /**
     * Se dispara antes de borrar una imagen
     * @param {MVCExample.view.imagenes.DataView} imagenDataView
     * @param {MVCExample.model.Imagen} imagen
     * @returns {boolean} Si devuelve false no se borrará la imagen
     */
    onBeforeDeleteImagen: function (imagenDataView, imagen) {
        console.log("Se va a borrar la imagen '" + imagen.get("name") + "'");
        return true;
    },

    /**
     * Realiza la carga del store Imagenes, utilizando como criterios de búsqueda
     * los valores del formulario de criterios de búsqueda. Para que el filtrado
     * lo haga en remoto, es necesario poner la propiedad remote a true en el
     * store MVCExample.store.Imagenes
     */
    search: function () {
        var me = this, criterios, store, filters = [], prop;

        store = me.getImagenesStore();
        criterios = me.getCriteriosBusqueda().getValues();

        store.clearFilter(); //limpiamos filtros

        //recogemos los nuevos filtros
        for (prop in criterios) {
            if (criterios.hasOwnProperty(prop)) {
                filters.push({
                    property: prop,
                    value   : criterios[prop]
                });
            }
        }

        store.filter(filters); //indicamos al store cuales son los nuevos filtros

        //cargamos el store
        store.load({
            callback: function (imagenes, operation, success) {
                var len;
                if (success) {
                    len = imagenes.length;
                    console.log("Cargadas " + len + " imágenes");
                    me.getImagenesGrid().setTitle(Ext.util.Format.format("Resultados [{0}]",len));
                } else {
                    console.error("Error al cargar las imágenes");
                }
            }
        });
    }
});