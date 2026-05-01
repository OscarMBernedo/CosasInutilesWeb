	//Promo variables
	var prods= ["Product1", "Product2", "Product3", "Product4"];
	var promotion=[10, 20, 30];
	var cost= [79.99,79.99, 79.99, 59.99];
	var validCodes= ["10%Off", "20%Off", "30%Off"];
	/*ReqJ4*//*ReqJ5*//*ReqJ8*/
	//Promo function
	function promoCode(Product, promo, Px) {
		var prodCost =0;
		var currentDiscount = 0;
		var currentCost = 0;
		var currentCode= document.getElementById(Px).value; 
		var Code = "None";

		for(var i=0; i<prods.length; i++) 
			if(prods[i] === Product)
				currentCost = cost[i];
				
			for(var i=0; i<validCodes.length; i++) 
				if(validCodes[i]===currentCode){
					currentDiscount = promotion[i];
					Code=validCodes[i];
				}

			if(Code === currentCode){
				prodCost = currentCost;
				currentCost = currentCost - (currentCost * currentDiscount/100);
				currentCost = currentCost.toFixed(2);
				document.getElementById(promo).innerHTML = "<ul style='text-decoration: line-through;'>" + prodCost + "€ </ul>";
				document.getElementById(promo).innerHTML +="<ul> Discount: " + currentDiscount + "% Off! <br>" + currentCost + "€ </ul>";
				document.getElementById(promo).focus;
			}
	}
	

	
	