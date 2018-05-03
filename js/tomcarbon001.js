// tomcarbon001 LIBRARY FUNCTIONS
// 20180404 Tom Carbon
//
//	FUNCTIONS:
//	function tomcarbontest(stg) 
//	function quickPop (id_name, stg, element_type) 
//	function quickAdd (id_name, stg, element_type, classname) 
//	function quickCopy (id_name_from, id_name_to, element_type, flag) 
//	function quickCheck(id_name, comp_stg, flag)
// function quickDelete (id_name)  
//	function getCookie(cname) 
//	function quickSQL(str) 
//
//
//
//	MODIFIED:
// 20180404 created
//
//



function tomcarbontest(stg) {
	alert(stg);
}

// quickPop: this function removes all children, then places one child element, into http.
// id_name 	= id="id_name"
// stg		= "New Text goes Here!"
// element_type = "p", or "h4", "h3", etc
function quickPop (id_name, stg, element_type) {
			var xx1 = document.getElementById(id_name);
			while (xx1.hasChildNodes()) {
				xx1.removeChild(xx1.lastChild);
			}		
			var NewDiv1 = document.createElement(element_type);		// a string, like "p"
			NewDiv1.innerHTML = stg;			// a string, like "text sample"
			xx1.appendChild(NewDiv1);
}


// quickAdd: simpler than quickPop, there's no children delete, just the addition of the target element.
// id_name 	= id="id_name"
// stg		= "New Text goes Here!"
// element_type = "p", or "h4", "h3", etc
// classname		 =  "step3-table-name"
function quickAdd (id_name, stg, element_type, classname) {
			var xx1 = document.getElementById(id_name);
			var NewDiv1 = document.createElement(element_type);		// a string, like "p"
			NewDiv1.className+= classname;
			NewDiv1.innerHTML = stg;			// a string, like "text sample"
			xx1.appendChild(NewDiv1);
}

// quickDelete: this function removes all children, that's it
// id_name 	= id="id_name"
function quickDelete (id_name) {
			var xx1 = document.getElementById(id_name);
			while (xx1.hasChildNodes()) {
				xx1.removeChild(xx1.lastChild);
			}		
}


// quickCopy: this function removes all children, then copies single display of one element to another, based on id=""
// id_name_from: 	id="id_tag_containing_source_data"
// id_name_to: 	id="id_tag_to_get_the_new_data
// element_type:	"p" or "h3", etc
// flag:    		0 = do not replace to with from if from = "".
function quickCopy (id_name_from, id_name_to, element_type, flag) {
			var xx1 = document.getElementById(id_name_to);
			var xx2 = document.getElementById(id_name_from);			
			
			var NewDiv1 = document.createElement(element_type);		
			NewDiv1.innerHTML = xx2.value;						// add the from element's data
			if (flag == 0 && xx2.value == "")	{	// don't display if the source is an empty string
					return;		// do not modify this entry
			}
			while (xx1.hasChildNodes()) {
				xx1.removeChild(xx1.lastChild);			// remove all display from the target element
			}		
			xx1.appendChild(NewDiv1);						// add new display to the target element
}

// quickCheck: this function does status checking, etc
// id_name: "vName"
//	comp_stg: eg: "Address 1" (to see if it has changed,eg))
// flag: 	0		: 	return 0 if "", else 1 (check if there's a string there))
//				"zip"	:	return 1 if zip code (last 5 digits of string) is valid, else 0.
function quickCheck(id_name, comp_stg, flag) {
	var xx2 = document.getElementById(id_name);
	if (flag == "zip") {			// return 1 if last 5 digits of string are valid zip code
		var t0 = xx2.value;
		var t1 = t0.substr((t0.length-5),5);
		if (t1 > 0 && t1 <= 99999) return 1;		// valid zip
		else return 0;										// not a valid zip
	}
	if (flag == 0) {		// return 1 if not ""
		if (xx2.value == "") return 0;
		else return 1;
	}
}

function getCookie(cname) {
    var name = cname + "=";
    var decodedCookie = decodeURIComponent(document.cookie);
    var ca = decodedCookie.split(';');
    for(var i = 0; i <ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') {
            c = c.substring(1);
        }
        if (c.indexOf(name) == 0) {
            //return c.substring(name.length, c.length);
            return c.substring(name.length, c.length) + "\n";
        }
    }
    return "";
}



