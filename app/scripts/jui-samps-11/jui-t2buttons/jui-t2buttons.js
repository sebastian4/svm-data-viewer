/**
 * t2buttons: shows 2 buttons that increase/decrease
 *
 * @author sebastian lopez
 */

$.widget("jui.t2buttons", {

    // OPTIONS

    options: {
        name: "default",
        lowVal: 0,
        highVal: 10,
        value: 0,
        b1name: "button 1",
        b2name: "button 2",
        b1click: function() {},
        b2click: function() {}
    },

    // OPTIONS FUNCTIONS

    _setOption: function( key, value ) {
        if ( key === "value" ) {
            value = this._constrain( value );
        }
        this._super( key, value );
    },
    _setOptions: function( options ) {
        this._super( options );
        this.refresh();
    },

    // PRIVATE FUNCTIONS

    _create: function() {

        console.log(this.options.name+" create");

        this.element.addClass( "jui-t2buttons" );

        this._private = {
            containerDiv: null,
            button1: null,
            midValue: null,
            button2: null
        }

        this._createMarkup();

        // Events
        this._on({
            'click .btn1': function (ev) {
                this.options.value--;
                this.options.value = this._constrain( this.options.value );
                this.refresh();

                this.options.b1click(ev);
            },
            'click .btn2': function (ev) {
                this.options.value++;
                this.options.value = this._constrain( this.options.value );
                this.refresh();

                this.options.b2click(ev);
            }
        });

    },
    _createMarkup: function() {

        console.log(this.options.name+" createMarkup");

        this._private.containerDiv = $("<div class='buttons-container-div'></div>").appendTo(this.element);
            this._private.button1 = $("<button class='btn1'>").appendTo(this._private.containerDiv);
            this._private.midValue = $("<span class='midval'></span>").appendTo(this._private.containerDiv);
            this._private.button2 = $("<button class='btn2'>").appendTo(this._private.containerDiv);

        this.refresh();

    },
    _constrain: function( value ) {
        if ( value >= this.options.highVal ) {
            value = this.options.highVal;
            this._trigger( "high", null, { value: this.options.highVal } );
        }
        if ( value <= this.options.lowVal ) {
            value = this.options.lowVal;
            this._trigger( "low", null, { value: this.options.lowVal } );
        }
        return value;
    },

    // PUBLIC FUNCTIONS - API

    refresh: function() {
        console.log(this.options.name+" refresh");

        this._private.button1.text(this.options.b1name);
        this._private.button2.text(this.options.b2name);

        this._private.midValue.html(this.options.value);
    },
    destroy: function() {
        this.element
            .removeClass( "jui-t2buttons" )
            .text( "" );

        // Call the base destroy function.
        $.Widget.prototype.destroy.call( this );
    }

});

