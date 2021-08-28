function nameMenuItem(menuItemName) {
  return `Delicious ${menuItemName}`
}

function createMenuItem(menuItemName,price,type) {
  return {
    name: menuItemName,
    price: price,
    type: type
  }
}


function addIngredients(item,ingredients) {
  if(!ingredients.includes(item))
  return ingredients.push(item)
}

var menuItem = createMenuItem()
var initialPrice = menuItem.price

function formatPrice(initialPrice) {
  return `$${initialPrice}`
}

function decreasePrice(initialPrice) {
  var decreasePrice = initialPrice - (initialPrice *.10)
  return decreasePrice
}

function createRecipe(title,ingredients,menuItemType) {
  return {
    title: title,
    ingredients: ingredients,
    type: menuItemType
  }
}
module.exports = {
  nameMenuItem,
  createMenuItem,
  addIngredients,
  formatPrice,
  decreasePrice,
  createRecipe
}
