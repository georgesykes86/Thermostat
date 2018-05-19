function Geolocator(){
}

Geolocator.prototype.getLocation = function(callback) {
    console.log("getting_location")
    var callback = callback
    var geolocator = this
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(function(position) {
            console.log("calling back with" + callback + position);
            geolocator._showPosition(position,callback);
         },
         function(error) { geolocator._showError(error) } );
    } else {
        console.log("Geolocation is not supported by this browser.");
        that._showError({code: "Geolocation is not supported by this browser."});
    }
}

Geolocator.prototype._showPosition = function(position, callback) {
    console.log("success setting position")
    this.position =  {
        lat: position.coords.latitude,
        lon: position.coords.longitude
    }
    console.log(this.position)
    callback();
}

Geolocator.prototype._showError = function(error){
    console.log("failed")
    console.log(error)
    switch(error.code) {
        case error.PERMISSION_DENIED:
            console.log("User denied the request for Geolocation.")
            break;
        case error.POSITION_UNAVAILABLE:
            console.log("Location information is unavailable.")
            break;
        case error.TIMEOUT:
            console.log("The request to get user location timed out.")
            break;
        case error.UNKNOWN_ERROR:
            console.log("An unknown error occurred.")
            break;
        default:
            break;

    }
    return null;
}
