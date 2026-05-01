
var products= ["Product1", "Product2", "Product3", "Product4"];
var quantityArray = [0,0,0,0];
var cost= [79.99, 79.99, 79.99, 59.99];

//Add to collection function
function sendProduct(Product, newQuantity) {
	var currentQuantity = parseInt(document.getElementById(newQuantity).value);
    var pos = 0;
    quantityArray = JSON.parse(localStorage.getItem('quantityArray')) || [0,0,0,0];
	for(var i=0; i<products.length; i++) 
		if(products[i] === Product){
			quantityArray[i] += currentQuantity;
            pos = i;
        }
	
    localStorage.setItem('product', Product);
    localStorage.setItem('quantity' ,quantityArray[pos]);
    localStorage.setItem('quantityArray', JSON.stringify(quantityArray));


}


var prods= ["Product1", "Product2", "Product3", "Product4"];
var quantity= [0,0,0,0];
function addToCollection(Product, newQuantity) {
    document.getElementById("ProdList").style.display='block';
    var currentProd = 0;
    var currentQuantity = parseInt(document.getElementById(newQuantity).value);
    var existLi= document.getElementById(Product + "Li");
    for(var i=0; i<prods.length; i++) 
        if(prods[i] === Product){
            quantity[i] += currentQuantity;
            currentProd = i;
        }
    if(currentQuantity>0 && existLi)
           document.getElementById(Product + "Li").innerHTML = "<li id='" + Product + "Li'>" + "You now have " + quantity[currentProd] + " Inútil products of " + Product + "</li>";
    else
        if(currentQuantity>0)
            document.getElementById("ProdList").innerHTML += "<li id='" + Product + "Li'>" + "You have " + quantity[currentProd] + " Inútil products of " + Product + "</li>";
        else
            document.getElementById(Product + "Li").innerHTML = "<li id='" + Product + "Li'>" + "The amount selected is not available, you have " + quantity[currentProd] + " Inútil products of of " + Product + "</li>";
}

function mountCart(){
    
    var products = ["Product1", "Product2", "Product3", "Product4"];
    var quantityArray = JSON.parse(localStorage.getItem('quantityArray')) || [0, 0, 0, 0];
    var cartDiv = document.getElementById('cart');

    for (let i = 0; i < products.length; i++) {
            if (quantityArray[i] > 0) {
                const productName = products[i];
                const prodLi = productName + "Li";
                let existLi = document.getElementById(prodLi);
                
                if (existLi)
                    document.getElementById(prodLi).innerHTML = "You have " + quantityArray[i] + " products of " + productName;
                else
                    cartDiv.innerHTML += "<li id='" + prodLi + "'>" + "You have " + quantityArray[i] + " products of " + productName + "</li>";

            }
        }
}

