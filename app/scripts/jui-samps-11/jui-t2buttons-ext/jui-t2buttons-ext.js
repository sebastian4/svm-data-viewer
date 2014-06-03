/**
 * t2buttonsext: and extension of t2buttons
 *
 * @author sebastian lopez
 */

$.widget("jui.t2buttonsext", $.jui.t2buttons, {

    // OPTIONS

    options: {
        legend: false
    },

    // PRIVATE FUNCTIONS

    _create: function () {

        console.log(this.options.name+" create ext");

        // Call the base
        this._super();

        this._setOption('legend', this.options.legend);
    },
    _beauLegend: function(legend) {
        var newlegend = "--==-- "+legend+" --==--";
        return newlegend;
    },

    // PUBLIC FUNCTIONS - API

    refresh: function() {

        console.log(this.options.name+" refresh ext");

        this._super();

        if (this.options.legend) {
            this._private.midValue.prop( "title", this._beauLegend(this.options.value));
        }

    }

});