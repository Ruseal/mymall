import * as Types from "./types";

export  default {
  addCart (context,payload) {
    return new Promise((resolve, reject) => {
      let item = context.state.cartList.find(itemCart => itemCart.iid === payload.iid)
      if(item){
        context.commit(Types.ADD_COUNT,item)
        resolve('该商品成功增加一件')
      }else {
        context.commit(Types.PUSHLIST,payload)
        resolve('成功添加该商品至购物车')
      }
    })

  }
}