mymodule.sub = (function () {
    var my = {};

    my.moduleSub = function () {
        console.log("public sub f");
    };

    return my;
}());