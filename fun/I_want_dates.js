A) 
window.alert = function ( text ) { console.log( 'tried to alert: ' + text ); return true; };

function birthday(aaa){
 var format = /^([0-9]{2}(0[1-9]|1[0-2])(0[1-9]|[1,2][0-9]|3[0,1]))$/;
 if(format.test(aaa)){
  _0x9a220(aaa);
 }else{
 }
}

for(var i=800000; i<999999; i++) {
    birthday(i);
}


B)
alert=function(){}

for (var x = 95; x <= 99; x++) {
	for (var y = 1; y <= 12; y++) {
		for (var z = 1; z <= 31; z++) {
			document.getElementById("pass").value = String(x) + String(y).padStart(2, '0') + String(z).padStart(2, '0')
			_0x9a220(pass.value);
		}
	}
}

C)
year = "96";
    for(var j =1; j<13; j++){
		if(j < 10){
			month = "0" + String(j);
		}
		else {
        month = String(j);
		}
		
		for(var k = 1; k < 32; k++){
			if(k < 10)
				day = "0" + String(k);
	
			else 
				day = String(k);
			
			birth = year + month + day
			_0x9a220(birth);
		}
    }
