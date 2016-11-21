$(document).ready(function() {
/******************************************************************
* tomcarbon20160909
* fly my pretties!
******************************************************************/
//window.alert("Hello from the initialization portion of banksuite.js. ");
var tx = coinjs.transaction();
var tempstring;
var work;
var work_balance = [];
var work_unconfirmed_balance = [];
var work_balance_total = parseFloat("0.00000000");

/* first time */
$("#bankSuitePersonal1PayBox"	).toggle("fast","swing");
$("#bankSuitePersonal2PayBox"	).toggle("fast","swing");
$("#bankSuiteSlushPayBox"	).toggle("fast","swing");
$("#bankSuiteCheckingPayBox"	).toggle("fast","swing");
$("#bankSuiteSavingsPayBox"	).toggle("fast","swing");
$("#bankSuiteDoGoodFundPayBox"	).toggle("fast","swing");
$("#bankSuitePageURL").val(document.location.origin+''+document.location.pathname+'#bankSuite');

/* user clicks the 'Split' option on the private key */
$("#bankSuiteSplitPrivate").click(function(){
	var PSKey = document.getElementById("bankSuiteNewPrivateSuiteKey").value;
  	//console.info(PSKey + " is the value and " + PSKey.length + " is the length.");
	/* split the Private Suite Key into its two component parts. */
	if (PSKey.length == 102) {
		var res1 = PSKey.slice(0,51);		// first key
		var res2 = PSKey.slice(51);		// second key
		$("#bankSuiteNewPrivateSuiteKeyS1").val(res1);
        	$("#bankSuiteNewPrivateSuiteKeyS1").removeClass("hidden");
		$("#bankSuiteNewPrivateSuiteKeyS2").val(res2);
        	$("#bankSuiteNewPrivateSuiteKeyS2").removeClass("hidden");
	}
	else console.error("Size for private key sb 102 but actually was " + PSKey.length);
});


/* user clicks on the 'Quick Instructions' */
$("#bankSuiteQuickInstructions").click(function(){
	var tt1 = 	"Step 1: Click the GREEN Button (Make New Suite Keys) to make a new account.\n" +
			"Step 2: Save the Private Suite Key (in the BLUE Box) to a safe, secure location.\n" + 
			"Step 3: Bookmark or Save the 'shareable URL'.\n\n" +
			"Your DBS (Dogecoin Bankings Suite) Account is now ready for use.";
	console.info(tt1);
	alert(tt1);
});

/* user clicks the 'create new Dogecoin Bankings Suite' button on the bankSuite Interface*/
$("#bankSuiteNewKeys").click(function(){
	coinjs.compressed = false;

	/* put the old ones away in case the user's already generated some. */
        $("#bankSuiteNewPrivateSuiteKeyS1").val("");
       	$("#bankSuiteNewPrivateSuiteKeyS1").addClass("hidden");
        $("#bankSuiteNewPrivateSuiteKeyS2").val("");
       	$("#bankSuiteNewPrivateSuiteKeyS2").addClass("hidden");
	/* make the addresses then display data to html */
	var coin  = coinjs.newKeys(null);
	var coin2 = coinjs.newKeys(null);
	/* clear out whatever fields were there before, if any */
        $("#bankSuitePersonal1").val("");
        $("#bankSuitePersonal1URL").val("");
        $("#bankSuitePersonal1Balance").val("");
        $("#bankSuitePersonal2").val("");
        $("#bankSuitePersonal2URL").val("");
        $("#bankSuitePersonal2Balance").val("");
        $("#bankSuiteChecking").val("");
        $("#bankSuiteCheckingURL").val("");
        $("#bankSuiteCheckingBalance").val("");
        $("#bankSuiteChecking").val("");
        $("#bankSuiteSlush").val("");
        $("#bankSuiteSlushURL").val("");
        $("#bankSuiteSlushBalance").val("");
        $("#bankSuiteSavings").val("");
        $("#bankSuiteSavingsURL").val("");
        $("#bankSuiteSavingsBalance").val("");
        $("#bankSuiteDoGoodFund").val("");
        $("#bankSuiteDoGoodFundURL").val("");
        $("#bankSuiteDoGoodFundBalance").val("");

	$("#bankSuitePubKey1").val(coin.pubkey);
	$("#bankSuitePubKey2").val(coin2.pubkey);
	$("#bankSuiteNewPublicSuiteKey").val(coin.pubkey+coin2.pubkey);
	$("#bankSuiteNewPrivateSuiteKey").val(coin.wif+coin2.wif);
        $("#bankSuitePageURL").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+coin.pubkey+coin2.pubkey+'#bankSuite');


	//$("#bankSuiteNewScreen02").removeClass("hidden");	// show the URL with the Public Key in it. this is done in bank_suite_loader

        $("#bankSuiteNewScreen03").removeClass("hidden");	// show new Private Suite Key

	var tt1 = "In case you were curious, here is the manual procedure:\n" +
			"Click on the doge to watch the HowToVideo for making two Dogecoin Addresses, and do just that.\n" + 
			"Put your two public keys together as one. That's your Public Suite Key!\n"  + 
			"Put your two private keys together as one. That's your Private Suite Key!\n" + 
			"These keys might look lengthy but you are very close to the blockchain right now, can you feel it?\n" + 
			"Keep your Private Suite Key extra safe."+
			"And then use the URL link for account access. The Public Suite Key is contained therein.";
	console.info(tt1);
	bank_suite_loader(1);


});

/* user presses one of the 6 'Spend Buttons that opens detail about one multisig */
$("#bsTogBtn1").click(function(){	// PERSONAL 1
//        $("#bankSuitePersonal1PayBox").removeClass("hidden");	
	$("#bankSuitePersonal1PayBox").toggle();
});


/* user presses one of the 6 'Spend Buttons that opens detail about one multisig */
$("#bsTogBtn2").click(function(){	// PERSONAL 1
        $("#bankSuitePersonal2PayBox").toggle();
});

/* user presses one of the 6 'Spend Buttons that opens detail about one multisig */
$("#bsTogBtn3").click(function(){	// PERSONAL 1
        $("#bankSuiteSlushPayBox").toggle();
});

/* user presses one of the 6 'Spend Buttons that opens detail about one multisig */
$("#bsTogBtn4").click(function(){	// PERSONAL 1
        $("#bankSuiteCheckingPayBox").toggle();
});

/* user presses one of the 6 'Spend Buttons that opens detail about one multisig */
$("#bsTogBtn5").click(function(){	// PERSONAL 1
        $("#bankSuiteSavingsPayBox").toggle();
});

/* user presses one of the 6 'Spend Buttons that opens detail about one multisig */
$("#bsTogBtn6").click(function(){	// PERSONAL 1
        $("#bankSuiteDoGoodFundPayBox").toggle();
});



/******************************************************
* The next SIX have to do with clicking the 'Next'
* button to go to the WITHDRAW screen.
******************************************************/
$("#bankSuitePay1").click(function(){	// PERSONAL 1
	var v1 	= document.getElementById("bankSuitePersonal1Redeem").value;
	var redeem_script = v1.trim();
	var v2	= document.getElementById("bankSuitePersonal1").value;
	var address 	= v2.trim();
	var v3	= document.getElementById("bankSuitePersonal1ToAddr").value;
	var to_address 	= v3.trim();
	var v4	= document.getElementById("bankSuitePersonal1ToAmt").value;
	var amount 	= v4.trim();
	var msg = "personal1";
	/* just separate the fields by . */
	var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
			msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
	//console.info("Value is " + tt1);
	window.open(tt1);
});

$("#bankSuitePay2").click(function(){	// PERSONAL 2
	var v1 	= document.getElementById("bankSuitePersonal2Redeem").value;
	var redeem_script = v1.trim();
	var v2	= document.getElementById("bankSuitePersonal2").value;
	var address 	= v2.trim();
	var v3	= document.getElementById("bankSuitePersonal2ToAddr").value;
	var to_address 	= v3.trim();
	var v4	= document.getElementById("bankSuitePersonal2ToAmt").value;
	var amount 	= v4.trim();
	var msg = "personal2";
	/* just separate the fields by . */
	var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
			msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
	console.info("Value is " + tt1);
	window.open(tt1);
});

$("#bankSuitePay3").click(function(){
	var v1 	= document.getElementById("bankSuiteSlushRedeem").value;
	var redeem_script = v1.trim();
	var v2	= document.getElementById("bankSuiteSlush").value;
	var address 	= v2.trim();
	var v3	= document.getElementById("bankSuiteSlushToAddr").value;
	var to_address 	= v3.trim();
	var v4	= document.getElementById("bankSuiteSlushToAmt").value;
	var amount 	= v4.trim();
	var msg = "nomsg";
	/* just separate the fields by . */
	var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
			msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
	console.info("Value is " + tt1);
	window.open(tt1);
});

$("#bankSuitePay4").click(function(){
	var v1 	= document.getElementById("bankSuiteCheckingRedeem").value;
	var redeem_script = v1.trim();
	var v2	= document.getElementById("bankSuiteChecking").value;
	var address 	= v2.trim();
	var v3	= document.getElementById("bankSuiteCheckingToAddr").value;
	var to_address 	= v3.trim();
	var v4	= document.getElementById("bankSuiteCheckingToAmt").value;
	var amount 	= v4.trim();
	var msg = "nomsg";
	/* just separate the fields by . */
	var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
			msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
	console.info("Value is " + tt1);
	window.open(tt1);
});

$("#bankSuitePay5").click(function(){
	var v1 	= document.getElementById("bankSuiteSavingsRedeem").value;
	var redeem_script = v1.trim();
	var v2	= document.getElementById("bankSuiteSavings").value;
	var address 	= v2.trim();
	var v3	= document.getElementById("bankSuiteSavingsToAddr").value;
	var to_address 	= v3.trim();
	var v4	= document.getElementById("bankSuiteSavingsToAmt").value;
	var amount 	= v4.trim();
	var msg = "nomsg";
	/* just separate the fields by . */
	var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
			msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
	console.info("Value is " + tt1);
	window.open(tt1);
});

$("#bankSuitePay6").click(function(){
	var v1 	= document.getElementById("bankSuiteDoGoodFundRedeem").value;
	var redeem_script = v1.trim();
	var v2	= document.getElementById("bankSuiteDoGoodFund").value;
	var address 	= v2.trim();
	var v3	= document.getElementById("bankSuiteDoGoodFundToAddr").value;
	var to_address 	= v3.trim();
	var v4	= document.getElementById("bankSuiteDoGoodFundToAmt").value;
	var amount 	= v4.trim();
	var msg = "nomsg";
	/* just separate the fields by . */
	var tt1 = document.location.origin+''+document.location.pathname+'?redeemMultiSig='+
			msg + '.' + address + '.' + redeem_script + '.' + to_address + '.' + amount + '#redeemMultiSig';
	console.info("Value is " + tt1);
	window.open(tt1);
});



/***************************************************************
* has information been passed to  as in by a URL?
***************************************************************/
var _getVerify = _get("bankSuite");
if(_getVerify[0]){
	$("#bankSuitePubKey1").val(_getVerify[0]);
	window.location.hash = "#bankSuite";
	tempstring = "Show the Balances";
    setTimeout(function () {
	$("#bankSuiteLoad").click();
    }, 1500); 
}

/* this is for clicking the 'next' button on the Bank Suite screen, which loads up six multisigs */
/********************************************
** variance = 0 - load the wallet addresses 
*  variance = 1 - just display the multisigs
*********************************************/
$("#bankSuiteLoad").click(function(){
	bank_suite_loader(0);
});


function bank_suite_loader(variance) {
var bs_pubKey1 = document.getElementById("bankSuitePubKey1").value;		// retrieve the pubkeys from the html
var bs_pubKey2 = document.getElementById("bankSuitePubKey2").value;
var keys = [];
var bs_multiPersonal1;
var bs_multiPersonal2;
var bs_multiSlush;
var bs_multiChecking;
var bs_multiSavings;
var bs_multiDoGoodFund;
 

	$("#bankSuiteNewScreen02").removeClass("hidden");	// show the URL with the Public Key in it.

	/* remove the "Go/Refresh" Button, it'll stay hidden 20160920 */ 
        $("#bankSuiteLoadBtnWrap").addClass("hidden");	// hide the go/refresh button for seconds	

	/* TCC I've decided to just hide the button after it's been clicked, it's too much trouble for now */
/*
        $("#bankSuiteLoadBtnWrapWait").removeClass("hidden");	// replace with please wait button...
	setTimeout(function () {
        	$("#bankSuiteLoadBtnWrap").removeClass("hidden");	//  then add it back again after x seconds
        	$("#bankSuiteLoadBtnWrapWait").addClass("hidden");	//and hide the please wait.
	}, 4500); 
*/

//	console.info("top of #bankSuiteLoad.\nPubKey1 = " + bs_pubKey1 + "\nPubKey2 = " + bs_pubKey2);
	/* check if this is a single public key or a double public key or unknown length*/
	if (bs_pubKey1.length == 130) {
		console.info("A single public key has been brought into port 1:");
		keys.push(bs_pubKey1);
		keys.push(bs_pubKey2);	// the assumption is that it's been populated, but meh
        	keys.sort();	// order the keys alphabetically
		$("#bankSuitePubKey1").val(bs_pubKey1);
		$("#bankSuitePubKey2").val(bs_pubKey2);
	} else if (bs_pubKey1.length == 260) {
		    var res1 = bs_pubKey1.slice(0,130);		// first key
		    var res2 = bs_pubKey1.slice(130);		// second key
//		    document.getElementById("demo").innerHTML = res;
//		    document.getElementById("demo2").innerHTML = res2;
		console.info("Two public keys have been brought into port 1.");
		keys.push(res1);
		keys.push(res2);
        	keys.sort();	// order the keys alphabetically
		$("#bankSuitePubKey1").val(keys[0]);
		$("#bankSuitePubKey2").val(keys[1]);
	} else {
		console.error("A public length of " + bs_pubKey1.length + " bytes is not supported.");
		return false;
	}

//        keys.sort();	// order the keys alphabetically

	/* check for duplicates */
       for (var i=0;i<keys.length;i++) {
		for (var j=0; j<keys.length;j++) {
			if (i == j) {
				/* do nothing */
			} else {
				if (keys[i] == keys[j]) {
					var tt1 = "ERROR: These public keys are both the same.";
					console.error(tt1);
					alert(tt1);
					return false;   // this is an ERROR 
				}
			}
		}
	}
	console.info("PubKey1 (sorted) = " + keys[0]);
	console.info("PubKey2 (sorted) = " + keys[1]);

	/* here's the URL for this page. */
        $("#bankSuitePageURL").val(document.location.origin+''+document.location.pathname+  '?bankSuite='+bs_pubKey1+bs_pubKey2+'#bankSuite');

	/********************************
	*  Personal 1 (1/1 multisig) 
	********************************/
	var keystmp = [];
	keystmp.push(keys[0].toString());
	var multisig1 =  coinjs.pubkeys2MultisigAddress(keystmp, 1);
                        $("#bankSuitePersonal1").val(multisig1['address']);
                        $("#bankSuitePersonal1Redeem").val(multisig1['redeemScript']);
                        $("#bankSuitePersonal1URL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig1['redeemScript']+'#verify');
	console.info("sending multisig1: " + JSON.stringify(multisig1, null, 4));

	/********************************
	*  Personal 2 (1/1 multisig) 
	********************************/
	var keystmp = [];
	keystmp.push(keys[1].toString());
	var multisig2 =  coinjs.pubkeys2MultisigAddress(keystmp, 1);
                        $("#bankSuitePersonal2").val(multisig2['address']);
                        $("#bankSuitePersonal2Redeem").val(multisig2['redeemScript']);
                        $("#bankSuitePersonal2URL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig2['redeemScript']+'#verify');

	/********************************
	* Slush Fund (1/2 Multisig)
	********************************/
	var multisig3 =  coinjs.pubkeys2MultisigAddress(keys, 1);
                        $("#bankSuiteSlush").val(multisig3['address']);
                        $("#bankSuiteSlushRedeem").val(multisig3['redeemScript']);
                        $("#bankSuiteSlushURL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig3['redeemScript']+'#verify');


	/********************************
	* Checking Account (1/2 Multisig)
	* (reverse the order of keys)
	********************************/
	var keystmp = [];
	keystmp.push(keys[1].toString());
	keystmp.push(keys[0].toString());
	var multisig4 =  coinjs.pubkeys2MultisigAddress(keystmp, 1);
                        $("#bankSuiteChecking").val(multisig4['address']);
                        $("#bankSuiteCheckingRedeem").val(multisig4['redeemScript']);
                        $("#bankSuiteCheckingURL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig4['redeemScript']+'#verify');


	/********************************
	* Savings Account (2/2 Multisig)
	********************************/
	var keystmp = [];
	keystmp.push(keys[1].toString());
	keystmp.push(keys[0].toString());
	var multisig5 =  coinjs.pubkeys2MultisigAddress(keystmp, 2);
                        $("#bankSuiteSavings").val(multisig5['address']);
                       $("#bankSuiteSavingsRedeem").val(multisig5['redeemScript']);
                        $("#bankSuiteSavingsURL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig5['redeemScript']+'#verify');

	/********************************
	* Do Good Fund (2/2 Multisig)
	* (reverse the order of keys)
	********************************/
	var multisig6 =  coinjs.pubkeys2MultisigAddress(keys, 2);
                        $("#bankSuiteDoGoodFund").val(multisig6['address']);
                        $("#bankSuiteDoGoodFundRedeem").val(multisig6['redeemScript']);
                        $("#bankSuiteDoGoodFundURL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig6['redeemScript']+'#verify');

	/********************************
	* Arbitrated Multisig (2/3)
	* Add the Arbitrator Key to the end.
	********************************/
/*
	var bs_pubKey3 = document.getElementById("bankSuiteArbitratorKey").value;
	keys.push(bs_pubKey3);
	var multisig =  coinjs.pubkeys2MultisigAddress(keys, 2);
                        $("#bankSuiteArbitrated").val(multisig['address']);
                        $("#bankSuiteArbitratedURL").val(document.location.origin+''+document.location.pathname+'?verify='+multisig['redeemScript']+'#verify');
                        $("#bankSuiteArbitratorKey").val(bs_pubKey3.toString());
*/

	work_balance_total = 0;
	/* if the variance = 1 do not show the balance info */
	if (variance == 1) {
				var el_tempvaro = "Balance: zero";
				document.getElementById("bankSuitePersonal1Balance").innerHTML = el_tempvaro; //display to HTML
				document.getElementById("bankSuitePersonal2Balance").innerHTML = el_tempvaro; //display to HTML
				document.getElementById("bankSuitePersonal3Balance").innerHTML = el_tempvaro; //display to HTML
				document.getElementById("bankSuitePersonal4Balance").innerHTML = el_tempvaro; //display to HTML
				document.getElementById("bankSuitePersonal5Balance").innerHTML = el_tempvaro; //display to HTML
				document.getElementById("bankSuitePersonal6Balance").innerHTML = el_tempvaro; //display to HTML
		/* if the variance = 1 just show zero balances */
		$("bankSuitePersonal1Balance").hide(100, function(){
		});
		$("bankSuitePersonal2Balance").hide(100, function(){
		});
		$("bankSuitePersonal3Balance").hide(100, function(){
		});
		$("bankSuitePersonal4Balance").hide(200, function(){
		});
		$("bankSuitePersonal5Balance").hide(200, function(){
		});
		$("bankSuitePersonal6Balance").hide(200, function(){
		});
	} else {
		/* variance = 0, retrieve the balances */
		bankSuite_wallet_balance(multisig1,"bankSuitePersonal1Balance",0);
		bankSuite_wallet_balance(multisig2,"bankSuitePersonal2Balance",1);
		bankSuite_wallet_balance(multisig3,"bankSuitePersonal3Balance",2);
		bankSuite_wallet_balance(multisig4,"bankSuitePersonal4Balance",3);
		bankSuite_wallet_balance(multisig5,"bankSuitePersonal5Balance",4);
		bankSuite_wallet_balance(multisig6,"bankSuitePersonal6Balance",5);
		$("bankSuitePersonal1Balance").hide(1000, function(){
		});
		$("bankSuitePersonal2Balance").hide(1000, function(){
		});
		$("bankSuitePersonal3Balance").hide(1000, function(){
		});
		$("bankSuitePersonal4Balance").hide(2000, function(){
		});
		$("bankSuitePersonal5Balance").hide(2000, function(){
		});
		$("bankSuitePersonal6Balance").hide(2000, function(){
		});
		/* display the total cumulative balance */
		setTimeout(function () {
			var totaltemp = "Cumulative Balance: " + work_balance_total;
			//document.getElementById("bankSuiteCumBalance").innerHTML = totaltemp; //display to HTML   // no don't display it TCC20160916
			document.getElementById("bankSuiteCumBalance").innerHTML = "Here are your accounts:"; //display to HTML // whooptee hooptee doo. UFN
		}, 9000);
	}
}


/* get from chain.so, then wait before displaying */
function bankSuite_wallet_balance(multisig, urlName, idx) {
var tt1 = [];
var tt2 = [];
	var ttimer = (1050 * parseInt(idx));	// a good long time
	setTimeout(function () {
		console.info("bankSuite_wallet_balance. Input Address: " + multisig['address']);
                $.ajax ({
                        type: "GET",
                        url: "https://chain.so/api/v2/get_address_balance/DOGE/" + multisig['address'],
                        dataType: "json",
                        //error: function(data) {
                         //       console.error(JSON.stringify(data, null, 4));
                          //      tt1[idx] = JSON.stringify(data, null, 4);
//                                console.error("bankSuite_wallet_balance fail: %s",tt1[idx]);
 //                       },
                        error: function(data) {
                                tt1[idx] = JSON.stringify(data, null, 4);
                                console.error("bankSuite_wallet_balance fail: %s",tt1[idx]);
                        },
                        success: function(data) {
                                tt1[idx] = JSON.stringify(data, null, 4);
				console.info("bankSuite_wallet_balance: " + tt1[idx]);
				work_balance[idx] = data.data.confirmed_balance;
				work_balance_total += parseFloat(data.data.confirmed_balance);
				var el_tempvaro = "Balance: " + work_balance[idx];
				document.getElementById(urlName).innerHTML = el_tempvaro; //display to HTML
                        },
                        complete: function(data, status) {
				console.info("bankSuite_wallet_balance is complete for idx = " + idx);
                        }
                });
	}, ttimer);
return true;
}

function _get(value) {
	var dataArray = (document.location.search).match(/(([a-z0-9\_\[\]]+\=[a-z0-9\_\.\%\@]+))/gi);
	var r = [];
	if(dataArray) {
		for(var x in dataArray) {
			if((dataArray[x]) && typeof(dataArray[x])=='string') {
				if((dataArray[x].split('=')[0].toLowerCase()).replace(/\[\]$/ig,'') == value.toLowerCase()) {
					r.push(unescape(dataArray[x].split('=')[1]));
				}
			}
		}
	}
	return r;
}

/********************************************************************
* the reset and clear everything button on the  screen.
*********************************************************************/
$('#bankSuiteReset').on('click', function() {
        var tt1 = document.location.origin + '' + document.location.pathname + '#bankSuite';
        console.info("Value is " + tt1);
        window.open(tt1,"_parent");	// tempola this only seems to work once
});


});   /* EOF */

