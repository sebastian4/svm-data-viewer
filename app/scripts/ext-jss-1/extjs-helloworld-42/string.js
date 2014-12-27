Ext.onDocumentReady(function() {
	var anArray = ["Item 1", "Item 2"];
	var aBoolean = true;
	var aDate = new Date();
	var aFunction = function() {
		return true;
	};
	var aNumber = 26;
	var anObject = {};
	var aString = 'String of Text';
	var anotherString = '26';
	var undefinedVar;

	// is, supports...
	console.log(Ext.String
			.htmlEncode("<strong>This is text & it is bold</strong>"));
	console
			.log(Ext.String
					.htmlDecode("&lt;strong&gt;This is text &amp; it is bold&lt;/strong&gt;"));
	console.log("Mac : " + Ext.is.Mac);
	console.log("Windows : " + Ext.is.Windows);
	console.log("Desktop : " + Ext.is.Desktop);
	console.log("Chrome : " + Ext.isChrome);
	console.log("IE : " + Ext.isIE);
	console.log("IE6 : " + Ext.isIE6);
	console.log("Webkit : " + Ext.isWebKit);
	console
			.log("Supports : " + Ext.supports.CSS3BoxShadow
					+ Ext.supports.Touch);
	console.log("Agent : " + Ext.userAgent);

	// variable, type...
	console.log("Boolean : " + Ext.typeOf(aBoolean));
	console.log("Array : " + Ext.typeOf(anArray));
	console.log("Date : " + Ext.typeOf(aDate));
	console.log("Function : " + Ext.typeOf(aFunction));
	console.log("Number : " + Ext.typeOf(aNumber));
	console.log("Object : " + Ext.typeOf(anObject));
	console.log("String : " + Ext.typeOf(aString));
	console.log("AnotherString : " + Ext.typeOf(anotherString));
	console.log("Undefined : " + Ext.typeOf(undefinedVar));

	console.log("isArray : " + Ext.isArray(anArray)); // true
	console.log("isBoolean : " + Ext.isBoolean(aBoolean)); // true
	console.log("isDate : " + Ext.isDate(aDate)); // true
	console.log("isDefined : " + Ext.isDefined(undefinedVar)); // false
	console.log("isEmpty : " + Ext.isEmpty(undefinedVar)); // true
	console.log("isFunction : " + Ext.isFunction(aFunction)); // true
	console.log("isIterable : " + Ext.isIterable(anArray)); // true
	console.log("isNumber : " + Ext.isNumber(aNumber)); // true
	console.log("isNumeric : " + Ext.isNumeric(anotherString)); // true
	console.log("isObject : " + Ext.isObject(anObject)); // true
	console.log("isPrimitive : " + Ext.isPrimitive(aNumber)); // true
	console.log("isString : " + Ext.isString(aString)); // true

})