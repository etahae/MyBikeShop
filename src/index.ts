// let x:string = "taha"; so obvious

// let x = "taha";
// let y = "namir";
// console.log(x);

// const giveFullName = (f_name:string, s_name:string, m_name:string = ""):string => {
//     return f_name + " " + s_name + " " + m_name;
// }

// giveFullName(x, y);

type bike = {
    readonly brand: string,
    readonly type: string,
    readonly wheel: number,
    readonly color: string,
    readonly frame: string,
    available: "yes" | "no",
    price: number,
    image?: string | null | ArrayBuffer
    // validInfo(): boolean
}

const bikes: Array<bike> = [];

const parentDiv = document.getElementById("bigDiv");
const wlcmDiv = document.getElementById("welcomeDiv");
const sellDiv = document.getElementById("sellDiv");
const buyDiv = document.getElementById("buyDiv");
const inputImageDiv = document.getElementById("inputImageDiv");

const homeButt = document.getElementById("homeButt");
const sellButt = document.getElementById("sellButt");
const buyButt = document.getElementById("buyButt");
if (homeButt && sellButt && buyButt) {
    homeButt.onclick = function() {
        sellButt.removeAttribute("class");
        buyButt.removeAttribute("class");
        homeButt.classList.add("active");
    }
    sellButt.onclick = function() {
        homeButt.removeAttribute("class");
        buyButt.removeAttribute("class");
        sellButt.classList.add("active");
    }
    buyButt.onclick = function() {
        sellButt.removeAttribute("class");
        homeButt.removeAttribute("class");
        buyButt.classList.add("active");
    }
}

let image: string = "./src/images/default.jpg";
var img_input = <HTMLInputElement>document.getElementById("img_input");
if (img_input) {
    img_input.onchange = function() {
        if (img_input) {
            var file = new FileReader();
            file.onload = function() {
                image = <string>file.result;
            }
            if (img_input.files && img_input.files[0])
                file.readAsDataURL(img_input.files[0]);
        }
    }
}

const submitButt = document.getElementById("submitButt");
if (submitButt) {
    submitButt.onclick = function() {
        var newBike: bike = {
            brand: (<HTMLInputElement>document.getElementById("brand")).value,
            type: (<HTMLInputElement>document.getElementById("type")).value,
            wheel: +(<HTMLInputElement>document.getElementById("wheel")).value,
            color: (<HTMLInputElement>document.getElementById("color")).value,
            frame: (<HTMLInputElement>document.getElementById("frame")).value,
            price: +(<HTMLInputElement>document.getElementById("price")).value,
            available: "yes",
            image: image
        }
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
            window.alert("Please fill out all the informations!")
    }
}

if (homeButt)
    homeButt.click();