let cartbox = document.querySelector(".cart");
let itemsContainer = document.querySelector(".itemsContainer");

let cartItems = document.querySelector("#cartItems");
let cartAmount = document.querySelector("#cartAmount");

let cartAmountArray = []

function openCartBox() {
    cartbox.classList.toggle("openCartBox");
}

function closeCartBox() {
    cartbox.classList.remove("openCartBox");
}


function addToCart(referance) {
    let itemName, price, imageLink;
    itemName = referance.parentNode.children[0].innerText;
    price = referance.parentNode.children[2].innerText.split(":")[1].split("/")[0] + "/-";
    imageLink = referance.parentNode.parentNode.children[0].src;
    console.log(itemName, price, imageLink);
    createItem(itemName, price, imageLink);

    alert("Item Added to Cart!")
}

function createItem(name, price, link) {
    let listItem = document.createElement("div");
    let image = document.createElement("div");
    let img = document.createElement("img");
    let ItemName = document.createElement("h4");
    let priceP = document.createElement("p");
    let buttonContainer = document.createElement("div");
    let actionButton = document.createElement("button");

    listItem.setAttribute("class", "listItem");
    image.setAttribute("class", "image");
    buttonContainer.setAttribute("class", "buttonContainer");
    actionButton.setAttribute("class", "actionButton");

    img.setAttribute("src", link);
    ItemName.textContent = name;
    priceP.textContent = price;
    actionButton.textContent = "Remove";
    actionButton.setAttribute("onclick", "removeItem(this)");

    image.appendChild(img);
    buttonContainer.appendChild(actionButton);
    listItem.appendChild(image);
    listItem.appendChild(ItemName);
    listItem.appendChild(priceP);
    listItem.appendChild(buttonContainer);
    itemsContainer.appendChild(listItem);

    cartAmountArray.push(parseInt(price.split("/")[0]))

    cartItems.innerHTML = cartAmountArray.length;

    cartAmount.innerHTML = sum(cartAmountArray) + "/-";
}

function removeItem(referance) {
    itemsContainer.removeChild(referance.parentNode.parentNode);

    let removedValue = parseInt(referance.parentNode.parentNode.children[2].innerText.split("/-")[0]);

    cartAmountArray.splice(cartAmountArray.indexOf(removedValue),1)
    console.log(cartAmountArray);
    console.log(removedValue);

    cartItems.innerHTML = cartAmountArray.length;

    cartAmount.innerHTML = sum(cartAmountArray) + "/-";

}

function sum(array) {
    let sum = 0;
    array.forEach(element => {
        sum += element;
    });

    return sum;
}

