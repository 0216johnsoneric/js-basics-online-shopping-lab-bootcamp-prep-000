var cart = [];

function getCart() {
 return cart;
}

function setCart(c) {
  cart = c;
  return cart;
}

function addToCart(itemName) {
  var obj = { [itemName]: Math.floor(Math.random()*100) }
  cart.push(obj)
  console.log(`${itemName} has been added to your cart.`)
  return cart
}

function viewCart() {
  if(cart.length == 0) {
    console.log('Your shopping cart is empty.')
  return;
  } else {
    var newArray = []
    for(var i =0; i < cart.length; i++) {
      var obj = cart[i] //sets object to specific element in cart array.
      let itemName = Object.keys(obj)[0] // itemName = the first elemnt ket in the object array.
      let itemPrice = obj[itemName]// itemPrice = gives price value that corresponds with itemName.
      newArray.push(`${itemName} at \$${itemPrice}`)
    }
    if (cart.length == 1){
      console.log(`In your cart, you have ${newArray}.`)
    } else if (cart.length == 2) {
      console.log(`In your cart, you have ${newArray.join(" and ")}.`)
    } else{
      newArray[newArray.length - 1] = `and ${newArray[newArray.length - 1]}`
      console.log(`In your cart, you have ${newArray.join(", ")}.`)
  }
}
}

function total() {
  var newArray = []
  for(var i =0; i < cart.length; i++) {


function removeFromCart(item) {
  // write your code here
}

function placeOrder(cardNumber) {

}
