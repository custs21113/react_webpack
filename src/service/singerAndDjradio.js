import request from './request'

// 入驻歌手
export function getSettleSinger() {
  return request({
      url: '/artist/list'
  })
}

//热门主播
export function getDjradios() {
  return request({
      url: '/djradio/list'
  })
}