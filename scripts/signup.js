var patient = {

	'darren@gmail.com':{
		'password':'darren',
		'username':'Darren',
		'profile':'patient'
	},
	'edwin@gmail.com':{
		'password':'edwin',
		'username':'Edwin',
		'profile':'patient'
	},
	'pratik@gmail.com':{
		'password':'pratik',
		'username':'Pratik',
		'profile':'patient'
	},
	'kalli@gmail.com':{
		'password':'kalli',
		'username':'Kalli',
		'profile':'patient'
	},
	'greg@gmail.com':{
		'password':'greg',
		'username':'Greg',
		'profile':'patient'
	},
	'farhan@gmail.com':{
		'password':'farhan',
		'username':'Farhan',
		'profile':'patient'
	}

};
var doctor = {

	3001:{
		'password':'darren',
		'username':'Darren',
		'profile':'doctor',
		'email':'darren@gmail.com'
	},
	3002:{
		'password':'edwin',
		'username':'Edwin',
		'profile':'doctor',
		'email':'edwin@gmail.com'
	},
	3003:{
		'password':'pratik',
		'username':'Pratik',
		'profile':'doctor',
		'email':'pratik@gmail.com'
	},
	3004:{
		'password':'kalli',
		'username':'Kalli',
		'profile':'doctor',
		'email':'kalli@gmail.com'
	},
	3005:{
		'password':'greg',
		'username':'Greg',
		'profile':'doctor',
		'email':'greg@gmail.com'
	},
	3006:{
		'password':'farhan',
		'username':'Farhan',
		'profile':'doctor',
		'email':'farhan@gmail.com'
	}

};
var chemist = {

	1001:{
		'password':'darren',
		'username':'Darren',
		'profile':'chemist',
		'email':'darren@gmail.com'
	},
	1002:{
		'password':'edwin',
		'username':'Edwin',
		'profile':'chemist',
		'email':'edwin@gmail.com'
	},
	1003:{
		'password':'pratik',
		'username':'Pratik',
		'profile':'chemist',
		'email':'pratik@gmail.com'
	},
	1004:{
		'password':'kalli',
		'username':'Kalli',
		'profile':'chemist',
		'email':'kalli@gmail.com'
	},
	1005:{
		'password':'greg',
		'username':'Greg',
		'profile':'chemist',
		'email':'greg@gmail.com'
	},
	1006:{
		'password':'farhan',
		'username':'Farhan',
		'profile':'chemist',
		'email':'farhan@gmail.com'
	}

};


function registerPatient(patient){
	console.log('registering')
	var profile = document.getElementById('profile').value;
	var username = document.getElementById('username').value;
	var email = document.getElementById('email').value;
	var password = document.getElementById('password').value;
	var repassword = document.getElementById('repassword').value;
	// var patient_file = JSON.parse(fs.readFileSync('patient.json'));

	if (password == repassword){
		if (!(email in patient)){

		 	var info ={
		 		'password':password,
		 		'username':username,
		 		'profile':profile
		 	};
		 	patient[email] = info;
		 	console.log(patient)


		} else {
			alert("The email ID is already used");
		}

	} else{
		alert("The Passwords does not match");
	}
}
try{
const signup_form_pat = document.getElementById('patient-signup');
signup_form_pat.addEventListener('submit', registerPatient);}
catch{

}

function registerDoctor(doctor){
	console.log('registering doc')
	var profile = document.getElementById('profile').value;
	var username = document.getElementById('username').value;
	var license = document.getElementById('license-doc-signup').value;
	var password = document.getElementById('password').value;
	var repassword = document.getElementById('repassword').value;
	var email = document.getElementById('email').value;
	// var patient_file = JSON.parse(fs.readFileSync('patient.json'));

	if (password == repassword){
		if (!(license in doctor)){

		 	var info ={
		 		'password':password,
		 		'username':username,
		 		'profile':profile,
		 		'email':email
		 	};
		 	patient[license] = info;
		 	console.log(patient)


		} else {
			alert("The license ID is already used");
		}

	} else{
		alert("The Passwords does not match");
	}
}
try{
const signup_form_doc = document.getElementById('doc-signup');
signup_form_doc.addEventListener('submit', registerDoctor);
} catch{

}

function registerChem(chemist){
	console.log('registering chem')
	var profile = document.getElementById('profile').value;
	var username = document.getElementById('username').value;
	var license = document.getElementById('license-chem-signup').value;
	var password = document.getElementById('password').value;
	var repassword = document.getElementById('repassword').value;
	var email = document.getElementById('email').value;
	// var patient_file = JSON.parse(fs.readFileSync('patient.json'));

	if (password == repassword){
		if (!(license in chemist)){

		 	var info ={
		 		'password':password,
		 		'username':username,
		 		'profile':profile,
		 		'email':email
		 	};
		 	patient[license] = info;
		 	console.log(patient)


		} else {
			alert("The license ID is already used");
		}

	} else{
		alert("The Passwords does not match");
	}
}
try{
const signup_form_chem = document.getElementById('chem-signup');
signup_form_chem.addEventListener('submit', registerChem);}catch{}



function Login()  {
	console.log("Login");
	const userId = document.getElementById("login-id").value;
	const password = document.getElementById("password").value;
	const profile = document.getElementById("profile").value;
  	var profileValue = profile;
  
  if (profileValue == "doctor") {
  		if((userId in doctor)){
  			var og_password = (doctor[userId])['password'];
  			if (og_password == password) {
  				var login_form = document.getElementById('login-form');
  				login_form.setAttribute('action','create_prescription.html');
  			}
  		} else{
  			alert("Invalid Credentials");
  		}


  } else if (profileValue == "patient") {

		if((userId in patient)){
			alert('login_succesfull')
  			var og_password = (patient[userId])['password'];
  			if (og_password == password) {
  				// window.location.replace("pat_retrieve_prescription.html");
  				var login_form = document.getElementById('login-form');
  				login_form.setAttribute('action','display_prescription_pat.html');
  			}
  		} else{
  			alert("Invalid Credentials")
  			alert(userId,password,og_password);
  		}

  } else {
  	if((userId in chemist)){
  			var og_password = (chemist[userId])['password'];
  			if (og_password == password) {
  				window.location.href = "chem_retrieve_prescription.html";
  				var login_form = document.getElementById('login-form');
  				login_form.setAttribute('action','chem_retrieve_prescription.html');
  			}
  		} else{
  			alert("Invalid Credentials");
  		}
}
};

var login_form = document.getElementById('login-form');
login_form.addEventListener('submit',Login); 