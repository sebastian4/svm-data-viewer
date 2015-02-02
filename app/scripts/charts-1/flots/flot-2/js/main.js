$(function() {

    'use strict';
    
    var data = [
        [1, 130], [2, 40], [3, 80], [4, 160], [5, 159], [6, 370],
        [7, 330], [8, 350], [9, 370], [10, 400], [11, 330], [12, 350]
    ];
 
    var dataset = [{
        label: "da Line",
        data: data
    }];

    console.log("dataset label: "+dataset.label+" "+dataset.label);
    
    var options = {
        series: {
            lines: {
                show: true, //default
                fill: true
            }, 
            points: {
                radius: 5,
                show: true               
            }
        }
    };

    $.plot($('#placeholder'), dataset, options);

});


