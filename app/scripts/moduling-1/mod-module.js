var mymodule = (function () {

    var my = {},
        privateVariable = 1;

    function privateMethod() {
        console.log("private f");
    }

    my.moduleProperty = 1;

    my.moduleMethod = function () {
        privateMethod();
        console.log("public f");
    };

    return my;
}());
