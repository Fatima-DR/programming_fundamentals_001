function addVAT(price) {
    return price + (0.2 * price);
}
function countBooks(bookTitles){
    return bookTitles.length;
}

function getTotalOrderPrice(price, quantity) {
    const total = price * quantity;
    const tax = total * 1.2;
    return total + tax;
}

module.exports = {
    addVAT,
    countBooks,
    getTotalOrderPrice
};