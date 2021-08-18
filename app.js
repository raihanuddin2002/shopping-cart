// Update case  
function updateCaseNumber(product, price, isIncreasing) {
    //Common values
    const productInput = document.getElementById(product + "-number");
    let productNumber = productInput.value;
    if (isIncreasing === true) {
        productNumber = parseInt(productNumber) + 1;
    } else {
        if (productNumber > 0) {
            productNumber = parseInt(productNumber) - 1;
        }
    }
    // update input
    productInput.value = productNumber;
    // Update total
    const productTotal = document.getElementById(product + "-total");
    productTotal.innerText = productNumber * price;

    return totalPrice();
}

// Total calculation
function totalPrice() {
    const allInput = document.querySelectorAll(".product-cost");
    let totalInputValue = 0;
    for (const input of allInput) {
        totalInputValue += parseFloat(input.innerText);
    }
    // update sub total
    const subtotal = document.getElementById("sub-total").innerText = totalInputValue;
    let tax = document.getElementById("tax").innerText;
    if (totalInputValue == 0) {
        tax = 0;
        document.getElementById("tax").innerText = tax;
    }
    const totalPrice = document.getElementById("total-price").innerText = totalInputValue - parseFloat(tax);
}
const total = totalPrice();

//top phone handle events
document.getElementById("phone-plus").addEventListener("click", function() {
    updateCaseNumber("phone", 1219, true);
});
document.getElementById("phone-minus").addEventListener("click", function() {
    updateCaseNumber("phone", 1219, false);
});


// bottom phone handle events
document.getElementById("case-plus").addEventListener("click", function() {
    updateCaseNumber("case", 59, true);
});
document.getElementById("case-minus").addEventListener("click", function() {
    updateCaseNumber("case", 59, false);
});