// JavaScript source code

function phonenumber(inputtxt) {
	var phoneno = /^\(?([0-9]{2})\)?[-. ]?([0-9]{3})[-. ]?([0-9]{6})$/;
	if (inputtxt.value.match(phoneno)) {
		return true;
	}
	else {
		alert("Not a valid Phone Number");
		return false;
	}
}

function ValidateDOB() {
    var displayerror = document.getElementById("displayerror");

    //Get the date from the TextBox.
    var date = document.getElementById("textDate").value;
    var DOB = /(((0|1)[0-9]|2[0-9]|3[0-1])\/(0[1-9]|1[0-2])\/((19|20)\d\d))$/;

    //Check whether valid dd/MM/yyyy Date Format.
    if (DOB.test(date)) {
        var parts = date.split("/");
        var dtDOB = new Date(parts[1] + "/" + parts[0] + "/" + parts[2]);
        var dtCurrent = new Date();
        if (dtCurrent.getFullYear() - dtDOB.getFullYear() < 13) {
            alert("Warning! Eligibility more than 13 Years");
            return false;
        }

        if (dtCurrent.getFullYear() - dtDOB.getFullYear() > 50) {
            alert("Help");
            return false;
        }
        return true;
    } else {
        displayerror.innerHTML = "Enter date in dd/MM/yyyy format ONLY."
        return false;
    }
}
