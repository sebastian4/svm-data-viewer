/**
 * @autor Manuel Ángel de la Vega manuel.delavega@beeva.com
 */
Ext.define("MVCExample.view.imagenes.DataView", {
    extend    : "Ext.panel.Panel",
    alias     : "widget.imagenesdataview",
    requires  : ["Ext.view.View"],
    cls       : "imagenes-data-view",
    autoScroll: true,
    title     : "Visor",

    initComponent: function () {
        var me = this, tpl;

        if (me.store === null) {
            Ext.Error.raise("Debe definir un store mediante la propiedad store");
        }

        tpl = new Ext.XTemplate(
            '<div class="imagenes-wrapper">',
                '<tpl for=".">',
                    '<div class="imagen">',
                            '<div class="tbar">',
                                '<div class="delete">X</div>',
                            '</div>',
                        '<img src="/scripts/ext-jss-1/mvc-example/data/imgs/{name}">',
                    '</div>',
                '</tpl>',
            '</div>'

        );

        me.view = Ext.create("Ext.view.View", {
            itemSelector: "div.imagen",
            autoScroll  : true,
            store       : me.store,
            tpl         : tpl,
            overItemCls : "item-over"
        });

        me.view.on("select", function (dataViewModel, record) {
            me.fireEvent("select", me, record);
        });

        me.items = me.view;
        me.addEvents("select");

        me.callParent();

        me.addEvents("deleteimagen", "beforedeleteimagen");
    },

    /**
     * @override
     * Una vez renderizado el componente, buscamos el nodo del dom con la clase div.delete,
     * dentro del nodo padre.
     */
    afterRender: function () {
        var me = this;
        me.callParent();
        //Utiliza un patrón delegado para filtrar los clicks del componente
        //hasta que el nodo que haya recibido el click sea el div.delete. Es más óptimo
        //que escuchar un click en cada uno de los nodos div.delete
        me.mon(me.getEl(), "click", me.onDeleteImageClicked, me, {delegate: "div.delete"});
    },

    getView: function () {
        return this.view;
    },

    /**
     * Devuelve una instancia de un store
     * @returns {Ext.data.Store}
     */
    getStore: function () {
        var me = this, store = me.store;
        //ya que el store puede venir definido como una nueva instancia de un Ext.data.Store o
        //como un string (cuando utilizamos controllers) realizamos la siguiente comprobación.
        //cuando es un string, este está almacenado en el Ext.StoreManager, por lo que lo recogemos
        //de este gestor
        return store instanceof Ext.data.Store ? store : Ext.StoreManager.get(store);
    },

    /**
     * Se ejecuta cuando se pulsa el botón de borrar una imagen
     * @param evt
     */
    onDeleteImageClicked: function (evt) {
        var me = this, imagen;
        imagen = me.getView().getRecord(evt.getTarget("div.imagen"));
        if(me.fireEvent("beforedeleteimagen", me, imagen) !== false) { //primero, comprobamos que no se quiera parar por cualquier motivo la eliminación
            me.getStore().remove(imagen); //borramos la imagen del store
            me.fireEvent("deleteimagen", me, imagen); //notificamos que la imagen ha sido borrada
        }
    }
});