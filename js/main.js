let iPhonePrice = document.getElementById('iphoneUnitPrice');
let iPhoneQuantity = document.getElementById('iPhoneQty');
let iPhoneTotalPrice = document.getElementById('iPhoneTotal');
let watchPrice = document.getElementById('WatchUnitPrice');
let watchQuantity = document.getElementById('WatchQty');
let watchTotalPrice = document.getElementById('WatchTotal');
let totalPrice = document.getElementById('total');
let bkashOpt = document.getElementById('bkash')
let nagadOpt = document.getElementById('nagad')
let updateCartBtn = document.getElementById('updateCart');
let checkoutBtn = document.getElementById('checkout');


updateCartBtn.addEventListener('click', function(){
    var item1Total = parseInt(iPhonePrice.innerHTML) * parseInt(iPhoneQuantity.value);
    iPhoneTotalPrice.innerHTML = item1Total;

    var item2Total = parseInt(watchPrice.innerHTML) * parseInt(watchQuantity.value);
    watchTotalPrice.innerHTML = item2Total;
    var total = item1Total + item2Total;
    totalPrice.innerHTML = total;

    if(bkashOpt.checked)
    {
        checkoutBtn.setAttribute('href', "https://www.bkash.com/?totalPrice=" + total);
        console.log("bkash")
    }
    else
    {
        checkoutBtn.setAttribute('href', "https://www.nagad.com.bd/?totalPrice=" + total);
        console.log("nagad");
    }
});