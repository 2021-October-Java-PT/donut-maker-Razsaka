let donutMaker = new DonutMaker();
const clickButton = document.getElementById('click-button');
const donutClickButton = document.getElementById('donut-click-button');
const donutCount = document.getElementById('current-total');

const purchaseAutoClickerButton = document.getElementById('purchase-auto-clicker');
const autoClickerCost = document.getElementById('auto-clicker-cost');
const autoClickerTotal = document.getElementById('auto-clicker-total');
autoClickerCost.innerText = donutMaker.getAutoClickerCost();
autoClickerTotal.innerText = donutMaker.getAutoClickerCount();

const purchaseDonutMultiplierButton = document.getElementById('purchase-click-multiplier');
const donutMultiplierValue = document.getElementById('donut-multiplier-value');
const donutMultiplierCost = document.getElementById('click-multiplier-cost');
const donutMultiplierTotal = document.getElementById('click-multiplier-total');
donutMultiplierCost.innerText = donutMaker.getDonutMultiplierCost();
donutMultiplierTotal.innerText = donutMaker.getDonutMultiplierCount();
donutMultiplierValue.innerText = donutMaker.getDonutMultiplierValue();

const resetButton = document.getElementById('reset-game');
const companyPopupBackground = document.getElementById('about-the-company');
const companyLink = document.getElementById('company-link');
const authorPopupBackground = document.getElementById('about-the-author');
const authorLink = document.getElementById('author-link');


let autoClickerInterval;

function showPopup(id) {
  const popup = document.getElementById(id);
  popup.style.display = 'block';
}

function hidePopup(element) {
  element.style.display = 'none';
}

function addToDonutCount(autoClicker = false) {
  donutMaker.addToDonutCount(autoClicker);
}

function updateDonutValues() {
  const count = donutMaker.getDonutCount();
  donutCount.innerText = Math.ceil(count);
  if (count >= donutMaker.getDonutMultiplierCost()) {
    purchaseDonutMultiplierButton.disabled = false;
  } else {
    purchaseDonutMultiplierButton.disabled = true;
  }

  if (count >= donutMaker.getAutoClickerCost()) {
    purchaseAutoClickerButton.disabled = false;
  } else {
    purchaseAutoClickerButton.disabled = true;
  }

  donutMultiplierCost.innerText = Math.ceil(donutMaker.getDonutMultiplierCost())
  donutMultiplierTotal.innerText = donutMaker.getDonutMultiplierCount();
  donutMultiplierValue.innerText = Math.ceil(donutMaker.getDonutMultiplierValue());

  autoClickerCost.innerText = Math.ceil(donutMaker.getAutoClickerCost())
  autoClickerTotal.innerText = donutMaker.getAutoClickerCount();
}

authorLink.addEventListener('click', () => {
  showPopup('about-the-author');
})

authorPopupBackground.addEventListener('click', (event) => {
  if (authorPopupBackground !== event.target) {
    return;
  }
  hidePopup(event.target);
})

companyLink.addEventListener('click', () => {
  showPopup('about-the-company');
})

companyPopupBackground.addEventListener('click', () => {
  if (companyPopupBackground !== event.target) {
    return;
  }
  hidePopup(event.target);
})

clickButton.addEventListener('click', () => {
  addToDonutCount();
  updateDonutValues();
})

donutClickButton.addEventListener('click', () => {
  addToDonutCount();
  updateDonutValues();
})

purchaseAutoClickerButton.addEventListener("click", () => {
  donutMaker.purchaseAutoClicker();
  updateDonutValues();
  if (donutMaker.getAutoClickerCount() == 1) {
    autoClickerInterval = setInterval(() =>{
      addToDonutCount(true);
      updateDonutValues();
    }, 1000);
  }
});

purchaseDonutMultiplierButton.addEventListener("click", () => {
  donutMaker.purchaseDonutMultiplier();
  updateDonutValues();
});

resetButton.addEventListener('click', () => {
  donutMaker = new DonutMaker();
  updateDonutValues();
  clearInterval(autoClickerInterval);
})