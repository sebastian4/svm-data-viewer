/**
 * @autor Manuel Ángel de la Vega manuel.delavega@beeva.com
 */
Ext.define("MVCExample.store.Imagenes", {
    extend: "Ext.data.Store",
    model : "MVCExample.model.Imagen",
    //es recomendable que el store tenga también una instancia del proxy (que debe coincidir con el del model). Esto es porque si únicamente
    //lo contiene el model, el Store utiliza esa instancia. Si necesitáramos varios Stores, cada uno de ellos estaría vinculado a esa única instancia
    //del model, compartiendo filtrado
    proxy : {
        type  : "ajax",
        url   : "data/json/imagenes.json",
        reader: {
            type: "json",
            root: "data"
        }
    }
});