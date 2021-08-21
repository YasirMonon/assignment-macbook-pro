/*===================================== using function to update all prices =====================================*/

function updatePrice(featureId, price) {
    const featureCost = document.getElementById(featureId);
    featureCost.innerText = price;
    totalPrice();
}
function totalPrice() {
    const bestPrice = parseInt(document.getElementById('best-price').innerText);
    const memoryPrice = parseInt(document.getElementById('memory-cost').innerText);
    const storagePrice = parseInt(document.getElementById('storage-cost').innerText);
    const deliveryPrice = parseInt(document.getElementById('delivery-cost').innerText);
    let totalPrice = bestPrice + memoryPrice + storagePrice + deliveryPrice;
    document.getElementById('total-price').innerText = totalPrice;
    document.getElementById('final-result').innerText = totalPrice;
}

/*===================================== memory cost =====================================*/

document.getElementById('memory-8GB').addEventListener('click', function () {
    updatePrice('memory-cost', 0);
})
document.getElementById('memory-16GB').addEventListener('click', function () {
    updatePrice('memory-cost', 180);
})

/*===================================== storage (ssd) cost =====================================*/

document.getElementById('storage-256GB').addEventListener('click', function () {
    updatePrice('storage-cost', 0);
})
document.getElementById('storage-512GB').addEventListener('click', function () {
    updatePrice('storage-cost', 100);
})
document.getElementById('storage-1TB').addEventListener('click', function () {
    updatePrice('storage-cost', 180);
})

/*===================================== delivery cost =====================================*/
document.getElementById('delivery-free').addEventListener('click', function () {
    updatePrice('delivery-cost', 0);
})
document.getElementById('delivery-20').addEventListener('click', function () {
    updatePrice('delivery-cost', 20);
})


/*===================================== promo (discount) code =====================================*/
document.getElementById('promo-button').addEventListener('click', function () {
    const promoCode = document.getElementById('promo-input');
    const enteredPromocode = promoCode.value;
    if (enteredPromocode == 'stevekaku') {
        const totalPrice = parseInt(document.getElementById('total-price').innerText);
        console.log(totalPrice)
        const newTotalPrice = totalPrice - totalPrice * .2;
        document.getElementById('final-result').innerText = newTotalPrice;
        document.getElementById("promo-button").disabled = true;
        promoCode.value = '';
    }

    /*===================================== promo code - error handling =====================================*/
    else {
        alert("Sorry !! Wrong Promo Code !!");
    }
})