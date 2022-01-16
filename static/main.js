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
  