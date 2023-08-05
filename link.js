let infoWindowContent_myLatLng = ['<div class="info_content info_edit">' +
    '<h2>TDK, ลาดกระบุง</h2>' +
    '<h3>888 Luang Phaeng Rd, Thap Yao, Lat Krabang, Bangkok 10520</h3>' +
    '<p>เวลาทำการ : 08:00 น. - 17:00 น.</p>' +
    '<p>โทร : 023-607-555</p>' +
    '</div>'];
let infoWindowContent = [];
let pinlocat = [];
let grouplocat = [];
let phone_json = [];
const name_json = [];
const myJSON = [
	{
		"id" : 1,
		"name" : "CARRYBOY QUEENSLAND PTY LTD",
		"location" : "879 Beaudesert Rd, Archerfield QLD 4108, Australia",
		"phone" : "+61 7 3119 3588",
		"email" : "",
		"web" : "www.carryboyqld.com.au",
		"lat" : "-27.563747",
		"lng" : "153.0217594"
	},
	{
		"id" : 2,
		"name" : "Autokit - Opposite Lock Bundaberg",
		"location" : "106 Enterprise St, Svensson Heights QLD 4670, Australia",
		"phone" : "+61 7 4151 6211",
		"email" : "",
		"web" : "www.autokit.com.au",
		"lat" : "-24.891666",
		"lng" : "152.334579"
	},
	{
		"id" : 3,
		"name" : "Autokit Accessories Gladstone",
		"location" : "33 Chapple St, Gladstone Central QLD 4680, Australia",
		"phone" : "+61 7 4979 4224",
		"email" : "",
		"web" : "www.autokit.com.au",
		"lat" : "-23.8422922",
		"lng" : "151.2417112"
	},
	{
		"id" : 4,
		"name" : "SERVCO AUSTRALIA CAIRNS PTY LTD Trading Name : Opposite Lock Cairns",
		"location" : "108 Scott Street, Cairns ",
		"phone" : "07 4031 1177",
		"email" : "INFO@CAIRNS.OPPOSITELOCK.COM.AU",
		"web" : "https://oppositelock.com.au",
		"lat" : "-16.9343261",
		"lng" : "145.756323"
	},
	{
		"id" : 5,
		"name" : "Wolf 4x4",
		"location" : "19 Flinders Parade, North Lakes QLD 4509, Australia",
		"phone" : "+61 1300 965 344",
		"email" : "",
		"web" : "www.wolf4x4.com.au",
		"lat" : "-27.228846",
		"lng" : "153.002861"
	},
	{
		"id" : 6,
		"name" : "Tropic Accessories",
		"location" : "2 McLennan St, Ooralea QLD 4740, Australia",
		"phone" : "+61 7 4952 4122",
		"email" : "",
		"web" : "www.tropicaccessories.com.au",
		"lat" : "-21.165283",
		"lng" : "149.1535783"
	},
	{
		"id" : 7,
		"name" : "Opposite Lock Townsville OPPOSITE LOCK TOWNSVILLE",
		"location" : "365 WOOLCOCKS TREET GARBUTT, QLD 4814",
		"phone" : "(07) 4755 2245",
		"email" : "info@oppositelock.com.au",
		"web" : "www.oppositelock.com.au",
		"lat" : "-19.2684363",
		"lng" : "146.7663277"
	},
	{
		"id" : 8,
		"name" : "TROPICAL 4x4 & OUTDOORS ",
		"location" : "13547 Queen Elizabeth Drive, Rockhampton, QLD 4701",
		"phone" : "(07) 4921 2249",
		"email" : "4x4sales@tropicalauto.com.au",
		"web" : "www.tropicalauto4x4.com.au",
		"lat" : "-23.3699562",
		"lng" : "150.5204103"
	},
	{
		"id" : 9,
		"name" : "Trek Hardware 4x4 Superstore Brisbane | Camping | Trailer Parts | 4x4 | Caravan",
		"location" : "289 Cullen Ave E, Eagle Farm QLD 4009, Australia",
		"phone" : "+61 417 783 415",
		"email" : "",
		"web" : "www.bawauto.com.au",
		"lat" : "-27.4342831",
		"lng" : "153.0909766"
	}
]




function zonereturndata() {
    ii = name_json.length
    for (i = 0; i < ii; i++) {
        name_json.pop()
        infoWindowContent.pop()
        pinlocat.pop()
		phone_json.pop()
    }
	for (i = 0; i < myJSON.length; i++) {
		infoWindowContent[name_json.length] = '<div class="info_content info_edit">'+'<h2>'+ myJSON[i].name +'</h2>' +'<h3>'+ myJSON[i].location + '</h3>'+'<p>Phone : 023-607-555</p>'+'<p>E-mail : '+ myJSON[i].email +'</p>'+'<p>Web :'+ myJSON[i].web +'</p>' +'</div>';
		pinlocat[name_json.length] = {lat: myJSON[i].lat, lng: myJSON[i].lng};
		phone_json[name_json.length] = myJSON[i].phone;
		grouplocat[name_json.length] = myJSON[i].group;
		name_json[name_json.length] = myJSON[i].name;
	}

    return name_json.length;
    
}

