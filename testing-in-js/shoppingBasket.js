class ShoppingBasket {
    constructor() {
      this.items = [];
      this.discount = 0;
    }
  
    addItem(item) {
      this.items = this.items.concat(item);
    }
  
    getTotalPrice() {
      let sum = 0
      this.items.forEach((item) => {
        sum += item.getPrice();
      })
      return sum - this.discount;
    }
  
    seeItems() {
      return this.items;
    }
    applyDiscount(discount) {
      this.discount = discount;
    }

  }
  
  module.exports = ShoppingBasket;
  