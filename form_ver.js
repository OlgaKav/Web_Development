function checkPassword() {

    if(document.getElementById("password").value != document.getElementById("ver_password").value) {
        alert("The passwords are different");
    }
}


function checkPhone() {

    var phone = document.getElementById("phone1").value;
   
        

        if (/^69[0-9]{8}$/.test(phone)!=true && /^21[0-9]{8}$/.test(phone)!=true){
                alert("The phone number is not correct");
        }
}


function checkAge() {
    // Milliseconds per year
    const _MS_PER_YEAR = 1000 * 60 * 60 * 24 * 365;

    // Get user's birthday
    const birthday = document.getElementById("birth_date").value;
    const y1 = new Date(birthday).getFullYear();
    const m1 = new Date(birthday).getMonth();
    const d1 = new Date(birthday).getDate();

    // Get current date
    var now = new Date();
    const y2 = new Date(now).getFullYear();
    const m2 = new Date(now).getMonth();
    const d2 = new Date(now).getDate();

    // Discard the time and time-zone information.
    const utc1 = Date.UTC(y1, m1, d1);
    const utc2 = Date.UTC(y2, m2, d2);

    // Calculate the user's age in years
    var dif = Math.floor((utc2 - utc1) / _MS_PER_YEAR);
    
    // If the user is younger than 18 display error message
    if(dif < 18) {
        alert("You can\'t register if you are not over 18");
    }
}