class DonutMaker {
    constructor() {
        this.donutCount = 0;
        

        this.autoClickerCount = 0;
        this.autoClickerCost = 100;

        this.donutMultiplierCount = 0;
        this.donutMultiplierCost = 10
        this.donutMultiplierValue= 1;
    }

    getDonutCount() {
        return this.donutCount;
    }

    addToDonutCount(autoClicker = false) {
        let clickValue = 1;
        if (autoClicker) { 
            clickValue = this.autoClickerCount;
        }
        this.donutCount += clickValue * this.donutMultiplierValue;
    }

    getAutoClickerCount() {
        return this.autoClickerCount;
    }

    addToAutoClickerCount() {
        this.autoClickerCount += 1;
    }

    purchaseAutoClicker() {
        if (this.donutCount >= this.autoClickerCost) {
            this.subtractAutoClickerCost()
            this.addToAutoClickerCount()
            this.increaseAutoClickerCost()
        }
    }

    getAutoClickerCost() {
        return this.autoClickerCost;
    }

    increaseAutoClickerCost() {
        this.autoClickerCost = this.autoClickerCost * 1.1;
    }

    subtractAutoClickerCost() {
        this.donutCount = this.donutCount - this.autoClickerCost;
    }


    purchaseDonutMultiplier() {
        if (this.donutCount >= this.donutMultiplierCost) {
            this.subtractDonutMultiplierCost()
            this.addToDonutMultiplierCount()
            this.increaseDonutMultiplierCost()
            this.donutMultiplierValue = this.donutMultiplierValue * 1.2;
        }
    }


    getDonutMultiplierCount() {
        return this.donutMultiplierCount;
    }

    addToDonutMultiplierCount() {
        this.donutMultiplierCount += 1;
    }

    subtractDonutMultiplierCost() {
        this.donutCount = this.donutCount - this.donutMultiplierCost;
    }

    increaseDonutMultiplierCost() {
        this.donutMultiplierCost = this.donutMultiplierCost * 1.1;
    }

    getDonutMultiplierCost() {
        return this.donutMultiplierCost;
    }

    getDonutMultiplierValue() {
        return this.donutMultiplierValue;
    }
}