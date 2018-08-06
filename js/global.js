var products = [];
var cart = [];

class Product {
    constructor() {
        this.firstName = null;
        this.lastName = null;
        this.state = null;
        this.party = null;
        this.price = null;
        this.img = null;
        this.id = null;
    }
}

//TEST DATA
var response = [{
        sen_firstName: "Lamar",
        sen_lastName: "Alexander",
        state: "TN",
        price: 45789.00,
        party: "Republican",
        imgURL: "lAlexander",
        id: 1
    },
    {
        sen_firstName: "Tammy",
        sen_lastName: "Baldwin",
        state: "WI",
        price: 30000.00,
        party: "Democrat",
        imgURL: "tBaldwin",
        id: 2
    },
    {
        sen_firstName: "John",
        sen_lastName: "Barrasso",
        state: "WY",
        price: 25000.00,
        party: "Republican",
        imgURL: "jBarrasso",
        id: 3
    },
    {
        sen_firstName: "Michael",
        sen_lastName: "Bennet",
        state: "CO",
        price: 233244.00,
        party: "Democrat",
        imgURL: "mBennet",
        id: 4
    }
];

parseProductResponse(response);
//TODO: Create ajax call to db to search.
function parseProductResponse(response) {
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
            products.push(tempProduct);
        }
    }
}

