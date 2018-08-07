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

function showAvgPrice (data, status){
    if(status === "success"){
        var parsedData = JSON.parse(data)
        $("#avg-product-price-total").append(cleanMoney(parsedData.avgPrice));
        $("#avg-price").show();
    }
}

//Still needs work
function showPartyCount (data, status){
    if(status === "success"){
        var parsedData = JSON.parse(data);
        //var string = ""
        $("#avg-product-price-total").append(cleanMoney(parsedData.avgPrice));
        $("#avg-price").show();
    }
}

function showMostExpensive (data, status){
    if(status === "success"){
        var parsedData = JSON.parse(data);
        var string = parsedData.sen_firstName + " " +  parsedData.sen_lastName + " at an amount of " + cleanMoney(parsedData.max) + ".";
        $("#most-expensive").append(string);
        $("#most-expensive-label").show();
    }
}

function showReportError(){
    $("#report-error").show();
}

function cleanMoney(money){
    return "$"+ parseFloat(money).toFixed(2);
}

$("#avg-product-price").click(function(){
    $("#report-error").hide();
    ajaxCall('post', "inc/adminReports.php", {function: "avgProduct"}, showAvgPrice, showReportError)
});

$("#total-party-count").click(function(){
    $("#report-error").hide();
    ajaxCall('post', "inc/adminReports.php", {function: "partyCount"}, showPartyCount, showReportError)
});

$("#most-expensive-product").click(function(){
    $("#report-error").hide();
    ajaxCall('post', "inc/adminReports.php", {function: "mostExp"}, showMostExpensive, showReportError)
});





