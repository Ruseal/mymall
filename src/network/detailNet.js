import {request} from "./request";

export function getDetail(iid) {
  return request({
    url: '/detail',
    params: {
      iid,
    }
  })
};
export function getRecommend(iid) {
  return request({
    url: '/recommend',
  })
};

export class DetailTitleMessage {
    constructor (itemInfo, columns, services) {
      this.title = itemInfo.title
      this.price = itemInfo.price
      this.oldPrice = itemInfo.oldPrice
      this.discountBgColor = itemInfo.discountBgColor
      this.desc = itemInfo.discountDesc
      this.columns = columns
      this.services = services   //前3
      this.jsDesc = itemInfo.desc
      this.lowPrice = itemInfo.lowPrice
      this.topImages = itemInfo.topImages


    }
};
export class DetailShow {
  constructor (shopInfo) {
    this.shopLogo = shopInfo.shopLogo
    this.name = shopInfo.name
    this.cSells = shopInfo.cSells
    this.cGoods = shopInfo.cGoods
    this.score = shopInfo.score
  }
}
