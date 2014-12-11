var codes = {
    "update_codes": {
        "first": [
        	{"key": "S", "value": "Nothing was truncated."},
        	{"key": "A", "value": "The address line was truncated to fit in your field."},
        	{"key": "B", "value": "The address line and city name were truncated to fit in your fields."},
        	{"key": "C", "value": "The city name was truncated to fit in your field."}
        ],
        "second": [
        	{"key": "0", "value": "No significant change to the city, state, ZIP, or ZIP+4"},
        	{"key": "1", "value": "ZIP"},
        	{"key": "2", "value": "City"},
        	{"key": "3", "value": "City and Zip"},
        	{"key": "4", "value": "State"},
        	{"key": "5", "value": "State and ZIP"},
        	{"key": "6", "value": "City and State"},
        	{"key": "7", "value": "City, State, and ZIP"},
        	{"key": "8", "value": "ZIP+4"},
        	{"key": "9", "value": "ZIP and ZIP+4"},
        	{"key": "A", "value": "City and ZIP+4"},
        	{"key": "B", "value": "City, ZIP, and ZIP+4"},
        	{"key": "C", "value": "State and ZIP+4"},
        	{"key": "D", "value": "State, ZIP, and ZIP+4"},
        	{"key": "E", "value": "City, State, and ZIP+4"},
        	{"key": "F", "value": "City, State, ZIP and ZIP+4"}
        ],
        "third": [
        	{"key": "0", "value": "No significant change to the predirectional, primary (street) name, postdirectional, or suffix"},
        	{"key": "1", "value": "Suffix"},
        	{"key": "2", "value": "Predirectional"},
        	{"key": "3", "value": "Predirectional and suffix"},
        	{"key": "4", "value": "Postdirectional"},
        	{"key": "5", "value": "Suffix and postdirectional"},
        	{"key": "6", "value": "Predirectional and postdirectional"},
        	{"key": "7", "value": "Predirectional, suffix, and postdirectional"},
        	{"key": "8", "value": "Primary name"},
        	{"key": "9", "value": "Primary name and suffix"},
        	{"key": "A", "value": "Predirectional and primary name"},
        	{"key": "B", "value": "Predirectional, primary name, and suffix"},
        	{"key": "C", "value": "Primary name and postdirectional"},
        	{"key": "D", "value": "Primary name, suffix, and postdirectional"},
        	{"key": "E", "value": "Predirectional, primary name, and postdirectional"},
        	{"key": "F", "value": "Predirectional, primary name, postdirectional, and suffix"}
        ],
        "fourth": [
        	{"key": "0", "value": "No change in county, carrier route, DP2 and/or DPC, or unit designator"},
        	{"key": "1", "value": "Unit designator"},
        	{"key": "2", "value": "DP2 and/or DPC"},
        	{"key": "3", "value": "DP2 and/or DPC and unit designator"},
        	{"key": "4", "value": "Carrier route"},
        	{"key": "5", "value": "Carrier route and unit designator"},
        	{"key": "6", "value": "Carrier route, and DP2, and/or DPC"},
        	{"key": "7", "value": "Carrier route, and DP2 and/or DPC, and unit designator"},
        	{"key": "8", "value": "County number"},
        	{"key": "9", "value": "County number and unit designator"},
        	{"key": "A", "value": "County number, and DP2, and/or DPC"},
        	{"key": "B", "value": "County number, DP2 and/or DPC, and unit designator"},
        	{"key": "C", "value": "County number and carrier route"},
        	{"key": "D", "value": "County number, carrier route, and unit designator"},
        	{"key": "E", "value": "County number, carrier route, and DP2, and/or DPC"},
        	{"key": "F", "value": "County number, carrier route, and DP2 and/or DPC, and unit designator"}
        ],
        "fifth": [
        	{"key": "0", "value": "No change to the LOT (line of travel), LOT Order (line of travel order), or Urb (Urbanization code)"},
        	{"key": "1", "value": "LOT"},
        	{"key": "2", "value": "LOT Order"},
        	{"key": "3", "value": "LOT and LOT Order"},
        	{"key": "4", "value": "Urb"},
        	{"key": "5", "value": "Urb and LOT"},
        	{"key": "6", "value": "Urb and LOT Order"},
        	{"key": "7", "value": "Urb, LOT, and LOT Order"}
        ],
        "sixth": [
        	{"key": "0", "value": "reserved"}
        ]
    },
    "error_codes": [
	    {"code": "E101", "value": "The record is missing city, state and ZIP or has only a city or only a state."},
	    {"code": "E212", "value": "The city is missing or invalid and ZIP Code is invalid."},
	    {"code": "E213", "value": "The city/state combination is invalid and the ZIP Code is missing."},
	    {"code": "E214", "value": "The city and ZIP Code are both invalid."},
	    {"code": "E216", "value": "The city and state match to more than one possible combination and the ZIP Code is either missing or invalid."},
	    {"code": "E302", "value": "The primary address is missing or invalid."},
	    {"code": "E412", "value": "The street name is invalid.  This could be due to an unusual abbreviation, misspelling or extraneous information in the primary address field."},
	    {"code": "E413", "value": "The street name matches to more than one possible street name and there is not enough additional information in the record to validate the entire address."},
	    {"code": "E420", "value": "The primary address does not have a recognizable primary number."},
	    {"code": "E421", "value": "The primary address does not contain a primary number that falls within the ranges available for the street."},
	    {"code": "E422", "value": "A pre-directional is required to validate the primary address and it is either missing or invalid."},
	    {"code": "E423", "value": "A suffix (St., Ave., Blvd.) is required to validate the primary address and the suffix is either missing or invalid."},
	    {"code": "E425", "value": "A directional and suffix (St., Ave., Blvd.) are both required to validate the primary address and both are either missing or invalid."},
	    {"code": "E427", "value": "A post-directional is required to validate the primary address and it is either missing or invalid."},
	    {"code": "E428", "value": "The address, city and state match to more than one result but cannot be verified because the ZIP is either missing or invalid."},
	    {"code": "E429", "value": "The city is either missing or invalid.  The ZIP is valid for more than one city and the address is valid in more than one of those cities."},
	    {"code": "E430", "value": "The primary address is ambiguous and matches to more than one possible combination of city, state and ZIP."},
	    {"code": "E431", "value": "Puerto Rican urbanization is required to validate the primary address and it is either missing or invalid."},
	    {"code": "E439", "value": "Record matches to the USPS EWS (Early Warning System) database and is not yet a deliverable address."},
	    {"code": "E500", "value": "Record cannot be verified, but cannot receive a more specific error code."},
	    {"code": "E501", "value": "The address appears to be foreign."},
	    {"code": "E502", "value": "All of the address fields are blank."},
	    {"code": "E503", "value": "There is a conflict with the address and it cannot be verified.  This error and address information should be communicated to an application support representative."},
	    {"code": "E504", "value": "There is a conflict with the address and it cannot be verified.  This error and address information should be communicated to an application support representative."},
	    {"code": "E505", "value": "A company name or secondary address is required to validate the address and is missing."},
	    {"code": "E600", "value": "The address was verified, but the USPS does not deliver to the address.  The record receives this error code so that it can be flagged for exclusion when presorting a mailing list."},
	    {"code": "E601", "value": "The address is not a valid delivery point and a ZIP4 was removed from the record during verification."}
    ]
};

(function() {
    document.getElementById('user_code').focus();
    document.getElementById('submit').onsubmit=function(e) {
        e.preventDefault();
        
        var code = document.getElementById('user_code').value.toUpperCase();
        
        document.getElementById('user_code').value = '';
        
        var error_result = document.getElementById('error_result');
        error_result.innerHTML = '';
        error_result.style.display = 'none';
        
        var update_result = document.getElementById('update_result');
        update_result.innerHTML = '';
        update_result.style.display = 'none';
        
        if (code.length == 4) {
            error_result.style.display = 'block';
            getError(code);
        }
        else if (code.length == 6) {
            update_result.style.display = 'block';
            getUpdate(code);
        }
        else {
            document.getElementById('error').innerHTML = 'Invalid Code - Try Again';
        }
    };
   
})();


function getError(code) {
    for (var i = 0; i < codes.error_codes.length; i++) {
        if (codes.error_codes[i].code == code) {
            document.getElementById('error_result').innerHTML = codes.error_codes[i].code + ': ' + codes.error_codes[i].value;
            break;
        }
        else {
            document.getElementById('error_result').innerHTML = "Invalid Error Code";
        }
    }
};

function getUpdate(code) {
    var container = document.getElementById('update_result');
    var codeCharCount = 0;
    var object = codes.update_codes;
    
    for (var key in object) {
        var matches = 0;
            for (var i = 0; i < object[key].length; i++) {
                if (object[key][i].key == code[codeCharCount]) {
                    container.innerHTML = container.innerHTML + object[key][i].key + ': ' + object[key][i].value + '<br />';
                    matches++;
                }
            }
            if (matches == 0) {
                container.innerHTML = container.innerHTML + 'Invalid Character<br />';
            }

            codeCharCount++;        
    }
};