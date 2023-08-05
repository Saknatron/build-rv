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
		"name" : "Geelong 4WD and Camping",
		"location" : " 324 Melbourne Road, Geelong, Vic. 3215",
		"group" : "Victoria",
		"phone" : " (03) 52779199",
		"email" : "del@geelong4wd.com.au",
		"web" : "",
		"lat" : "-38.109111",
		"lng" : "144.352359"
	},
	{
		"id" : 2,
		"name" : "Outthere 4X4 & Camping",
		"location" : " 134 Queen Street, Warragul, Vic. 3820",
		"group" : "Victoria",
		"phone" : " (03) 5622 0575",
		"email" : " rick@outthere4x4.com.au",
		"web" : " www.outthere4x4.com.au",
		"lat" : "-38.1687039",
		"lng" : "145.9423851"
	},
	{
		"id" : 3,
		"name" : "Ballarat Trailers & Towbars",
		"location" : " 4 Carngham Road, Ballarat, Vic.3350",
		"group" : "Victoria",
		"phone" : " 1800 486 922",
		"email" : " info@btandt.com.au",
		"web" : " www.btandt.com.au",
		"lat" : "-37.56954",
		"lng" : "143.808921"
	},
	{
		"id" : 4,
		"name" : "Harrison 4WD Centre",
		"location" : " 148 Murphy Street, Bendigo, Vic.3550",
		"group" : "Victoria",
		"phone" : "(03) 5444 1255",
		"email" : "info@harrison4wdcentre.com.au",
		"web" : " www.harrison4wdcentre.com.au",
		"lat" : "-36.748118",
		"lng" : "144.304098"
	},
	{
		"id" : 5,
		"name" : "Carryboy Australia Pty Ltd.",
		"location" : " 950 – 952 Stud Road,Rowville, Victoria 3178",
		"group" : "Victoria",
		"phone" : " (03) 870 69 888",
		"email" : "info@carryboy.com.au",
		"web" : " www.carryboy.com.au",
		"lat" : "-37.9094667",
		"lng" : "145.2355983"
	},
	{
		"id" : 6,
		"name" : "TREK HARDWARE 4X4 SUPERSTORE HEAD OFFICE EPPING VIC",
		"location" : "",
		"group" : "Victoria",
		"phone" : "03 84013776",
		"email" : "sales@trekhardware.com.au",
		"web" : " www.trekhardware.com.au",
		"lat" : "-37.6486081",
		"lng" : "145.0145613"
	},
	{
		"id" : 7,
		"name" : "TREK HARDWARE 4X4 SUPERSTORE SHEPPARTON VIC",
		"location" : " 8018 Melbourne Road Shepparton VIC 3631",
		"group" : "Victoria",
		"phone" : "(03) 58231066",
		"email" : "tipngotrailers@gmail.com",
		"web" : " www.tipngotrailers.com.au",
		"lat" : "-36.4130953",
		"lng" : "145.3933879"
	},
	{
		"id" : 8,
		"name" : "TREK Hardware 4x4 Superstore Sunshine",
		"location" : "8 Berkshire Rd, Sunshine North VIC 3020, Australia",
		"group" : "Victoria",
		"phone" : "+61 3 9311 3631",
		"email" : "",
		"web" : "www.trekhardware.com.au",
		"lat" : "-37.7656127",
		"lng" : "144.8457506"
	},
	{
		"id" : 78,
		"name" : "Monaghan Truck & Trailer Sales & Trek Hardware 4X4 Superstore Mildura",
		"location" : "512 Benetook Ave, Mildura VIC 3500, Australia",
		"group" : "Victoria",
		"phone" : "+61 3 4014 9966",
		"email" : "",
		"web" : "monaghantts.com.au",
		"lat" : "-34.2071914",
		"lng" : "142.166336"
	},
	{
		"id" : 79,
		"name" : "Central auto 4x4",
		"location" : "1 Fitzgeralds Cl, Castlemaine VIC 3450, Australia",
		"group" : "Victoria",
		"phone" : "+61 3 5472 4333",
		"email" : "",
		"web" : "www.centralauto4x4.com.au",
		"lat" : "-37.0755451",
		"lng" : "144.2366772"
	},
	{
		"id" : 80,
		"name" : "Tiger Trays",
		"location" : "123 Hume Hwy, Lansvale NSW 2166, Australia",
		"group" : "NSW",
		"phone" : "+61 2 9725 6744",
		"email" : "",
		"web" : "www.tigertrays.com.au",
		"lat" : "-33.8938584",
		"lng" : "150.9579623"
	},
	{
		"id" : 81,
		"name" : "BORDER OFF ROAD 4X4 ACCESSORIES 3ABennu Circuit Airport Park Albury NSW 2640 Australia",
		"location" : "3ABennu Circuit Airport Park Albury NSW 2640 Australia",
		"group" : "NSW",
		"phone" : "",
		"email" : "",
		"web" : "",
		"lat" : "-36.0684077",
		"lng" : "146.9545458"
	},
	{
		"id" : 82,
		"name" : "Opposite Lock Dubbo",
		"location" : "36-42 Erskine St, Dubbo NSW 2830, Australia",
		"group" : "NSW",
		"phone" : "+61 2 6884 4211",
		"email" : "",
		"web" : "",
		"lat" : "-32.2430988",
		"lng" : "148.6065021"
	},
	{
		"id" : 83,
		"name" : "Active 4X4",
		"location" : "263 Anderson Dr, Beresfield NSW 2322, Australia",
		"group" : "NSW",
		"phone" : "+61 2 4966 8330",
		"email" : "",
		"web" : "",
		"lat" : "-32.798773",
		"lng" : "151.644773"
	},
	{
		"id" : 84,
		"name" : "Tamworth 4x4",
		"location" : "61 Barnes St, Taminda NSW 2340, Australia",
		"group" : "NSW",
		"phone" : "+61 2 6762 2256",
		"email" : "",
		"web" : "tamworth4x4.com.au",
		"lat" : "-31.0926338",
		"lng" : "150.9104585"
	},
	{
		"id" : 85,
		"name" : "C&S Canopies",
		"location" : "13 Armstrong St, Westdale NSW 2340, Australia",
		"group" : "NSW",
		"phone" : "+61 2 6760 7464",
		"email" : "",
		"web" : "www.candscanopies.com.au",
		"lat" : "-31.0788102",
		"lng" : "150.8528266"
	},
	{
		"id" : 86,
		"name" : "Pride Auto Accessories Fyshwick Pride Auto Accessories Fyshwick",
		"location" : " 11 Kembla Street Fyshwick ACT 2609",
		"group" : "ACT",
		"phone" : "0262806222",
		"email" : "support@prideauto.com.au",
		"web" : " http://www.prideautogroup.com.au",
		"lat" : "-35.325518",
		"lng" : "149.1778526"
	},
	{
		"id" : 87,
		"name" : "Xtreme UTE worX",
		"location" : " Unit 2, 13 Inverness Street, Malaga, 6090 Perth WA.",
		"group" : "Western Australia",
		"phone" : "0436279724, 0892493029",
		"email" : "",
		"web" : "Web Site : www.xtreme-ute-worx.com",
		"lat" : "-31.855887",
		"lng" : "115.882817"
	},
	{
		"id" : 88,
		"name" : "TREK HARDWARE 4X4 SUPERSTORE PORT LINCOL",
		"location" : " 123 Verran Terrace, Port Lincoln SA 5606.",
		"group" : "South Australia",
		"phone" : " 08 86821877",
		"email" : "ozsteel@bigpond.net.au",
		"web" : "www.trekhardware.com.au",
		"lat" : "-34.7381862",
		"lng" : "135.8528257"
	},
	{
		"id" : 89,
		"name" : "Adelaide 4x4 Accessories",
		"location" : " Unit 16, 1042 Grand Junction Road Holden Hill South Australia 5088",
		"group" : "South Australia",
		"phone" : "Tel: 0872229166",
		"email" : "sales@adelaide4x4accessories.com.au",
		"web" : "www.adelaide4x4accessories.com.au",
		"lat" : "-34.8448661",
		"lng" : "138.6795024"
	},
	{
		"id" : 90,
		"name" : "CARRYBOY AUSTRALIA PTY LTD (QLD)",
		"location" : " 879 Beaudesert Rd, Archerfield QLD 4108, Australia",
		"group" : "Queen Land",
		"phone" : " (07) 3119 3588",
		"email" : "brisbane@carryboy.com.au ",
		"web" : "",
		"lat" : "-27.563747",
		"lng" : "153.0217594"
	},
	{
		"id" : 91,
		"name" : "MNF 4x4 Accessories",
		"location" : " 2 Newcastle St Burleigh Heads, QLD 4220 Australia",
		"group" : "Queen Land",
		"phone" : " 1300 663 494",
		"email" : "sales@mnf4x4.com.au",
		"web" : "www.mnf4x4.com.au",
		"lat" : "-28.1015697",
		"lng" : "153.4229699"
	},
	{
		"id" : 92,
		"name" : "Autokit Accessories",
		"location" : " 106 Enterprise Street, Bundaberg 4670 QLD",
		"group" : "Queen Land",
		"phone" : "0741516211",
		"email" : "sales@autokit.com.au",
		"web" : "www.autokit.com.au",
		"lat" : "-24.891666",
		"lng" : "152.334579"
	},
	{
		"id" : 93,
		"name" : "Opposite Lock - 4WD & Vehicle Accessories Servco Australia Cairns Pty Ltd",
		"location" : "Address 257 Mulgrave Road, Cairns. Q. 4870.",
		"group" : "Queen Land",
		"phone" : "0740311177",
		"email" : "INFO@CAIRNS.OPPOSITELOCK.COM.AU",
		"web" : "",
		"lat" : "-16.9343261",
		"lng" : "145.756323"
	},
	{
		"id" : 94,
		"name" : "kingston 4wd and tyres",
		"location" : "42 Patriarch Dr, Huntingfield TAS 7055, Australia",
		"group" : "Tasmania",
		"phone" : "+61 3 6227 2926",
		"email" : "",
		"web" : "",
		"lat" : "-42.9920661",
		"lng" : "147.2929891"
	}
]



function zonereturndata(x) {
    ii = name_json.length
    for (i = 0; i < ii; i++) {
        name_json.pop()
        infoWindowContent.pop()
        pinlocat.pop()
		phone_json.pop()
    }
    if (x == '0') {
        for (i = 0; i < myJSON.length; i++) {
            infoWindowContent[name_json.length] = '<div class="info_content info_edit">'+'<h2>'+ myJSON[i].name +'</h2>' +'<h3>'+ myJSON[i].location + '</h3>'+'<p>Phone : 023-607-555</p>'+'<p>E-mail : '+ myJSON[i].email +'</p>'+'<p>Web :'+ myJSON[i].web +'</p>' +'</div>';
            pinlocat[name_json.length] = {lat: myJSON[i].lat, lng: myJSON[i].lng};
			phone_json[name_json.length] = myJSON[i].phone;
			grouplocat[name_json.length] = myJSON[i].group;
			name_json[name_json.length] = myJSON[i].name;
        }
    }
    else {
        for (i = 0; i < myJSON.length; i++) {
            if (myJSON[i].group == String(x)) {
                infoWindowContent[name_json.length] = '<div class="info_content info_edit">'+'<h2>'+ myJSON[i].name +'</h2>' +'<h3>'+ myJSON[i].location + '</h3>'+'<p>Phone : 023-607-555</p>'+'<p>E-mail : '+ myJSON[i].email +'</p>'+'<p>Web :'+ myJSON[i].web +'</p>' +'</div>';
                pinlocat[name_json.length] = {lat: myJSON[i].lat, lng: myJSON[i].lng};
                phone_json[name_json.length] = myJSON[i].phone;
                grouplocat[name_json.length] = myJSON[i].group;
				name_json[name_json.length] = myJSON[i].name;
            }
        }
    }
    return name_json.length;
    
}

