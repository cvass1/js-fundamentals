const ShoppingBasket = require('./shoppingBasket')

describe('ShoppingBasket', () => {
    it('has a total of zero when no items added', () => {
        const shoppingBasket = new ShoppingBasket()
        expect(shoppingBasket.getTotalPrice()).toBe(0);
    });
    it('adds an item', () => {
        const shoppingBasket = new ShoppingBasket()
        const mockCandy = {getPrice: () => 3.99};
        shoppingBasket.addItem(mockCandy);
        expect(shoppingBasket.getTotalPrice()).toBe(3.99);
    });

    it('applies a discount', () => {
        const shoppingBasket = new ShoppingBasket()
        const mockCandy = {getPrice: () => 3.99};
        shoppingBasket.addItem(mockCandy);
        shoppingBasket.applyDiscount(1.00);
        expect(shoppingBasket.getTotalPrice()).toBe(2.99);
    });
});