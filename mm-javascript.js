

var gMap;

var favoritePlaces = [
    {content:'<strong>Bolingbrook, Illinois <strong>', coordinates:{lat:41.69883961487449,lng:-88.06836867790985}},
    {content:'<strong>Enid, Oklahoma <strong>', coordinates:{lat:36.395826051636874,lng:-97.87845010859832}},
    {content:'Orlando, Florida', coordinates:{lat:28.538469499938245,lng:-81.37897517976226}},
    {content:'Emerald Isle, North Carolina', coordinates:{lat:34.67820348669291,lng:-76.95084593743438}},
    {content:'Little Rock, Arkansas', coordinates:{lat:35.20132697878451,lng:-91.83182803558196}},
    {content:'Chicago, Illinois', coordinates:{lat:41.87829982774071,lng:-87.62983575092619}},
    {content:'Merrillville, Indiana', coordinates:{lat:41.483112040030086,lng:-87.33278707790983}},
    {content:'Wisconsin Dells, Wisconsin', coordinates:{lat:43.62772596909801,lng:-89.77095253558198}},
    {content:'Panama City Beach, Florida', coordinates:{lat:30.176862109802737,lng:-85.80543962023775}},
    {content:'Cocoa Beach, Florida', coordinates:{lat:28.320376814341007,lng:-80.60751374907377}}
]; 
var currentPlaceIndex = 9;
var currentPlace = favoritePlaces[currentPlaceIndex];
var score = 0;
var i = 0;

function initApplication() {
    console.log('Map Mania Lite - Starting!');
}

// initMap is a callback function that is initiated as part of the Google Maps API call at the bottom
// of the HTML file. 
function initMap() {
    // Create a new map and assign it to gMap
    gMap = new google.maps.Map(document.getElementById('myMapID'), {
        center: {lat: 41.878, lng: 10}, zoom: 3});

    google.maps.event.addListener(gMap, 'idle', function() {
        updateGame()
    });

    
    
}

function updateGame() {
    console.log('function UpdateGame() google-maps-step-03!');
    var zoomLevel = gMap.getZoom()
    var inBounds = false;


    console.log("inBounds:"+inBounds+" zoomLevel:"+zoomLevel);
}

function SetHint(hint) {
    document.getElementById("hint-id").value = hint;  
}

function SetScore() {
    document.getElementById("score-id").value = score; 
}
function Guess(){
    var guess = document.getElementById('guess-id').value;
    var hint = document.getElementById('Hint').value;
    if(guess == "Bolingbrook, Illinois" && hint == 1){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:41.69883961487449,lng:-88.06836867790985}, map:gMap});
    }
    if(guess == "Enid, Oklahoma" && hint == 2){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:36.395826051636874,lng:-97.87845010859832}, map:gMap});
    }
    if(guess == "Orlando, Florida" && hint == 3){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:28.538469499938245,lng:-81.37897517976226}, map:gMap});
    }
    if(guess == "Emerald Isle, North Carolina" && hint == 4){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:34.67820348669291,lng:-76.95084593743438}, map:gMap});
    }
    if(guess == "Little Rock, Arkansas" && hint == 5){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:34.67820348669291,lng:-76.95084593743438}, map:gMap});
    }
    if(guess == "Chicago, Illinois" && hint == 6){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:41.87829982774071,lng:-87.62983575092619}, map:gMap});
    }
    if(guess == "Merrillville, Indiana" && hint == 7){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:41.483112040030086,lng:-87.33278707790983}, map:gMap});
    }
    if(guess == "Wisconsin Dells, Wisconsin" && hint == 8){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:43.62772596909801,lng:-89.77095253558198}, map:gMap});
    }
    if(guess == "Panama City Beach, Florida" && hint == 9){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:30.176862109802737,lng:-85.80543962023775}, map:gMap});
    }
    if(guess == "Cocoa Beach, Florida" && hint == 10){
    score += 1;
    var marker = new google.maps.Marker({position:{lat:28.320376814341007,lng:-80.60751374907377}, map:gMap});
    }

    if(guess =="winner winner chicken dinner"){
        var marker = new google.maps.Marker({position:{lat:41.69883961487449,lng:-88.06836867790985}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:36.395826051636874,lng:-97.87845010859832}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:28.538469499938245,lng:-81.37897517976226}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:34.67820348669291,lng:-76.95084593743438}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:34.67820348669291,lng:-76.95084593743438}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:41.87829982774071,lng:-87.62983575092619}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:41.483112040030086,lng:-87.33278707790983}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:43.62772596909801,lng:-89.77095253558198}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:30.176862109802737,lng:-85.80543962023775}, map:gMap});
        var marker = new google.maps.Marker({position:{lat:28.320376814341007,lng:-80.60751374907377}, map:gMap});
        score = 10;
    }

    if(score == 10){
        window.alert("You Win!");
    }

    SetScore(score);

    
}