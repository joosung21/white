// Google Map
function initMap() {
    // Create new Google Map
    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 10,
      center: {lat: 33.383886, lng: 126.542081}, //제주도
      mapTypeControl: false,
      draggable: true,
      //draggable: !("ontouchend" in document),
      panControl: true,
      scaleControl: true
    });

    // get Json Data
    var hosts = [];
    $.ajax({
      url: '/js/test.json',
      async: false,
      dataType: 'json',
      success: function (json) {
        hosts = json;
      }
    });

    // marker icon image
    var icon = "/images/pin3.png";
    
    //Add some markers to the map.
    var markers = hosts.map(function(host, i) {
        var myLatlng = new google.maps.LatLng(host.lat,host.lng);
        var marker = new google.maps.Marker({
            position: myLatlng,
            title: host.title,
            map: map,
            icon: icon
        });
        infoWindow(marker, map, host.title, host.address, host.img, "view")
        return marker;
    });


    // Set a marker clusterer style.
    var clusterStyles = [
      {
        textColor: 'white',
        textSize: 22,
        url: 'images/cluster.png',
        height: 70,
        width: 70
      }
    ];

    var mcOptions = {
        gridSize: 50,
        styles: clusterStyles,
        maxZoom: 15
    };

    // Add a marker clusterer to manage the markers.
    var markerCluster = new MarkerClusterer(map, markers, mcOptions);
    

    // global infowindow
    google.maps.event.addDomListener(window, "load", initMap);

    var iw = new google.maps.InfoWindow({
      maxWidth: 350
    });

    function infoWindow(marker, map, title, address, image, url) {
      google.maps.event.addListener(marker, 'click', function() {
        var html = "<div class='infowindow'><a href='view'><img src='" + image + "' class='img' style='width:100%' /></a><h3>" + title + "</h3><p>" + address + "<br/><a href='" + url + "'>자세히 보기</a></p></div>";
        // set the content (saved in html variable using function closure)
        iw.setContent(html);
        // open the infowindow on the marker.
        iw.open(map, marker);
      });
    }

    // Fit bound
    var bounds = new google.maps.LatLngBounds();

    for (var i=0; i<markers.length; i++) {
        if(markers[i].getVisible()) {
            bounds.extend( markers[i].getPosition() );
        }
    }

    map.fitBounds(bounds);

    }

$(document).ready(function() {


});
