
$(function(){

  console.log("init 3");

  var oTable = $("#example").dataTable({
    "bServerSide": true,
    "sAjaxSource": "http://localhost:9000/scripts/jq-dttables-1/simple-3/data-source.json",
    "aoColumns": [{
      "mData":"name",
      "sTitle": "Site name"
    },{
      "mData": "url",
      "mRender": function ( url, type, full )  {
        return  '<a href="'+url+'">' + url + '</a>';
      }
    },{
      "mData": "editor.name"
    },{
      "mData": "editor.phone"
    },{
      "mData":"editor",
      "mRender": function(data){
        return data.email.join("<br>");
      }
    }]
  });

  $('#example').on('click', 'tr', function(){
      var oData = oTable.fnGetData(this);
      console.log(oData);
  });

})
