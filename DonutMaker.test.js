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
})