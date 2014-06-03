(function () {

    console.log("main");

    mymodule.moduleMethod();

    console.log(mymodule.moduleProperty);

    mymodule.anotherMethod();

    mymodule.looseMethod();

    mymodule.sharedMethod();

    mymodule.sub.moduleSub();

    modapple.moduleMethod();

    var apple1 = new modapple.Apple("fuji");
    console.log(apple1.getInfo());
    console.log(apple1.getInfo2());

    var apple2 = new modapple.Apple("granny");
    console.log(apple2.getInfo());
    console.log(apple2.getInfo2());

}());

/**
from:
http://www.adequatelygood.com/JavaScript-Module-Pattern-In-Depth.html
*/

