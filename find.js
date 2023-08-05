
function find() {
    iii = zonereturndata();
    var stylesArray = [
        {
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#b0b0b0"
                }
            ]
        },
        {
            "elementType": "labels.icon",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "elementType": "labels.text.stroke",
            "stylers": [
                {
                    "color": "#f5f5f5"
                }
            ]
        },
        {
            "featureType": "administrative.country",
            "elementType": "geometry.stroke",
            "stylers": [
              {
                "color": "#777777"
              }
            ]
          },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "administrative.land_parcel",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#bdbdbd"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "poi",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "poi.park",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "road",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#ffffff"
                }
            ]
        },
        {
            "featureType": "road.arterial",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#757575"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#dadada"
                }
            ]
        },
        {
            "featureType": "road.highway",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#616161"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels",
            "stylers": [
                {
                    "visibility": "off"
                }
            ]
        },
        {
            "featureType": "road.local",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        },
        {
            "featureType": "transit.line",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#e5e5e5"
                }
            ]
        },
        {
            "featureType": "transit.station",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#eeeeee"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "geometry",
            "stylers": [
                {
                    "color": "#c9c9c9"
                }
            ]
        },
        {
            "featureType": "water",
            "elementType": "labels.text.fill",
            "stylers": [
                {
                    "color": "#9e9e9e"
                }
            ]
        }
    ]
    
    
        var mapProp = {
        center: {lat: -22.350717558593193, lng: 148.99890009993928},
        zoom: 6,
        styles: stylesArray,
    };
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    let element = document.getElementById("grouplist");
    while (element.hasChildNodes()) {
        element.removeChild(element.firstChild)
    }
    for (i = 0; i < iii; i++) {
        var position = new google.maps.LatLng(pinlocat[i].lat, pinlocat[i].lng);
        marker = new google.maps.Marker({
            position: position,
            map: map,
            title: name_json[i],
            icon: { url: "pin_carryboy_red_O.png" }
        });
        google.maps.event.addListener(marker, 'click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i]);
                infoWindow.open(map, marker);
                map.setZoom(9);
                map.panTo(marker.getPosition());
            }
        })(marker, i));
        google.maps.event.addListener(map, 'click', function () {
            infoWindow.close(map, marker);
            map.setZoom(7);
        });
        let para = document.createElement("div");
        let top1 = document.createElement("h2");
        let top2 = document.createElement("h3");
        let node = document.createTextNode(name_json[i]);
        let nude = document.createTextNode(phone_json[i]);
        
        top1.appendChild(node);
        top2.appendChild(nude);
        para.appendChild(top1);
        para.appendChild(top2);
        //para.setAttribute("onclick", "find("+i+")")
        para.addEventListener('click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i]);
                infoWindow.open(map, marker);
                map.setZoom(9);
                map.panTo(marker.getPosition());
            }
        })(marker, i));
        element.appendChild(para);
    }

}
