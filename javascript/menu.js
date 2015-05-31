// on qty change, update total cost

var orderForm= function(){
	var that = this;

this.init=function(){};
[0,1,2].forEach(function(index) {
	var qty = document.getElementById("qty-"+index);
	var totalCost = 0.0;

	qty.addEventListener("change", function() {
		that.updateCost();
	});
});

this.updateCost=function(){
	// calculate cost of each item to get total cost
	// get document element total cost tag
	// show user new total cost
	totalCost = 0;
	[0,1,2].forEach(function(index) {
		var qty = document.getElementById("qty-"+index).value;
		var price = document.getElementById("price-"+index).innerHTML;
		// get index of changed item
		totalCost = qty * price + totalCost
		//	var newCost= this.value * 


	});
	totalCost = totalCost.toFixed(2);//two decimal only and assign to totalCost
	console.log(totalCost);
		// calculate new item value
		// update total cost variable
		// display updated cost	

	var costContainer = document.getElementById("total-cost")
	costContainer.innerHTML = totalCost;


};

$("#gallery > li:gt(0)").hide();

setInterval(function() { 
  $('#gallery > li:first')
    .fadeOut(1000)
    .next()
    .fadeIn(1000)
    .end()
    .appendTo('#gallery');
},  3000);









this.init();

};

orderForm();
