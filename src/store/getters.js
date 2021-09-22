export default {
  cartLenthCount (state) {
    return state.cartList.filter(item => item.check).reduce((preValue, n) => preValue + n.count,0)
  },
  cartLenth (state) {
    return state.cartList.reduce((preValue, n) => preValue + n.count,0)
  },
  cartList (state) {
    return state.cartList
  },
  cartPrice (state) {
    return '￥' + state.cartList.filter(item => item.check).reduce((preValue, n) => preValue + n.price * n.count,0).toFixed(2)
  }
}