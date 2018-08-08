//TEST stuff
var cart = JSON.parse(localStorage.getItem("cart"));
console.log(cart);
console.log(localStorage);
/*
function loadCart(response) {
    console.log(response);
    if (response) {
        for (var x in response) {
            var tempProduct = new Product();
            tempProduct.firstName = response[x].sen_firstName;
            tempProduct.lastName = response[x].sen_lastName;
            tempProduct.state = response[x].state;
            tempProduct.party = response[x].party;
            tempProduct.id = response[x].id;
            tempProduct.price = response[x].price;
            tempProduct.img = "/cst336Final/img/" + response[x].imgURL + ".jpg";
            cart.push(tempProduct);
        }
    }
}
*/


//end test stuff

//TODO: Add hooks into backend to grab cart, and delete cart items.
loadCartTable();

function loadCartTable() {
    if (cart.length == 0) {
        $("#empty-cart-warning").show();
    }
    else {
        var rowCounter = 0;
        for (var x = 0; x < cart.length; x++) {
            $("#cart-table").append("<tr class='cart-table-row' id='cart-row-" + rowCounter + "'>");
            var imgString = "<img src='" + cart[x].img + "' alt='" + cart[x].lastName + "'>";
            $("#cart-row-" + rowCounter).append("<td class='cart-td'>" + imgString + "</td>");
            var nameString = cart[x].firstName + " " + cart[x].lastName;
            var infoString = cart[x].state + ", " + cart[x].party;
            $("#cart-row-" + rowCounter).append("<td class='cart-td cart-top-align'>" + nameString + "<br>" +
                infoString);
            var priceString = "$" + cart[x].price;
            $("#cart-row-" + rowCounter).append("<td class='cart-td cart-top-align'>" + priceString + "</td>");
            var buttonString = "<button>Remove</button>";
            $("#cart-row-" + rowCounter).append("<td class='cart-td cart-top-align'>" + buttonString + "</td>");
            rowCounter++;
        }
        var cartTotal = sumCartPrice();
         $("#cart-table").append("<tr class='cart-table-row' id='cart-totals-row'>");
         var checkoutButtonString = "<button>Purchase</button>";
         var totalPriceString = "<span>Total: $" + cartTotal + "</span>";
         $("#cart-totals-row").append("<td colspan='4' class='cart-td'>" + totalPriceString + "<br>" +
                                checkoutButtonString + "</td>");
         
         
    }

}

function sumCartPrice() {
    var cartTotalMap = cart.map(function(item) {
        return item.price;
    });
    return cartTotalMap.reduce(function(total, num) {
        return (parseFloat(total) + parseFloat(num)).toFixed(2);
    });
}
