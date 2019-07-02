(function(countries) {
    var text = $("input");

    text.on("input", function(e) {
        $("#container").empty(); //reset div elements everytime clicked. Empty child elements but border is still there
        var val = text.val();
        var matches = []; //empty content
        for (var i = 0; i < countries.length; i++) {
            // if (val == "") {
            //     return ""; //"Hello".indexOf("") = 0 too. To prevent entering empty string
            // } else

            if (countries[i].toLowerCase().indexOf(val.toLowerCase()) == 0) {
                //indexOf is case sensitive, "Hello".indexOf("ello") = 1
                //"Hello".indexOf("Hella") = -1
                matches.push(countries[i]);
                if (matches.length >= 4) {
                    break;
                }
            }
        }
        if (matches == "") {
            matches.push("no results");
        }

        //avoid using append because it slows down the loading page for looping each appended element. Wrap it all before append, do it at once
        var myHTML = "";
        for (var i = 0; i < matches.length; i++) {
            myHTML += '<div class="results">' + matches[i] + "</div>";
        }

        $(myHTML).appendTo("#container");
        $("#container").css({ border: "2px solid black", width: "169px" });
    });

    //event delegation issue
    // $(".results").on("mouseover", function() {
    //     console.log("hello");
    // }); //nothing happened because the element is added to the DOM (webpage) after the initial page load
    //Solution: look for an HTML element that is going to be on the page when the page initially loads, e.g. their parent or document
    $("#container").on("mouseover", ".results", function(e) {
        //eventlistener created on 'container' and 2nd arguement refers to just created 'results'. If it exists, runs the function
        $(".results").removeClass("highlighted"); //.eq() not specified here so it removes highlighted class from all elements
        $(e.target).addClass("highlighted"); //$(e.target) remember!
    });

    $("#container").on("mousedown", ".results", function(e) {
        $("input").val($(e.target).html());
        $("#container").css("display", "none"); //remove the whole elements including border
    });

    var currentI = 0;
    var start = true; //start the fist hightlight
    $(document).on("keydown", function(e) {
        //dont target container, it doesnt work. No delegation here

        if (e.keyCode == 40) {
            e.preventDefault(); //prevent cursor moving
            if (start == true) {
                $(".results")
                    .eq(currentI)
                    .addClass("highlighted");

                start = false;
            } else {
                $(".results")
                    .eq(currentI)
                    .removeClass("highlighted");
                currentI++;
                $(".results")
                    .eq(currentI)
                    .addClass("highlighted");
                if (currentI >= $(".results").length) {
                    currentI = $(".results").length - 1;
                    $(".results")
                        .eq(currentI)
                        .addClass("highlighted");
                }
                //console.log(currentI);
            }
        }
        if (e.keyCode == 38) {
            e.preventDefault();
            if (currentI <= 0) {
                currentI = 0;
                $(".results")
                    .eq(currentI)
                    .addClass("highlighted");
            } else {
                //else is important here to stop carrying out further from this line when reaching zero
                $(".results")
                    .eq(currentI)
                    .removeClass("highlighted");
                currentI--;
                $(".results")
                    .eq(currentI)
                    .addClass("highlighted");
            }
        }

        if (e.keyCode == 13) {
            // console.log($(e.target)); //dont use e.target here because it targets to 'input'.
            // console.log($(".results").eq(currentI));
            $("input").val(
                $(".results")
                    .eq(currentI)
                    .html()
            );
            $("#container").css("display", "none");
        }
    });

    $("input").on("focus", function(e) {
        $(e.target).trigger("input");
        $("#container").css("display", "block");
    });
    $("input").on("blur", function(e) {
        $("#container").css("display", "none");
    });
})([
    "Afghanistan",
    "Albania",
    "Algeria",
    "American Samoa",
    "Angola",
    "Anguilla",
    "Antigua",
    "Argentina",
    "Armenia",
    "Aruba",
    "Australia",
    "Austria",
    "Azerbaijan",
    "Bahamas",
    "Bahrain",
    "Bangladesh",
    "Barbados",
    "Belarus",
    "Belgium",
    "Belize",
    "Benin",
    "Bermuda",
    "Bhutan",
    "Bolivia",
    "Bonaire (Netherlands Antilles)",
    "Bosnia Herzegovina",
    "Botswana",
    "Brazil",
    "British Virgin Islands",
    "Brunei",
    "Bulgaria",
    "Burkina Faso",
    "Burundi",
    "Cambodia",
    "Cameroon",
    "Canada",
    "Cape Verde",
    "Cayman Islands",
    "Central African Republic",
    "Chad",
    "Chile",
    "China",
    "Colombia",
    "Comoros",
    "Congo",
    "Congo, The Democratic Republic of",
    "Cook Islands",
    "Costa Rica",
    "Croatia",
    "Curacao (Netherlands Antilles)",
    "Cyprus",
    "Czech Republic",
    "Denmark",
    "Djibouti",
    "Dominica",
    "Dominican Republic",
    "Ecuador",
    "Egypt",
    "El Salvador",
    "Equatorial Guinea",
    "Eritrea",
    "Estonia",
    "Ethiopia",
    "Fiji",
    "Finland",
    "France",
    "French Guiana",
    "French Polynesia",
    "Gabon",
    "Gambia",
    "Georgia",
    "Germany",
    "Ghana",
    "Gibraltar",
    "Greece",
    "Grenada",
    "Guadeloupe",
    "Guam",
    "Guatemala",
    "Guinea",
    "Guinea Bissau",
    "Guyana",
    "Haiti",
    "Honduras",
    "Hong Kong",
    "Hungary",
    "Iceland",
    "India",
    "Indonesia",
    "Iraq",
    "Ireland (Republic of)",
    "Israel",
    "Italy",
    "Ivory Coast",
    "Jamaica",
    "Japan",
    "Jordan",
    "Kazakhstan",
    "Kenya",
    "Kiribati",
    "Kosovo",
    "Kosrae Island",
    "Kuwait",
    "Kyrgyzstan",
    "Laos",
    "Latvia",
    "Lebanon",
    "Lesotho",
    "Liberia",
    "Libya",
    "Lithuania",
    "Luxembourg",
    "Macau",
    "Macedonia (FYROM)",
    "Madagascar",
    "Malawi",
    "Malaysia",
    "Maldives",
    "Mali",
    "Malta",
    "Marshall Islands",
    "Martinique",
    "Mauritania",
    "Mauritius",
    "Mayotte",
    "Mexico",
    "Moldova",
    "Mongolia",
    "Montenegro",
    "Montserrat",
    "Morocco",
    "Mozambique",
    "Namibia",
    "Nepal",
    "Netherlands",
    "New Caledonia",
    "New Zealand",
    "Nicaragua",
    "Niger",
    "Nigeria",
    "Northern Mariana Islands",
    "Norway",
    "Oman",
    "Pakistan",
    "Palau",
    "Panama",
    "Papua New Guinea",
    "Paraguay",
    "Peru",
    "Philippines",
    "Poland",
    "Ponape",
    "Portugal",
    "Puerto Rico",
    "Qatar",
    "Reunion",
    "Romania",
    "Rota",
    "Russia",
    "Rwanda",
    "Saba (Netherlands Antilles)",
    "Saipan",
    "Samoa",
    "Saudi Arabia",
    "Senegal",
    "Serbia",
    "Seychelles",
    "Sierra Leone",
    "Singapore",
    "Slovakia",
    "Slovenia",
    "Solomon Islands",
    "South Africa",
    "South Korea",
    "Spain",
    "Sri Lanka",
    "St. Barthelemy",
    "St. Croix",
    "St. Eustatius (Netherlands Antilles)",
    "St. John",
    "St. Kitts and Nevis",
    "St. Lucia",
    "St. Maarten (Netherlands Antilles)",
    "St. Thomas",
    "St. Vincent and the Grenadines",
    "Suriname",
    "Swaziland",
    "Sweden",
    "Switzerland",
    "Syria",
    "Taiwan",
    "Tajikistan",
    "Tanzania",
    "Thailand",
    "Tinian",
    "Togo",
    "Tonga",
    "Tortola",
    "Trinidad and Tobago",
    "Truk",
    "Tunisia",
    "Turkey",
    "Turkmenistan",
    "Turks and Caicos",
    "Tuvalu",
    "US Virgin Islands",
    "Uganda",
    "Ukraine",
    "Union Island",
    "United Arab Emirates",
    "United Kingdom",
    "United States",
    "Uruguay",
    "Uzbekistan",
    "Vanuatu",
    "Venezuela",
    "Vietnam",
    "Virgin Gorda",
    "Wallis and Futuna",
    "Yap",
    "Yemen",
    "Zambia",
    "Zimbabwe"
]);
