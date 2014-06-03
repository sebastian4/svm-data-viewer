var modapple = (function () {

    var my = {},
        privateVariable = 1;

    function privateMethod() {
        console.log("apple private f");
    }

    my.moduleProperty = 1;

    my.moduleMethod = function () {
        privateMethod();
        console.log("apple public f");
    };

    //

    //function Apple(type) { //works too
    var Apple = function (type) {
        console.log("init apple "+type);
        this.type = type;
        this.color = "red";
        this.getInfo = function() {
            return this.color + ' ' + this.type + ' apple';
        };
        return this;
    };

    Apple.prototype.getInfo2 = function() {
        return this.color + ' ' + this.type + ' apple';
    };

    my.Apple = Apple;

    return my;
}());
