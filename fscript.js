/* Validation and storing in console */
function validateForm(){
    var returnval = true;
    var firstName = document.forms['merchForm']['firstname'].value;
    var lastName = document.forms['merchForm']['lastname'].value;
    var emailId = document.forms['merchForm']['email-address'].value;
    var phoneNumber = document.forms['merchForm']['phonenumber'].value;
    var bitsId = document.forms['merchForm']['bitsid'].value;
    var hostelName = document.forms['merchForm']['hostel'].value;

    /*firstname validation*/
    if (firstName === "" ){
        alert('Firstname is required')
        returnval = false;
    } else (console.log(firstName))

    /*lastname validation*/
    if (lastName === "" ){
        alert('Lastname is required')
        returnval = false;
    } else (console.log(lastName))

    /*email validation*/
    const words = emailId.split("@")
    let text = words[1]
    if (text !== "gmail.com"){
        alert('Enter proper email-ID')
        returnval = false;
    } else (console.log(emailId))

    /*phoneno. validation*/
    if (phoneNumber.length<10 || phoneNumber.length>10){
        alert('Enter proper phone number')
        returnval = false;
    } else (console.log(phoneNumber))

    console.log(bitsId)
    console.log(hostelName)

    /*size validation*/
    var xyz = document.forms[merchForm].size;
    var abc = false

    for(var i=0;i<xyz.length;i+=1){
        if(xyz[i].checked){
            abc = true
            console.log(xyz[i])
            break;
        }
    } 
    if(!abc){
        alert('Select Size')
    }

    /*checkbox validation*/
    if (document.getElementById("tc-checkbox").checked){
        returnval = true;
    } else ( returnval = false )

    return returnval
}
/* for storing data */
function storage() {
    var first_name = document.getElementById("firstname").value;
    var last_name = document.getElementById("lastname").value;
    var email_id = document.getElementById("email-address").value;
    var phone_number = document.getElementById("phonenumber").value;
    var bits_id = document.getElementById("bitsid").value;
    var hostel_name = document.getElementById("hostel").value;

    var fn = localStorage.setItem("first_name",first_name);
    var ln = localStorage.setItem("last_name",last_name);
    var emid = localStorage.setItem("email_id",email_id);
    var phno = localStorage.setItem("phone_number",phone_number);
    var bitsid = localStorage.setItem("bits_id",bits_id);
    var hn = localStorage.setItem("hostel_name",hostel_name);
}
