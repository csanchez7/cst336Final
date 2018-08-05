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