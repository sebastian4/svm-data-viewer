$(function() {
    
    var dataset = [
        
        {label: "Arch", data: 24, color: "blue"},
        {label: "Red Hat", data: 38, color: "red"},
        {label: "Mint", data: 45, color: "green"},
        {label: "Ubuntu", data: 134, color: "orange"}
        
    ];
    
    var options = {
        series: {
            pie: {
                show: true,
                tilt: 0.6,
//                innerRadius: 0.5,
                label: {
                    show: true,
                    radius: 0.8,
                    formatter: function(label, series){
                        return '<div style="border:1px solid grey; font-size:12pt;\n\
                                 text-align:center; padding:5px; color:white;">' +
                               label + ':' + Math.round(series.percent) + '%</div>';
                    },
                    background: {
                        opacity: 0.6,
                        color: '#000'
                    }
                }
                
            },
             legend: {
                show: true //default
                
             }
        }
    };


    $.plot($('#placeholder'), dataset, options);
});


