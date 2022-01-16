function Order (size, crust, toppings, quantity, deliveryCost) {
    this.size = size;
    this.crust = crust;
    this.toppings = toppings;
    this.quantity = quantity;
    this.deliveryCost = deliveryCost;
  };

  const toppingsSmall = {
    pepperoni: 90,
    bacon: 60,
    pineapple: 50,
    pepper: 70
  };
  
  const toppingsMedium = {
    pepperoni: 130,
    bacon: 100,
    pineapple: 90,
    pepper: 110
  };
  
  const toppingsLarge = {
    pepperoni: 190,
    bacon: 160,
    pineapple: 100,
    pepper: 170
  };
  
  const pizzaPrices = {
    small: 500,
    medium: 700,
    large: 1000
  };
  
  $("#submit").on('click', () => {
    let size = $('#size').val();
    let crust = $('#crust').val();
    let toppings = $('#toppings').val();
    let quantity = Number($('#quantity').val());
    let delivery = $('#delivery').val();
    let deliveryCost;
    let toppingsCost = 0;
    let totalCost = 0;
  
    if (delivery !== ""){
      deliveryCost = 100;
    }
    else {
      deliveryCost = 0;
    }

    let myOrder = new Order(size, crust, toppings, quantity, deliveryCost);
  
    alert("You will be charged Ksh " + deliveryCost + " for Delivery");
  
    if(myOrder.size == "small") {
        if(toppings.includes("pepperoni")){
          toppingsCost += toppingsSmall.pepperoni;
        }
        if(toppings.includes("bacon")){
            toppingsCost += toppingsSmall.bacon;
        }
        if(toppings.includes("pineapple")){
            toppingsCost += toppingsSmall.pineapple;
        }
        if(toppings.includes("pepper")){
            toppingsCost += toppingsSmall.pepper;
        }

        totalCost = (pizzaPrices.small * quantity) + (toppingsCost * quantity) + deliveryCost;
    } else if (myOrder.size == "medium") {
        if(toppings.includes("pepperoni")){
            toppingsCost += toppingsSmall.pepperoni;
        }
        if(toppings.includes("bacon")){
            toppingsCost += toppingsSmall.bacon;
        }
        if(toppings.includes("pineapple")){
            toppingsCost += toppingsSmall.pineapple;
        }
