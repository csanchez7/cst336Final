var products = [];

//TODO: Add hooks to backend to grab search results from backend. 

var states = [
    "AK", "AL", "AR", "AZ", "CA", "CO", "CT", "DC",
    "DE", "FL", "GA", "HI", "IA", "ID", "IL", "IN", "KS", "KY", "LA",
    "MA", "MD", "ME", "MI", "MN", "MO", "MS", "MT", "NC", "ND", "NE",
    "NH", "NJ", "NM", "NV", "NY", "OH", "OK", "OR", "PA", "RI", "SC",
    "SD", "TN", "TX", "UT", "VA", "VT", "WA", "WI", "WV", "WY"
];

loadStateDropdown();

function loadStateDropdown() {
    for (var i = 0; i < states.length; i++) {
        $('<option/>').val(states[i]).html(states[i]).appendTo('#state-select');
    }
}

function parseProductResponse(response) {
    if (response) {
        for (var x in response) {
            var tempProduct = new Product();
            tempProduct.firstName = response[x].sen_firstName;
            tempProduct.lastName = response[x].sen_lastName;
            tempProduct.state = response[x].state;
            tempProduct.party = response[x].party;
            tempProduct.id = response[x].senId;
            tempProduct.price = response[x].price;
            tempProduct.img = "/cst336Final/img/" + response[x].imgURL + ".jpg";
            products.push(tempProduct);
        }
    }
}


function loadProductTable() {
    var rowCounter = 0;
    for (var x = 0; x < products.length; x++) {
        if (x % 5 == 0 && x >= 5) {
            rowCounter++;
            $("#product-table").append("<tr class='product-table-row' id='product-row-" + rowCounter + "'>");
        }
        var imgString = "<img src='" + products[x].img + "' alt='" + products[x].lastName + "'>";
        var nameString = products[x].firstName + " " + products[x].lastName;
        var infoString = products[x].state + ", " + products[x].party;
        var priceString = "$" + products[x].price;
        var buttonString = "<button id='" + products[x].id + "' class='add-to-cart-button'>Add To Cart</button>";
        $("#product-row-" + rowCounter).append("<td class='product-td' id='product-td-" + products[x].id + "'>" + imgString + "<br>" +
            nameString + "<br>" + infoString + "<br>" + priceString + "<br>" + buttonString + "</td>");
    }
    //move to ajax once built
    $("#product-search-button").removeClass("disabled");
}

$("#hide-more-search").click(function(){
     $(this).hide();
     $("#show-more-search").show();
     $("#addtional-search-options").hide();
});

$("#show-more-search").click(function(){
     $(this).hide();
     $("#hide-more-search").show();
     $("#addtional-search-options").show();
});

$("#show-more-search").click(function(){
     $(this).hide();
     $("#hide-more-search").show();
     $("#addtional-search-options").show();
});

$("#product-search-button").click(function(){
     $(this).addClass("disabled");
     loadProductTable();
});

$("#party-radio-reset").click(function(){
    $( ".party-select" ).prop( "checked", false );
});
 





