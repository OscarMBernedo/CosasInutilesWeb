

function sendData() {
    // Obtener los valores del formulario
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var phone = document.getElementById('phone').value;
    var address = document.getElementById('address').value;
    var city = document.getElementById('city').value;
    var pCode = document.getElementById('postalCode').value;
    var country = document.getElementById('country').value;

    if (!name || !email || !phone || !address || !country) {
        alert("All fields are required!");
        return false;
    }

    var subject = "Customer Information";
    var body = "Name" + name + "Email" + email + "Phone: " + phone + ".";
    window.location.href = 'mailto:${email}?subject=${subject}&body=${body}';

    
    localStorage.setItem('customerName', name);
    localStorage.setItem('customerEmail', email);
    localStorage.setItem('customerPhone', phone);
    localStorage.setItem('customerAddress', address);
    localStorage.setItem('customerCity', city);
    localStorage.setItem('customerPostalCode', pCode);
    localStorage.setItem('customerCountry', country);


    // Redirigir a otra página, de momento mejor no se redirige por el check del form
    //window.location.href = 'customer.html';
}

/*ReqJ1*/
function receiveData(){
    var name = localStorage.getItem('customerName') || 'Guest';
    var email = localStorage.getItem('customerEmail') || '@email';
    var phone = localStorage.getItem('customerPhone') || '+34 123 456 789';
    var address = localStorage.getItem('customerAddress') || 'Address';
    var city = localStorage.getItem('customerCity') || 'City';
    var postalCode = localStorage.getItem('customerPostalCode') || 'Postal Code';
    var country = localStorage.getItem('customerCountry') || 'Country';

    var customerNameDiv = document.getElementById('customerName');
    var customerInfoDiv = document.getElementById('customerInfo');

    customerNameDiv.innerHTML = name;
    customerInfoDiv.innerHTML += "<p>Email:" + email + "<br>Phone:" + phone + "<br>Adress: " + address +"<br>City" + city +"<br>Postal Code: " + postalCode + "<br> Country: " + country + "</p>";
    

    var products = ["Product1", "Product2", "Product3", "Product4"];
    var quantityArray = JSON.parse(localStorage.getItem('quantityArray')) || [0, 0, 0, 0];
    var cartDiv = document.getElementById('cart');

    for (let i = 0; i < products.length; i++) {
            if (quantityArray[i] > 0) {
                const productName = products[i];
                const prodLi = productName + "Li";
                let existLi = document.getElementById(prodLi);
                
                if(existLi)
                    document.getElementById(prodLi).innerHTML = "You have " + quantityArray[i] + " products of " + productName;
                else
                    cartDiv.innerHTML += "<li id='" + prodLi + "'>" + "You have " + quantityArray[i] + " products of " + productName + "</li>";
                
            }
        }
}

/*ReqJ2*/ /*ReqJ3*/ /*ReqJ5*/
function validateNum(idValue){
    if (idValue.length !== 9){
        document.getElementById("phone").style.borderColor = "red";
        alert("Please enter a valid phone number with exactly 9 digits.");
        document.getElementById("phone").focus;
    }
    
    for (i=0;i<idValue.length;i++)
        if (idValue[i]<'0' || idValue[i]>'9'){
            document.getElementById("phone").style.borderColor = "red";
            alert("Please enter a valid phone number with exactly 9 digits.");
            document.getElementById("phone").focus;
        }
}

/*ReqJ6*/
function clearForm() {
    document.getElementById('customerForm').reset();
}

function checkRadioOption(radioSelectionId){
    document.getElementById(radioSelectionId).checked = true;  
}

function clearInfo(){
    localStorage.clear();
}