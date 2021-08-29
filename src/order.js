function takeOrder(order,orderType) {
  if(orderType.length < 3)
  return orderType.push(order)

}
function refundOrder(orderNumber,orderType) {
  for (var i = 0; i < orderType.length; i++) {
    if (orderType[i].orderNumber === orderNumber)
    orderType.splice(i,1)
  }
  return orderType
}

function listItems(orderType) {
  var items = []
  for (var i = 0; i < orderType.length; i++) {
    items.push(orderType[i].item)
  }
  return items.join(", ")
}
function searchOrder(orderType,item) {
  var trueCount = 0
  for (var i = 0; i < orderType.length; i++) {
    if (orderType[i].item.includes(item)){
     trueCount ++
   }
}
if (trueCount > 0){
  return true
}else{
  return false
}

}



module.exports = {
   takeOrder,
   refundOrder,
   listItems,
   searchOrder
}
