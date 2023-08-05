function movedown(){
    document.getElementById("movedown").style = "display: none";
    document.getElementById("index2").style = "height: 0vh";
    document.getElementById("openlist").style = "display: ''";
}
function index2(){
    if(screen.width < 1000){
        document.getElementById("movedown").style = "display: flex";
        document.getElementById("index2").style = "height: 70vh";
        document.getElementById("openlist").style = "display: none";
    }
}
function openlist(){
    document.getElementById("movedown").style = "display: flex";
    document.getElementById("index2").style = "height: 70vh";
    document.getElementById("openlist").style = "display: none";
}
function find() {
    provid = document.getElementById('prov').value;
    iii = zonereturndata(provid);
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
    let province = document.getElementById("prov").value
    if(document.getElementById("prov").value == "none"){
        var zoomset = 6
    }
    else{
        var zoomset = 10
    }
    var mapProp = {
        center: { lat: 13.727677758186708, lng: 100.774984896252 },
        zoom: zoomset,
        styles: stylesArray,
    };
    let prov = ['กระบี่', 'กรุงเทพมหานคร', 'กาญจนบุรี', 'กาฬสินธุ์', 'กำแพงเพชร', 'ขอนแก่น', 'จังหวัดนราธิวาส', 'จันทบุรี', 'ฉะเชิงเทรา', 'ชลบุรี', 'ชัยนาท', 'ชัยภูมิ', 'ชุมพร', 'เชียงใหม่', 'เชียงราย', 'ตรัง', 'ตราด', 'ตาก', 'นครนายก', 'นครปฐม', 'นครพนม', 'นครราชสีมา', 'นครศรีธรรมราช', 'นครสวรรค์', 'นนทบุรี', 'น่าน', 'บึงกาฬ', 'บุรีรัมย์', 'ปทุมธานี', 'ประจวบคีรีขันธ์', 'ปราจีนบุรี', 'ปัตตานี', 'พระนครศรีอยุธยา', 'พะเยา', 'พังงา', 'พัทลุง', 'พิจิตร', 'พิษณุโลก', 'เพชรบุรี', 'เพชรบูรณ์', 'แพร่', 'แม่ฮ่องสอน', 'ภูเก็ต', 'มหาสารคาม', 'มุกดาหาร', 'ยโสธร', 'ยะลา', 'ร้อยเอ็ด', 'ระนอง', 'ระยอง', 'ราชบุรี', 'ลพบุรี', 'ลำปาง', 'ลำพูน', 'เลย', 'ศรีสะเกษ', 'สกลนคร', 'สงขลา', 'สตูล', 'สมุทรปราการ', 'สมุทรสงคราม', 'สมุทรสาคร', 'สระแก้ว', 'สระบุรี', 'สิงห์บุรี', 'สุโขทัย', 'สุพรรณบุรี', 'สุราษฎร์ธานี', 'สุรินทร์', 'หนองคาย', 'หนองบัวลำภู', 'อ่างทอง', 'อำนาจเจริญ', 'อุดรธานี', 'อุตรดิตถ์', 'อุทัยธานี', 'อุบลราชธานี']
    let element = document.getElementById("prov");
    for(var i=0; i<77; i++){
        let para = document.createElement("option");
        let node = document.createTextNode(prov[i]);
        para.appendChild(node);
        para.setAttribute("value", prov[i]);
        element.appendChild(para);
    }
    var map = new google.maps.Map(document.getElementById("googleMap"), mapProp);
    var infoWindow = new google.maps.InfoWindow(), marker, i;
    let grouplist = document.getElementById("grouplist");
    while (grouplist.hasChildNodes()) {
        grouplist.removeChild(grouplist.firstChild)
    }
    for (i = 0; i < iii; i++) {
        var position = new google.maps.LatLng(pinlocat[i].lat, pinlocat[i].lng);
        marker = new google.maps.Marker({
            map: map});
        if(grouplocat[i]=='1' && (document.getElementById('data').value == "A" || document.getElementById('data').value == "O")){
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: name_json[i],
                icon: { url: "pin_carryboy_red_O.png", anchor: new google.maps.Point(15,15) }
            });
        }
        if(grouplocat[i]=='2' && (document.getElementById('data').value == "B" || document.getElementById('data').value == "O")){
            marker = new google.maps.Marker({
                position: position,
                map: map,
                title: name_json[i],
                icon: { url: "pin_carryboy_blue_O.png", anchor: new google.maps.Point(15,15)}
            });
        }
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
        let top2 = document.createElement("h4");
        let top3 = document.createElement("h3");
        let top4 = document.createElement("h3");
        let node = document.createTextNode(name_json[i]);
        let node2 = document.createTextNode(location_json[i]);
        let node3 = document.createTextNode(time_json[i]);
        let node4 = document.createTextNode(phone_json[i]);
        
        top1.appendChild(node);
        top2.appendChild(node2);
        top3.appendChild(node3);
        top4.appendChild(node4);
        para.appendChild(top1);
        para.appendChild(top2);
        para.appendChild(top3);
        para.appendChild(top4);
        //para.setAttribute("onclick", "find("+i+")")
        para.addEventListener('click', (function (marker, i) {
            return function () {
                infoWindow.setContent(infoWindowContent[i]);
                infoWindow.open(map, marker);
                map.setZoom(9);
                map.panTo(marker.getPosition());
            }
        })(marker, i));
        grouplist.appendChild(para);
    }
}