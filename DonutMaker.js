class DonutMaker {
    constructor() {
        this.donutCount = 0;
        this.donutCount = 1;


        this.autoClickerCount = 0;
        this.donutMultiplierCount = 0;
        this.autoClickerCost= 100;
    }

    getDonutCount() {
        return this.donutCount;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    getDonutMultipierCount() {
        return this.donutMultiplierCount;
    }
    
    addToDonutCount() {
        this.donutCount += 1;
    }
    addToAutoClickerCount() {
        this.autoClickerCount += 1;

    }
    
    subtractAutoClickerCost() {
        this.donutCount = this.donutCount - this.autoClickerCost;
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }
}

export default DonutMaker;