var mymodule = (function (my) {

    var privateVariable = my.privateVariable = my.privateVariable || {};

    my.sharedMethod = function () {
        console.log("shared f");
        console.log(privateVariable);
    };

    return my;
}(mymodule || {}));
