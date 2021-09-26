//prescription table
function addTableElements(){
	// console.log("Started_func");
	var name = document.getElementById("med-name-presc").value;
	var dose = document.getElementById("med-dose-presc").value;
	var med_days = document.getElementById("med-days-presc").value;

	$("#table-disp tbody").append("<tr><td><input  type='text' id='med-name-presc-disp' class='med-name-presc-disp-cl' name='med-name-presc' required disabled value="+ name+" ></td>"+
				      "<td><input  type='number' id='med-dose-presc-disp' class='med-dose-presc-disp-cl' name='med-dose-presc' required disabled value="+ dose+"></td>"+
				      "<td><input  type='number' id='med-days-presc-disp' class='med-days-presc-disp-cl' name='med-days-presc' required disabled value="+ med_days+"></td>"+
				      "<td><button class='med-remove-btn' type='button' onclick='productDelete(this)'>Remove</button></td>"+
				   +"</tr>");
	document.getElementById("med-name-presc").value = "";
	document.getElementById("med-dose-presc").value = "";
	document.getElementById("med-days-presc").value = "";
};
function productDelete(ctl) {
    $(ctl).parents("tr").remove();
}
try {
  var add_med = document.getElementsByClassName("add-med")[0];
  add_med.addEventListener("click",addTableElements);

}
catch(err) {
}  


//date
function getDate(){
	var today = new Date();
	var dd = today.getDate();
    var mm = today.getMonth() + 1;
    var yyyy = today.getFullYear();
    if (dd < 10) {
            dd = '0' + dd;
        }
        if (mm < 10) {
            mm = '0' + mm;
        }
    var output =  dd + '/' + mm + '/' + yyyy;
    document.getElementById("date-prescription").value = (dd + "/" + mm + "/" + yyyy);
};
try {
getDate();
}
catch(err) {
}  


//create prescription feedback
function created(){
	alert("Prescription Created");
}
try{
var create = document.getElementById("create-presc-btn")
create.addEventListener('click',created);
} catch(err){

}

//display prescription
function displayTableElements(){
	// console.log("Started_func");
	// var name = document.getElementById("med-name-presc").value;
	// var dose = document.getElementById("med-dose-presc").value;
	// var med_days = document.getElementById("med-days-presc").value;

	// $("#table-disp tbody").append("<tr><td><input  type='text' id='med-name-presc-disp' class='med-name-presc-disp-cl' name='med-name-presc' required disabled value="+ name+" ></td>"+
	// 			      "<td><input  type='number' id='med-dose-presc-disp' class='med-dose-presc-disp-cl' name='med-dose-presc' required disabled value="+ dose+"></td>"+
	// 			      "<td><input  type='number' id='med-days-presc-disp' class='med-days-presc-disp-cl' name='med-days-presc' required disabled value="+ med_days+"></td>"+
	// 			      "<td><button class='med-remove-btn' type='button' onclick='productDelete(this)'>Remove</button></td>"+
	// 			   +"</tr>");
	// document.getElementById("med-name-presc").value = "";
	// document.getElementById("med-dose-presc").value = "";
	// document.getElementById("med-days-presc").value = "";
};