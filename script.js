// البحث عن المحتوى
function searchContent() {
    const query = document.getElementById('search-bar').value.toLowerCase();
    alert("جاري البحث عن: " + query);
}

// إضافة لعبة جديدة
const addGameForm = document.getElementById('add-game-form');
const storeItems = document.getElementById('store-items');

addGameForm.addEventListener('submit', (event) => {
    event.preventDefault();
    
    const gameName = document.getElementById('game-name').value;
    const gamePrice = document.getElementById('game-price').value;
    const gameDescription = document.getElementById('game-description').value;
    const gameStatus = document.getElementById('game-status').value;
    
    const newGame = document.createElement('div');
    newGame.classList.add('store-item');
    newGame.innerHTML = `
        <img src="game.jpg" alt="${gameName}">
        <h3>${gameName}</h3>
        <p>سعر اللعبة: ${gamePrice} روبوكس</p>
        <button class="buy-btn" onclick="confirmPurchase('${gameName}', ${gamePrice})">شراء اللعبة</button>
    `;
    
    storeItems.appendChild(newGame);
    alert(`تم إضافة اللعبة: ${gameName} بنجاح!`);
});

// تأكيد شراء اللعبة
function confirmPurchase(gameName, price) {
    alert(`تم شراء ${gameName} بنجاح! سيتم خصم ${price} روبوكس.`);
}
