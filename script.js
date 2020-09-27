    // Algolia places API //

    $(document).ready(function(){

        (function() {
        var placesAutocomplete = places({
        appId: 'plN7IU9KL60M',
        apiKey: '7dbf0d051f67734266786c8810950b69',
        container: document.querySelector('#citySearch'),
        templates: {
            value: function(suggestion) {
            return suggestion.name;
            }
        }
        }).configure({
        type: 'city',
        aroundLatLngViaIP: false,
    });

    })();
    
    });

    // Event listener //
    $("#searchButton").on("click", function (event) {
        event.preventDefault()
        var city = $("#citySearch").val();
        var queryURL = "http://api.openweathermap.org/data/2.5/forecast?q=" + city + "&appid=a40b244cd362cb8879852fa0bd6bd301";
    
            $.ajax({
            url: queryURL,
            method: "GET",
            success: function (data) {
                console.log(data)
            }
            
    });
    });

    