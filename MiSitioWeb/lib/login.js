'use strict';

var user = null, pass = null, entrarSubmit = null, derechaDiv = null, userNameH3 = "";
var users = [
	{
		"name": "maialen",
		"password": "12345678"
	}, 
	{
		"name": "juanjo",
		"password": "12345"
	}
];

window.onload = function() {
	console.log('onload');
	user = document.getElementById("user");
	pass = document.getElementById("pass");
	entrarSubmit = document.getElementById("entrar");
	derechaDiv = document.getElementById("derecha");
	userNameH3 = document.getElementById("userName");
	entrarSubmit.onclick = entrarOnClick;	
};
-
console.log('carga');
function entrarOnClick(e) {
	e.preventDefault();
	console.log('entro');
	console.log(user.value + ' ' + pass.value);
	if(!isValidUser(user.value, pass.value)) return alert('Usuario incorrecto!');
	derecha.className = "hide";
	userName.innerText = "Bienvenido/a " + user.value;
	userName.className = "";
}

function isValidUser(name, password){
		return users.find(function(user){
			console.log(user);
			console.log(name);
			console.log(password);
			return (user.name.toLowerCase() === name && user.password === password);
		});
}