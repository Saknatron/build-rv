var cost = 0
let cstcar1 = [1963000, 1986000, 2073000, 2125000]
let nmecar1 = ["2.4 ENTRY 2WD A/T", "2.8 ENTRY 2WD M/T", "2.8 ENTRY 4WD M/T", "2.8 ENTRY 4WD A/T"]
let cstcar2 = [2070000]
let nmecar2 = ["2.4 ENTRY 4WD A/T"]
let nmecolor1 = ["Lite", "Classic"]
let nmecolor2 = ["Flat white", "Black"]
let cstair = [0, 67500]
let nmeair = ["Standard", "HARRIER plus"]
let cstbat = [0, 1200, 2400]
let nmebat = ["9,600 Watt", "14,000 Watt", "19,200 Watt"]
let cstsolar = [10000, 0]
let nmesolar = ["Yes", "No"]
let cstkitch = [38000, 0]
let nmekitch = ["Yes", "No"]
let cstsus = [1000, 1500, 2000]
let nmesus = ["Standard", "Set A", "Set B"]

let picintr1 = ["img/interior/int_01.jpg", "img/interior/int_02.jpg"]
let picintr2 = ["img/interior/int_03.jpg", "img/interior/int_04.jpg"]
let I_Iintr1 = 0
let I_Iintr2 = 0
let cstcolor = [0, 0, 15000, 10000]
let cost_color_now = cstcolor[0]
let cost_car_now = cstcar1[0]
let cost_air_now = cstair[0]
let cost_bat_now = cstbat[0]
let cost_solar_now = cstsolar[0]
let cost_kitch_now = cstkitch[0]
let cost_sus_now = cstsus[0]

let cartype = cstcar1
let save_variable_x = 1
let df_img_0 = "img/Vehicle_rv_toyota_e_01.jpg"
let df_img_1 = picintr1[I_Iintr1]
let df_img_2 = "img/Ari-con-1.jpg"
let df_img_3 = "img/battery/bat_1.jpg"
let df_img_4 = "img/battery/bat_2.jpg"
function myscroll(){
    let info_bar_scroll = document.getElementById("info_bar").scrollTop
    var img = document.getElementById("img");
    if (info_bar_scroll < 330){
        img.src = df_img_0
        img.style = "opacity: 1; transition: opacity 0.5s; transition-delay: 0.1s;"
    }
    if (info_bar_scroll > 300 && info_bar_scroll < 330){
        img.style = "opacity: 0.5; transition: opacity 0.1s;"
    }
    if (info_bar_scroll > 330 && info_bar_scroll < 600){
        pic_intr()
        img.style = "opacity: 1; transition: opacity 0.5s; transition-delay: 0.1s;"
    }
    if (info_bar_scroll > 800 && info_bar_scroll < 900){
        img.style = "opacity: 0.5; transition: opacity 0.1s;"
    }
    if (info_bar_scroll > 900 && info_bar_scroll < 1200){
        img.src = df_img_2
        img.style = "opacity: 1; transition: opacity 0.5s; transition-delay: 0.1s;"
    }
//    if (info_bar_scroll > 1200 && info_bar_scroll < 1300){
//        img.style = "opacity: 0.5; transition: opacity 0.1s;"
//    }
//    if (info_bar_scroll > 1300  && info_bar_scroll < 1500){
//        img.src = df_img_3
//        img.style = "opacity: 1; transition: opacity 0.5s; transition-delay: 0.1s;"
//   }
//   if (info_bar_scroll > 1500 && info_bar_scroll < 1600){
//        img.style = "opacity: 0.5; transition: opacity 0.1s;"
//    }
//    if (info_bar_scroll > 1600  && info_bar_scroll < 1700){
//        img.src = df_img_4
//        img.style = "opacity: 1; transition: opacity 0.5s; transition-delay: 0.1s;"
//    }
}

function numtostr(x){
    let xs = String(x)
    let lx = xs.length
    let xrt = ""
    if (xs == 0){
        xrt = "Included"
    }
    else{
        for (let i = 0; i < lx; i++){
            if (lx - 3 == i){
                xrt += ","
            }
            if (lx - 6 == i && lx > 6){
                xrt += ","
            }
            xrt += xs[i]
        }
        xrt += " THB"
    }
    return xrt
}


function carcost(){

}
function sumcost(x){
    if(x == null){
        x = save_variable_x
    }
    else{
        cost_car_now = cartype[x]
    }
    let sumtxt1 = document.getElementById("sum1")
    let sumtxt2 = document.getElementById("sum2")
    let cost_all = numtostr(cost_car_now + cost_color_now + cost_air_now + cost_bat_now + cost_solar_now + cost_kitch_now + cost_sus_now) 
    console.log(cost_car_now, cost_color_now, cost_air_now, cost_bat_now, cost_solar_now, cost_kitch_now, cost_sus_now)
    sumtxt1.textContent = cost_all
    sumtxt2.textContent = cost_all
    sessionStorage.setItem("sumbill", cost_car_now + cost_color_now + cost_air_now + cost_bat_now + cost_solar_now + cost_kitch_now + cost_sus_now)
}
function defl(){
    var stl1 = document.getElementById("cc1btn");
    var stl2 = document.getElementById("cc2btn");
//    var stl3 = document.getElementById("cc3btn");
//    var stl4 = document.getElementById("cc4btn");
stl1.style = "border: #ffffff solid 3px;"
    stl2.style = "border: #ffffff solid 3px;"
//    stl3.style = "border: #ffffff solid 3px;"
//    stl4.style = "border: #ffffff solid 3px;"
}
function def2(){
    var stlA = document.getElementById("ccAbtn");
    var stlB = document.getElementById("ccBbtn");
    stlA.style = "border: #ffffff solid 3px;"
    stlB.style = "border: #ffffff solid 3px;"
}

//###################################################
//###################### VEHICLE ********************
//###################################################
function car1(x){
    var tx1 = document.getElementById("car_sub_text1_2");
    var tx2 = document.getElementById("car_sub_text2_2");
    var tx3 = document.getElementById("car_sub_text3_2");
    var tx4 = document.getElementById("car_sub_text4_2");
    tx1.textContent = numtostr(cstcar1[0])
    tx2.textContent = numtostr(cstcar1[1])
    tx3.textContent = numtostr(cstcar1[2])
    tx4.textContent = numtostr(cstcar1[3])
    document.getElementById("car_sub_group_2").style = "display: none";
    document.getElementById("car_sub_group_1").style = "display: ''";
    let y = document.getElementById("car_sub_1")
    y.checked = true
    cartype = cstcar1
    sessionStorage.setItem("cstcar", cstcar1[x])
    sessionStorage.setItem("nmecar", nmecar1[x])
    sumcost(x)
    var img = document.getElementById("img");
    df_img_0 = "img/Vehicle_rv_toyota_e_0" + String(x+1) + ".jpg"
    img.src = df_img_0
}
function car2(x){
    var tx1 = document.getElementById("car_sub_text5_2");
    tx1.textContent = numtostr(cstcar2[0])
    var tx2 = document.getElementById("car_sub_text5_1");
    tx2.textContent = "2.4 ENTRY 2WD A/T"
    document.getElementById("car_sub_group_1").style = "display: none";
    document.getElementById("car_sub_group_2").style = "display: ''";
    let y = document.getElementById("car_sub_5")
    y.checked = true
    cartype = cstcar2
    sessionStorage.setItem("cstcar", cstcar2[x])
    sessionStorage.setItem("nmecar", nmecar2[x])
    sumcost(x)
    
    
    var img = document.getElementById("img");
    df_img_0 = "img/Vehicle_rv_mitsu_e.jpg"
    img.src = df_img_0
}

//###################################################
//###################### INTERIOR *******************
//###################################################

function pic_intr(){
    var img = document.getElementById("img");
    var tx1 = document.getElementById("textcolor1");
    var tx2 = document.getElementById("textcolor2");
    switch (I_Iintr2){
        case 0:
            img.src = picintr1[I_Iintr1];
            break;
        case 1:
            img.src = picintr2[I_Iintr1];
            break;
    }
    tx1.textContent = nmecolor1[I_Iintr1] + ' , ' + nmecolor2[I_Iintr2]
    tx2.textContent = numtostr(cstcolor[I_Iintr1])
    sessionStorage.setItem("cstcolor", cstcolor[I_Iintr1])
    sessionStorage.setItem("nmecolor", nmecolor1[I_Iintr1] + ' , ' + nmecolor2[I_Iintr2])

}
function btn_img1(){
    I_Iintr1 = 0
    pic_intr()
    defl()
    var stl = document.getElementById("cc1btn");
    stl.style = "border: #4100f5 solid 3px;"
    cost_color_now = cstcolor[0]
    sumcost()

}
function btn_img2(){
    I_Iintr1 = 1
    pic_intr()
    defl()
    var stl2 = document.getElementById("cc2btn");
    stl2.style = "border: #4100f5 solid 3px;"
    cost_color_now = cstcolor[1]
    sumcost()
}
function btn_imgA(){
    def2()
    var stl = document.getElementById("ccAbtn");
    stl.style = "border: #4100f5 solid 3px;"
    I_Iintr2 = 0
    pic_intr()
}
function btn_imgB(){
    def2()
    var stl = document.getElementById("ccBbtn");
    stl.style = "border: #4100f5 solid 3px;"
    I_Iintr2 = 1 
    pic_intr()
}

//###################################################
//########################### AIR *******************
//###################################################

function air1(){
    var img = document.getElementById("img");
    df_img_2 = "img/Ari-con-1.jpg"
    img.src = df_img_2
    cost_air_now = cstair[0]/*
    var a1 = document.getElementById("air1sub")
    var a2 = document.getElementById("air2sub")
    a1.style = "display: ''; visibility: visible;"
    a2.style = "display: none; visibility: hidden;"*/
    sumcost()
    sessionStorage.setItem("cstair", cstair[0])
    sessionStorage.setItem("nmeair", nmeair[0])
}
function air2(){
    var img = document.getElementById("img");
    df_img_2 = "img/Ari-con.jpg"
    img.src = df_img_2
    cost_air_now = cstair[1]/*
    var a1 = document.getElementById("air1sub")
    var a2 = document.getElementById("air2sub")
    a1.style = "display: none; visibility: hidden;"
    a2.style = "display: ''; visibility: visible;"*/
    sumcost()
    sessionStorage.setItem("cstair", cstair[1])
    sessionStorage.setItem("nmeair", nmeair[1])
}

//###################################################
//########################## solar *******************
//###################################################

function solar(x){
    var img = document.getElementById("img");
    df_img_3 = "img/solar/solar_0" + String(x+1) + ".jpg"
    img.src = df_img_3
    cost_solar_now = cstsolar[x]
    sumcost()
    sessionStorage.setItem("cstsolar", cstsolar[x])
    sessionStorage.setItem("nmesolar", nmesolar[x])
}

//###################################################
//####################### susERATOR *****************
//###################################################

function sus(x){
    var img = document.getElementById("img");
    img.src = "img/suspension/set_0" + String(x+1) + ".jpg"
    cost_sus_now = cstsus[x]
    sumcost()
    sessionStorage.setItem("cstsus", cstsus[x])
    sessionStorage.setItem("nmesus", nmesus[x])
}

//###################################################
//######################## BATTERY ******************
//###################################################

function bat(x){
    var img = document.getElementById("img");
    img.src = "img/battery/bat_A0" + String(x+1) + ".jpg"
    cost_bat_now = cstbat[x]
    sumcost()
    sessionStorage.setItem("cstbat", cstbat[x])
    sessionStorage.setItem("nmebat", nmebat[x])
}

//###################################################
//######################### KITCHEN *****************
//###################################################

function kitch(x){
    var img = document.getElementById("img");
    img.src = "img/kitchen/kit_0" + String(x+1) + ".jpg"
    cost_sus_now = cstsus[x]
    cost_kitch_now = cstkitch[x]
    sumcost()
    sessionStorage.setItem("cstkitch", cstkitch[x])
    sessionStorage.setItem("nmekitch", nmekitch[x])
}
