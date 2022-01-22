import DonutMaker from './DonutMaker';

describe('DonutMaker', () => {
    test('can add to donut count', () => {
        const underTest = new DonutMaker();
        const count = underTest.getDonutCount();
        underTest.addToDonutCount();

        expect(underTest.getDonutCount()).toEqual(count + 1);
    })

    test('can retrieve a donut count', () => {
        const underTest = new DonutMaker();
        expect(underTest.getDonutCount()).toEqual(underTest.donutCount);
    })

    test('can add to AutoClicker count', () => {
        const underTest = new DonutMaker();
        const count = underTest.getAutoClickerCount();
        underTest.addToAutoClickerCount();

        expect(underTest.getAutoClickerCount()).toEqual(count + 1);
    })

    test('can retrieve AutoClicker count', () => {
        const underTest = new DonutMaker();
        expect(underTest.getAutoClickerCount()).toEqual(underTest.autoClickerCount);
    })

    test('can subtract AutoClicker cost from donut count', () => {
        const underTest = new DonutMaker();
        const cost = underTest.getAutoClickerCost();
        const donutCount = underTest.getDonutCount();
        underTest.subtractAutoClickerCost();

        expect(underTest.getDonutCount()).toEqual(donutCount - cost);
    })
   
    test('can increase the cost of second AutoClicker by an additional 10%', () => {
        const underTest = new DonutMaker();
        const previousAutoClickerCost = underTest.getAutoClickerCost();
        underTest.increaseAutoClickerCost();

        expect(underTest.getAutoClickerCost()).toEqual(previousAutoClickerCost * 1.1);
    })

    test('can increase the cost of every additional AutoClicker by an additional 10%', () => {
        const underTest = new DonutMaker();
        underTest.increaseAutoClickerCost();
        const previousAutoClickerCost = underTest.getAutoClickerCost();
        underTest.increaseAutoClickerCost();

        expect(underTest.getAutoClickerCost()).toEqual(previousAutoClickerCost * 1.1);
    })

    test('prevent the Auto Clicker count from going up if there are not enough clicks to purchase a Auto Clicker', () => {
        const underTest = new DonutMaker();
        const count = underTest.getAutoClickerCount();
        expect(underTest.getDonutCount()).toBeLessThan(underTest.getAutoClickerCost());

        underTest.purchaseAutoClicker();

        expect(underTest.getAutoClickerCount()).toEqual(count);
    })
    
    test('can add to donut multiplier count', () => {
        const underTest = new DonutMaker();
        underTest.addToDonutMultiplierCount();

    })

    test('can retrieve Donut Multiplier count', () => {
        const underTest = new DonutMaker();
        expect(underTest.getDonutCount()).toEqual(underTest.donutMultiplierCount);
    })

    test('can subtract Donut Multiplier cost from donut count', () => {
        const underTest = new DonutMaker();
        const cost = underTest.getDonutMultiplierCost();
        const donutCount = underTest.getDonutCount();
        underTest.subtractDonutMultiplierCost();

        expect(underTest.getDonutCount()).toEqual(donutCount - cost);
    }) 

    test('can increase the cost of second Multiplier by an additional 10%', () => {
        const underTest = new DonutMaker();
        const previousDonutMultiplierCost = underTest.getDonutMultiplierCost();
        underTest.increaseDonutMultiplierCost();

        expect(underTest.getDonutMultiplierCost()).toEqual(previousDonutMultiplierCost * 1.1);
    })
    test('can increase the cost of every additional Multiplier by an additional 10%', () => {
        const underTest = new DonutMaker();
        underTest.increaseDonutMultiplierCost();
        const previousDonutMultiplierCost = underTest.getDonutMultiplierCost();
        underTest.increaseDonutMultiplierCost();
        
        expect(underTest.getDonutMultiplierCost()).toEqual(previousDonutMultiplierCost * 1.1);
    })

    test('prevent the Donut Multiplier count from going up if there are not enough clicks to purchase a Donut Multiplier', () => {
        const underTest = new DonutMaker();
        const count = underTest.getDonutMultiplierCount();
        expect(underTest.getDonutCount()).toBeLessThan(underTest.getDonutMultiplierCost());

        underTest.purchaseDonutMultiplier();

        expect(underTest.getDonutMultiplierCount()).toEqual(count);
    })

    test('can increase the amount of donut added to the donut count by multiplying by 1.2 after the first Donut Multiplier is purchased', () => {
        const underTest = new DonutMaker();
        const previousDonutCount = underTest.getDonutCount();
        underTest.donutCount = underTest.donutMultiplierCost;
        underTest.purchaseDonutMultiplier();
        underTest.addToDonutCount();

        expect(underTest.getDonutCount()).toEqual(previousDonutCount + 1.2);
    })

    test('can increase the click value multipler to 1.2 to the xth power, where X is the amount of the Donut Multipliers count', () => {
        const underTest = new DonutMaker();
        underTest.donutCount = underTest.donutMultiplierCost * 3;
        
        underTest.purchaseDonutMultiplier();
        underTest.purchaseDonutMultiplier();

        expect(underTest.donutMultiplierValue).toEqual(Math.pow(1.2, 2));
    })

    test("When an 'Add Auto Clickers' event is executed, increase the value of each Auto Clicker by the amount of the Donut Multiplier.", () => {
        const underTest = new DonutMaker();
        const previousDonutCount = underTest.getDonutCount();
        underTest.autoClickerCount = 3;
        underTest.donutMultiplierCount = 1
        underTest.donutMultiplierValue = 1.2;

        underTest.addToDonutCount(true);
        expect(underTest.getDonutCount()).toEqual(previousDonutCount + underTest.getAutoClickerCount() * underTest.donutMultiplierValue)
    })
})
