
$(function(){

  console.log("init 2");

  $("#example").dataTable({
    "aaData":[
      ["Sitepoint","http://sitepoint.com","Blog","2013-10-15 10:30:00"],
      ["Flippa","http://flippa.com","Marketplace","null"],
      ["99designs","http://99designs.com","Marketplace","null"],
      ["Learnable","http://learnable.com","Online courses","null"],
      ["Rubysource","http://rubysource.com","Blog","2013-01-10 12:00:00"]
    ],
    "aoColumnDefs":[{
          "sTitle":"Site name"
        , "aTargets": [ "site_name" ]
    },{
          "aTargets": [ 1 ]
        , "bSortable": false
        , "mRender": function ( url, type, full )  {
            return  '<a href="'+url+'">' + url + '</a>';
        }
    },{
          "aTargets":[ 3 ]
        , "sType": "date"
        , "mRender": function(date, type, full) {
            return (full[2] == "Blog")
                      ? new Date(date).toDateString()
                      : "N/A" ;
        }
    }]
  });

})
