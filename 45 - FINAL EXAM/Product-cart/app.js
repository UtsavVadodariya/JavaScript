function search() {
    let data = document.getElementById("search").value;

    fetch(`https://fakestoreapi.com/products/category/${data}`)
        .then((res) => res.json())
        .then((json) => {
            console.log(json);
            displayData(json);
        });
}

function displayData(json) {
    // Clear previous results
    document.getElementById("main").innerHTML = '';

    json.forEach((el) => {
        let div = document.createElement("div");
        div.className = "div1";

        let text = document.createElement("h1");
        text.innerHTML = el.category;
        text.className = "h1";

        let text1 = document.createElement("h3");
        text1.innerHTML = el.title;

        let text2 = document.createElement("h4");
        text2.innerHTML = "$ " + el.price;

        let img = document.createElement("img");
        img.setAttribute("src", el.image);
        img.className = "img-1";

        let input1 = document.createElement("input");
        input1.className = "input1";

        let btn2 = document.createElement("button");
        btn2.innerText = "Edit";
        btn2.className = "btn-edit";

        let btn3 = document.createElement("button");
        btn3.innerText = "Update";
        btn3.className = "btn-update";

        let btn4 = document.createElement("button");
        btn4.innerText = "Delete";
        btn4.className = "btn-delete";

        let btn5 = document.createElement("button");
        btn5.innerText = "Add to Cart";
        btn5.className = "btn-cart";

        div.append(text, text1, text2, img, input1, btn2, btn3, btn4, btn5);
        document.getElementById("main").append(div);

        btn2.addEventListener("click", function () {
            input1.value = text1.innerText;
            input1.style.display = "block";
            btn3.style.display = "inline";
        });

        btn3.addEventListener("click", function () {
            const newValue = input1.value;
            input1.style.display = "none";

            text1.innerText = newValue;
        });

        btn4.addEventListener("click", function () {
            div.remove();
        });

        btn5.addEventListener("click", function () {
            addToCart(el);
        });
    });
}

function addToCart(item) {
    const cartItems = document.getElementById("cart-items");
    
    // Create cart item element
    let cartItem = document.createElement("div");
    cartItem.className = "cart-item";
    
    let itemDetails = document.createElement("span");
    itemDetails.innerHTML = `${item.title} - $${item.price}`;
    
    let removeButton = document.createElement("button");
    removeButton.innerText = "Remove";
    removeButton.className = "btn-remove";
    removeButton.onclick = function () {
        cartItem.remove();
    };

    cartItem.append(itemDetails, removeButton);
    cartItems.appendChild(cartItem);
}
