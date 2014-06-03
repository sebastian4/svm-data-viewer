/**
 * @autor Manuel Ángel de la Vega manuel.delavega@beeva.com
 */
Ext.onReady(function () {
    Ext.application({
        //namespace de la aplicación
        name              : "MVCExample",
        //hace el vínculo entre el namespace de la aplicación (propiedad name)
        //con un directorio físico para la localización de los objetos
        appFolder         : "app",
        //Si es true, busca el archivo Viewport.js dentro de la ruta appFolder/view. Debe extender de Ext.container.Viewport
        autoCreateViewport: true, //busca el archivo
        //controllers que se cargarán al inciiar la aplicación
        controllers       : ["ImagenesController"]
    });
});