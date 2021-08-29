function createRestaurant(name){
  restaurant = {
    name: name,
    menus: {
      breakfast: [],
      lunch: [],
      dinner: []
    }
  }
  return restaurant;
}
function addMenuItem(restaurant,food){
  if(food.type === 'lunch' && !restaurant.menus.lunch.includes(food)){
  return restaurant.menus.lunch.push(food)
}else if (food.type === 'breakfast'&& !restaurant.menus.breakfast.includes(food)){
  return restaurant.menus.breakfast.push(food)
}else if (food.type === 'dinner'&& !restaurant.menus.dinner.includes(food)){
  return restaurant.menus.dinner.push(food)
}
}

function removeMenuItem(restaurant,food,type){
  for (var i = 0; i < restaurant.menus[type].length; i++) {
    if(restaurant.menus[type][i].name === food){
      restaurant.menus[type].splice(i,1)
      var result = `No one is eating our ${food} - it has been removed from the ${type} menu!`
      return result
    }else {
      var error = `Sorry we don't sell ${food}, try adding a new recipe!`;
      return error;
    }
    }
}



module.exports = {
  createRestaurant,
  addMenuItem,
  removeMenuItem
}
