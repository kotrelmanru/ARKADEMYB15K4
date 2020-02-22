function is_username_valid(username){
	var hk = /[a-z]/g;
  	var kar = /[_]/;
	if(hk.test(username) && username.length >= 5 && username.length <= 8 || kar.test(username)){
      if(kar.test(username[0])){
		return false;
	}
		return true;
	}
  else {
    return false;
  }
}

function is_password_valid(password){
	var hk = /[a-z]/g;
	var hb = /[A-Z]{1}/g;
	var num = /[0-9]{1}/g;
	var kar = /[!]{1}/g;
	if(hk.test(password) && hb.test(password) && num.test(password) && kar.test(password) && password.length == 9){
		return true
	}
	else 
		return false

	}

	console.log(is_username_valid('_mustopa')); //false
	console.log(is_username_valid('ibrahim')); // true
	console.log(is_password_valid('Beeth0v3n')); //false
	console.log(is_password_valid('c4rlMax!!')); //true