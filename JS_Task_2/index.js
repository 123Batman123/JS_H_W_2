const goods = [
    {id: 1, name: 'Пиво', description: 'Светлое цена за  0.5', sizes: [0.5, 1, 1.5], price: 70, available: 'С 18 лет'},
    {id: 2, name: 'Арахис', description: 'Развесной Цена за  0.1', sizes: [0.1, 0.2, 0.5], price: 50, available: 'Без ограничений'},
    {id: 3, name: 'Чипсы', description: 'Развесной Цена за  0.1', sizes: [0.1, 0.2, 0.5], price: 60, available: 'Без ограничений'},
    {id: 4, name: 'Сигареты', description: 'Цена за  1', sizes: [1], price: 250, available: 'С 18 лет'},
    {id: 5, name: 'Пакет', description: 'Цена за  1', sizes: [1], price: 5, available: 'Без ограничений'}
]

let card = [
    {good:goods[0], amount:100,},
    {good:goods[1], amount:50,},
];


function addCard(good, amount) {
    if (card.some(el => el.good === good)) {
        let indexOne = card.findIndex(el => el.good === good);
        card[indexOne]['amount'] += amount;
    } else {
        card.push({good, amount,});
    }
}
    

/**
 * Удаляет первый найденный элемент из корзины по названию продукта.
 *
 * @param {number} name название продукта который нужно удалить.
 */
function delCardEl(name) {
    let count = 0;
    for (let val of card) {
        
        if (val.good.name === name) {
            let indexVal = card.indexOf(val);
            card.splice(indexVal, 1);
            count += 1;
            break;
        }
    }
    if (count < 1) {
        console.log('Такого товара нет в корзине, удалять нечего!');
    }
}


function cleanCard() {
    card = [];
    // ЛИБО
    // card.splice(0);
    }


function calc() {
    totalAmount = 0;
    totalSumm = 0;
    for (let val of card) {
        totalAmount += val.amount;
        totalSumm += val.good.price * val.amount;
    }
    return {totalAmount, totalSumm,};
}


cleanCard()

addCard(goods[4], 2)
addCard(goods[4], 2)

delCardEl('Пакет')

addCard(goods[1], 5)
addCard(goods[1], 5)
addCard(goods[3], 3)
addCard(goods[0], 10)
addCard(goods[0], 10)

console.log(calc())


