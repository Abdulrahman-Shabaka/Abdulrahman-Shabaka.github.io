
// silder script

//auto slider pictures
var sliderImage = document.querySelector("#slider img");
var i = 1;
var sliderTimer;
var flag = true;
var imgAlt = ["AirPods", "Apple Watch", "iPad", "iPhone", "Mackbook Air"];
function sliderShow() {
    if (flag) {
        sliderTimer = setInterval(function () {
            if (i == 6) i = 1;
            sliderImage.src = "./images/slider/" + i + ".jpg";
            sliderImage.alt = imgAlt[i - 1];
            i++;
        }, 2000);
    }
}
sliderShow();
var slider = document.querySelector("#slider");
slider.onmouseenter = function () {
    flag = false;
    clearInterval(sliderTimer);
};
slider.onmouseleave = function () {
    flag = true;
    sliderShow();
};
//auto slider pictures

//onClick slider
var leftSlide = document.getElementsByTagName("svg")[0];
var rightSlide = document.getElementsByTagName("svg")[1];

leftSlide.onclick = function () {
    if (i == 1) i = 6;
    i--;
    sliderImage.src = "./images/slider/" + i + ".jpg";
    sliderImage.alt = imgAlt[i - 1];
};

rightSlide.onclick = function () {
    if (i == 6) i = 1;
    sliderImage.src = "./images/slider/" + i + ".jpg";
    sliderImage.alt = imgAlt[i - 1];
    i++;
};
//onClick slider
//slider script

//products


var cart = document.querySelector(".cart span");
var intialItem = "iphones.json";
var cartItems = 0;
window.onload = getProducts(intialItem);
function getProducts(itemJson) {
    var xhr = new XMLHttpRequest();
    xhr.open("GET", itemJson);
    xhr.send("");
    xhr.onreadystatechange = function () {
        if (xhr.readyState == 4) {
            if (xhr.status == 200) {
                var items = document.getElementsByClassName("items")[0];
                if (items) items.remove();
                var result = JSON.parse(xhr.response);
                items = document.createElement("div");
                items.classList.add("items");
                items.classList.add("categoryItems");
                for (var i = 0; i < result.length; i++) {
                    var div = document.createElement("div");
                    div.classList.add("item");
                    var img = document.createElement("img");
                    img.classList.add("itemImage");
                    img.src = result[i].imageUrl;
                    var name = document.createElement("h3");
                    name.classList.add("name");
                    name.innerText = result[i].name;
                    var button = document.createElement("butten");
                    button.classList.add("itemButton");
                    button.onclick = () => {
                        cartItems++;
                        cart.innerText = "(" + cartItems + ")";
                    };
                    button.innerText = "Add to Cart";
                    div.appendChild(img);
                    div.appendChild(name);
                    div.appendChild(button);
                    items.appendChild(div);
                    console.log(result[i]);
                }
                var catigory = document.getElementsByClassName("catigory")[0];
                catigory.appendChild(items);
            }
        }
    };
}
var buttons = document.getElementsByClassName("CatigoryButton");
var btnIndex = 0;
changeButtonsBackgroudColor();
function changeButtonsBackgroudColor() {
    for (var i = 0; i < buttons.length; i++) {
        if (i == btnIndex)
            buttons[i].style.backgroundColor = "rgb(199, 75, 133)";
        else buttons[i].style.backgroundColor = "rgb(65,50,136)";


    }
}
function showIphones() {
    getProducts("iphones.json");
    btnIndex=0;
    changeButtonsBackgroudColor();
}

function showIpads() {
    getProducts("ipads.json");
    btnIndex=1;
    changeButtonsBackgroudColor();
}

function showWatches() {
    getProducts("watches.json");
    btnIndex=2;
    changeButtonsBackgroudColor();
}

function showMackbooks() {
    getProducts("macbooks.json");
    btnIndex=3;
    changeButtonsBackgroudColor();
}

function showAirpods() {
    getProducts("airpods.json");
    btnIndex=4;
    changeButtonsBackgroudColor();
}
//Gallery

function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}



