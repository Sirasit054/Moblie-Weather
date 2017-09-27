
$(function () {
    
    $("#loadwebapi").click(function(){
        $("#wpanel").empty();
        var city = $("#city").val();
        var url="http://api.openweathermap.org/data/2.5/weather?q="+ city
        url += "&APPID=0ac07190834f811cfdd8480fe0f07850";

        $.get(url, function(data){
          
            console.log(data);
            var row="<h3>" + data.weather[0].description +"</h3>";
                row +="<h3>" + data.main.temp/10 +"</h3>";
            $("#wpanel").append(row);
            });
         
        });

    });

