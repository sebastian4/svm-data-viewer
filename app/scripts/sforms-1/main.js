$(function () {
    
    ////
    
    var startingNo = 0;
    var $node = "";
    for(varCount=0;varCount<=startingNo;varCount++){
        var displayCount = varCount+1;
        $node += '<p><label for="var'+displayCount+'">Variable '+displayCount+': </label><input type="text" name="var'+displayCount+'" id="var'+displayCount+'"><span class="removeVar">Remove Variable</span></p>';
    }
    //add them to the DOM
    $('form#mustbebuilt').prepend($node);
    //remove a textfield    
    $('form#mustbebuilt').on('click', '.removeVar', function(){
       $(this).parent().remove();
    });
    //add a new node
    $('#addVar').on('click', function(){
    varCount++;
    $node = '<p><label for="var'+varCount+'">Variable '+varCount+': </label><input type="text" name="var'+varCount+'" id="var'+varCount+'"><span class="removeVar">Remove Variable</span></p>';
    $(this).parent().before($node);
    });
    
    $("#submitmustbebuilt").click(function() {
        var myData = $("form#mustbebuilt").serialize();
        console.log(myData);
        var myArrData = $("form#mustbebuilt").serializeArray ();
        console.log(myArrData);
    });
    
    ////
    
    var rowNum = 0;
    
    $("input.addrowbutton").click(function() {
        addRow(document.getElementById("calendarscripts"));
    });
    
    function addRow(frm) {
        rowNum ++;
        var row = '<p id="rowNum'+rowNum+'">Item quantity: <input type="text" name="qty[]" size="4" value="'+frm.add_qty.value+'"> Item name: <input type="text" name="name[]" value="'+frm.add_name.value+'"> | <input type="button" value="Remove" class="removable"></p>';
        $('#itemRows').append(row);
        frm.add_qty.value = '';
        frm.add_name.value = '';
    }

    $('form#calendarscripts').on('click', '.removable', function(){
       $(this).parent().remove();
    });
    
    $("#submitcalendarscripts").click(function() {
        var myData = $("form#calendarscripts").serialize();
        console.log(myData);
        var myArrData = $("form#calendarscripts").serializeArray ();
        console.log(myArrData);
    });
    
    ////
    
    var rscounter = 1;
    var rslimit = 3;
    
    $("#dynamicInputButton").click(function() {
        addInput("dynamicInputDiv");
    });
    
    function addInput(divName){
         if (rscounter == rslimit)  {
              alert("You have reached the limit of adding " + rscounter + " inputs");
         }
         else {
              var newdiv = document.createElement('div');
              newdiv.innerHTML = "Entry " + (rscounter + 1) + " <br><input type='text' name='myInputs[]'>";
              document.getElementById(divName).appendChild(newdiv);
              rscounter++;
         }
    }
    
    $("#dynamicSubmitButton").click(function() {
        var myData = $("form#randomsnippets").serialize();
        console.log(myData);
        var myArrData = $("form#randomsnippets").serializeArray ();
        console.log(myArrData);
    });
    
	////
    
});
