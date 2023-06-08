"use strict";
// let x:string = "taha"; so obvious
const bikes = [];
const parentDiv = document.getElementById("bigDiv");
const wlcmDiv = document.getElementById("welcomeDiv");
const sellDiv = document.getElementById("sellDiv");
const buyDiv = document.getElementById("buyDiv");
const inputImageDiv = document.getElementById("inputImageDiv");
const homeButt = document.getElementById("homeButt");
const sellButt = document.getElementById("sellButt");
const buyButt = document.getElementById("buyButt");
if (homeButt && sellButt && buyButt) {
    homeButt.onclick = function () {
        sellButt.removeAttribute("class");
        buyButt.removeAttribute("class");
        homeButt.classList.add("active");
    };
    sellButt.onclick = function () {
        homeButt.removeAttribute("class");
        buyButt.removeAttribute("class");
        sellButt.classList.add("active");
    };
    buyButt.onclick = function () {
        sellButt.removeAttribute("class");
        homeButt.removeAttribute("class");
        buyButt.classList.add("active");
    };
}
let image = "./src/images/default.jpg";
var img_input = document.getElementById("img_input");
if (img_input) {
    img_input.onchange = function () {
        if (img_input) {
            var file = new FileReader();
            file.onload = function () {
                image = file.result;
            };
            if (img_input.files && img_input.files[0])
                file.readAsDataURL(img_input.files[0]);
        }
    };
}
const submitButt = document.getElementById("submitButt");
if (submitButt) {
    submitButt.onclick = function () {
        var newBike = {
            brand: document.getElementById("brand").value,
            type: document.getElementById("type").value,
            wheel: +document.getElementById("wheel").value,
            color: document.getElementById("color").value,
            frame: document.getElementById("frame").value,
            price: +document.getElementById("price").value,
            available: "yes",
            image: image
        };
        if (newBike.brand && newBike.type && newBike.wheel && newBike.color && newBike.frame && newBike.price) {
            if (window.confirm("Confirm data?")) {
                const bikesTable = document.getElementById("bikesTable");
                if (bikesTable) {
                    bikesTable.style.display = "inline-block";
                    bikesTable.innerHTML +=
                        `<tr id="bike${bikes.length}">
                        <td><img class="bike_img" alt="xD" src="${newBike.image}" /></td>
                        <td>
                            <p>brand : ${newBike.brand}</p>
                            <p>type : ${newBike.type}</p>
                            <p>wheel size : ${newBike.wheel}</p>
                            <p>frame : ${newBike.frame}</p>
                            <p>color : ${newBike.color}    <span class="colorBuy" id="colorBuy${bikes.length}">♦️</span></p>
                            <p>price : ${newBike.price}</p>
                            <p>available : ${newBike.available}</p>
                        </td>
                        <td><button>buy</button></td>
                    </tr>`;
                    var colorBuy = document.getElementById(`colorBuy${bikes.length}`);
                    if (colorBuy) {
                        colorBuy.style.color = newBike.color;
                    }
                    bikes.push(newBike);
                    const noBikes = document.getElementById("noBikes");
                    if (noBikes)
                        noBikes.remove();
                }
            }
        }
        else
            window.alert("Please fill out all the informations!");
    };
}
if (homeButt)
    homeButt.click();
