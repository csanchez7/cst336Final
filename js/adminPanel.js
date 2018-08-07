var products = [];

function parseEditProductResponse(response) {
    if (response) {
        for (var x in response) {
            var tempProduct = new Product();
            tempProduct.firstName = response[x].sen_firstName;
            tempProduct.lastName = response[x].sen_lastName;
            tempProduct.state = response[x].state;
            tempProduct.party = response[x].party;
            tempProduct.id = response[x].senId;
            tempProduct.price = response[x].price;
            tempProduct.img = response[x].imgURL;
            products.push(tempProduct);
        }
    }
}


