import * as Types from "./types";


export default {
  [Types.ADD_COUNT] (state,payload) {
    payload.count += 1
  },
  [Types.PUSHLIST] (state,payload) {
    payload.count = 1
    payload.check = true
    state.cartList.push(payload)
  }
}