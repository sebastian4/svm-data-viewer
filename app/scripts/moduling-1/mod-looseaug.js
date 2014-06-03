var mymodule = (function (my) {

    my.looseMethod = function () {
        console.log("loose f");
    };

    return my;
}(mymodule  || {}));
