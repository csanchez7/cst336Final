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
        sen_firstName: "John",
        sen_lastName: "McCain",
        state: "TN",
        price: 45789.00,
        party: "Republican",
        imgURL: "JMcCain",
        senId: 1
    },
    {
        sen_firstName: "Tammy",
        sen_lastName: "Baldwin",
        state: "WI",
        price: 30000.00,
        party: "Democrat",
        imgURL: "JThune",
        senId: 2
    },
    {
        sen_firstName: "John",
        sen_lastName: "Barrasso",
        state: "WY",
        price: 25000.00,
        party: "Republican",
        imgURL: "KHarris",
        senId: 3
    },
    {
        sen_firstName: "Michael",
        sen_lastName: "Bennet",
        state: "CO",
        price: 233244.00,
        party: "Democrat",
        imgURL: "RPaul",
        senId: 4
    }
];


function ajaxCall(type, url, payload, successCallback, errorCallback){
     $.ajax({
      url: url,
      type: type,
      data: payload,
      success: successCallback,
      error: errorCallback
    });
}

