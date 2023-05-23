class ShoppingBasket {
    constructor() {
      this.items = []
    }
  
    addItem(item) {
      this.items = this.items.concat(item);
    }
  
    getTotalPrice() {
      let sum = 0
      this.items.forEach((item) => {
        sum += item.getPrice();
      })
      return sum;
    }
  
    seeItems() {
      return this.items;
    }
  }
  
  module.exports = ShoppingBasket;
  