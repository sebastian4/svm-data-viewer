$(function () {

    console.log("starting all buttons");

    ////

	var t2b1 = $("#buttons1").t2buttons({
        name: "buttons1",
        lowVal: 0,
        highVal: 5,
        value: 0,
        b1name: "first button",
        b2name: "second button",
        b1click: function(ev) { console.log("b1 clicked first button"); },
        b2click: function(ev) { console.log("b1 clicked second button"); }
    })
    .bind( "t2buttonshigh", function( event, data ) {
        console.log( "b1 reached high value " + data.value );
    })
    .bind( "t2buttonslow", function( event, data ) {
        console.log( "b1 reached low value " + data.value );
    });

    t2b1 = $("#buttons1").t2buttons({
        value: -2
    });

    ////

    var t2b2 = $("#buttons2").t2buttons();

    ////

    var t2b3 = $("#buttons3").t2buttonsext({
        name: "buttons3",
        legend: true,
        b1name: "primer button",
        b2name: "segundo button",
        b1click: function(ev) { console.log("b3 clicked primer button"); },
        b2click: function(ev) { console.log("b3 clicked segundo button"); }
    })
    .bind( "t2buttonsexthigh", function( event, data ) {
        console.log( "b3 reached high value " + data.value );
    });

});
