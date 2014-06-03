$(function () {

    $('#ss1').makeTextColored();

    $('#ss2').makeTextColored({
        color: 'green',
        backgroundcolor: 'black'
    });

    $.fn.addEllipsis.format = function( txt ) {
        return "<strong>" + txt + "</strong>";
    };

    $('#ss3').makeTextColored().addEllipsis({
        onEllipsing: function() {
            console.log("on ellipsing");
        }
    });

    $('#ss4').addEllipsis().addEllipsis();

    $('#menu1').animateMenu({
        animatePadding: 30,
        defaultPadding: 14
    });

    $('#menu2').animateMenu();

    $('#pp11').reverseText();

    $('.withtooltip1').myTooltip({
        rounded: true
    });

    $('.withtooltip2').myTooltip({
        background: '#232323',
        color: 'green'
    });
	
});
