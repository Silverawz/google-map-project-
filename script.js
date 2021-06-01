const markers = [
    {
        lat: 19.1759668,
        lng: 72.79504659999998,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3',
        description: "a"
    },
    {
        lat: 19.0883595,
        lng: 72.82652380000002,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-3.mp3',
        description: "b"
    },
    {
        lat: 18.9542149,
        lng: 72.81203529999993,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-5.mp3',
        description: "c"
    },
    {
        lat: 18.979006,
        lng: 72.83388300000001,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-7.mp3',
        description: "d"
    },
    {
        lat: 19.2147067,
        lng: 72.91062020000004,
        url: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-11.mp3',
        description: "e"
    }];

var audio = null;


window.onload = function () {
    initMap();
    audio = document.getElementById('audio');
}








// Initialize and add the map
function initMap() {
    // The location of Uluru
    //const uluru = { lat: -25.344, lng: 131.036 };
    // The map, centered at Uluru


    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 10,
      center: markers[0],
    });




    /* The marker, positioned at Uluru
    const marker = new google.maps.Marker({
      position: uluru,
      map: map,
    });
    */


   
    for(let i = 0; i < markers.length; i++){
        var marker = new google.maps.Marker({
            position: {
                lat: markers[i].lat,
                lng: markers[i].lng    
            },
            map: map,
          });
          marker.sound = markers[i].url;
          markerClick(marker, markers[i].description);
    }
  }

  function markerClick(marker, description) {  
    const infowindow = new google.maps.InfoWindow({
      content: description,
    });
    marker.addListener("click", () => {
      infowindow.open(marker.get("map"), marker);
      audio.pause();
      audio.setAttribute('src', marker.sound);
      audio.load();
      audio.play();
    });
  }
