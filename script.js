var cost = 0
let cstcar1 = [1963000, 1986000, 2073000, 2125000]
let nmecar1 = ["2.4 ENTRY 2WD A/T", "2.8 ENTRY 2WD M/T", "2.8 ENTRY 4WD M/T", "2.8 ENTRY 4WD A/T"]
let cstcar2 = [2070000]
let nmecar2 = ["2.4 ENTRY 4WD A/T"]
let cstcolor = [0, 0, 15000, 10000]
let cstair = [0, 67500]
let cost_color_now = cstcolor[0]
let cost_car_now = cstcar1[0]
let cartype = cstcar1
let save_variable_x = 1
let df_img_0 = "img/Vehicle_rv_toyota_e.jpg"
let df_img_1 = "img/interior/Walnut-brownnish-gray-met-1.jpg"
let df_img_2 = "img/Ari-con.jpg"
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
        img.src = df_img_1
        img.style = "opacity: 1; transition: opacity 0.5s; transition-delay: 0.1s;"
    }
    if (info_bar_scroll > 640 && info_bar_scroll < 700){
        img.style = "opacity: 0.5; transition: opacity 0.1s;"
    }
    if (info_bar_scroll > 700){
        img.src = df_img_2
        img.style = "opacity: 1; transition: opacity 0.5s; transition-delay: 0.1s;"
    }
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
    if(x == 1){
        cost_car_now = cartype[0]
    }
    if(x == 2){
        cost_car_now = cartype[1]
    }
    if(x == 3){
        cost_car_now = cartype[2]
    }
    if(x == 3){
        cost_car_now = cartype[3]
    }
    let sumtxt = document.getElementById("sum")
    sumtxt.textContent = numtostr(cost_color_now + cost_car_now) 
}
function defl(){
    var stl1 = document.getElementById("cc1btn");
    var stl2 = document.getElementById("cc2btn");
    var stl3 = document.getElementById("cc3btn");
    var stl4 = document.getElementById("cc4btn");
    stl1.style = "border: #ffffff solid 3px;"
    stl2.style = "border: #ffffff solid 3px;"
    stl3.style = "border: #ffffff solid 3px;"
    stl4.style = "border: #ffffff solid 3px;"
}
function btn_img1(){
    var img = document.getElementById("img");
    df_img_1 = "img/interior/Walnut-brownnish-gray-met-1.jpg"
    img.src = df_img_1
    defl()
    var stl = document.getElementById("cc1btn");
    stl.style = "border: #4100f5 solid 3px;"
    var tx1 = document.getElementById("textcolor1");
    var tx2 = document.getElementById("textcolor2");
    tx1.textContent = "Midnight Silver Metallic"
    tx2.textContent = numtostr(cstcolor[0])
    cost_color_now = cstcolor[0]
    sumcost()

}
function btn_img2(){
    var img = document.getElementById("img");
    df_img_1 = "img/interior/Walnut-Classic-Black-1.jpg"
    img.src = df_img_1
    defl()
    var stl2 = document.getElementById("cc2btn");
    stl2.style = "border: #4100f5 solid 3px;"
    var tx1 = document.getElementById("textcolor1");
    var tx2 = document.getElementById("textcolor2");
    tx1.textContent = "Pearl White Multi-Coat"
    tx2.textContent = numtostr(cstcolor[1])
    cost_color_now = cstcolor[1]
    sumcost()
}
function btn_img3(){
    var img = document.getElementById("img");
    df_img_1 = "img/interior/Walnut-Pearl-White-1.jpg"
    img.src = df_img_1
    defl()
    var stl = document.getElementById("cc3btn");
    stl.style = "border: #4100f5 solid 3px;"
    var tx1 = document.getElementById("textcolor1");
    var tx2 = document.getElementById("textcolor2");
    tx1.textContent = "Deep Blue Metallic"
    tx2.textContent = numtostr(cstcolor[2])
    cost_color_now = cstcolor[2]
    sumcost()
}
function btn_img4(){
    var img = document.getElementById("img");
    df_img_1 = "img/interior/Walnut-warm-gold-met-1.jpg"
    img.src = df_img_1
    defl()
    var stl = document.getElementById("cc4btn");
    stl.style = "border: #4100f5 solid 3px;"
    var tx1 = document.getElementById("textcolor1");
    var tx2 = document.getElementById("textcolor2");
    tx1.textContent = "Solid Black"
    tx2.textContent = numtostr(cstcolor[3])
    cost_color_now = cstcolor[3]
    sumcost()
}
function car1(){
    var tx1 = document.getElementById("text1_2");
    var tx2 = document.getElementById("text2_2");
    var tx3 = document.getElementById("text3_2");
    var tx4 = document.getElementById("text4_2");
    tx1.textContent = numtostr(cstcar1[0])
    tx2.textContent = numtostr(cstcar1[1])
    tx3.textContent = numtostr(cstcar1[2])
    tx4.textContent = numtostr(cstcar1[3])
    document.getElementById("driveh2").style = "display: none";
    document.getElementById("driveh1").style = "display: ''";
    let y = document.getElementById("drive_1")
    y.checked = true
    cartype = cstcar1
    sumcost()
    var img = document.getElementById("img");
    df_img_0 = "img/Vehicle_rv_toyota_e.jpg"
    img.src = df_img_0
}
function car2(){
    var tx1 = document.getElementById("text1_2");
    tx1.textContent = numtostr(cstcar2[0])
    let x1 = document.getElementById("driveh1")
    x1.style = "display: none";
    let x2 = document.getElementById("driveh2")
    x2.style = "display: ''";
    cartype = cstcar2
    sumcost()
    let y = document.getElementById("drive_5")
    y.checked = true
    var img = document.getElementById("img");
    df_img_0 = "img/Vehicle_rv_mitsu_e.jpg"
    img.src = df_img_0
}
function air1(){
    var img = document.getElementById("img");
    df_img_2 = "img/Ari-con.jpg"
    img.src = df_img_2
    cost_color_now = cstair[0]/*
    var a1 = document.getElementById("air1sub")
    var a2 = document.getElementById("air2sub")
    a1.style = "display: ''; visibility: visible;"
    a2.style = "display: none; visibility: hidden;"*/
    sumcost()
}
function air2(){
    var img = document.getElementById("img");
    df_img_2 = "img/Ari-con-1.jpg"
    img.src = df_img_2
    cost_color_now = cstair[1]/*
    var a1 = document.getElementById("air1sub")
    var a2 = document.getElementById("air2sub")
    a1.style = "display: none; visibility: hidden;"
    a2.style = "display: ''; visibility: visible;"*/
    sumcost()
}