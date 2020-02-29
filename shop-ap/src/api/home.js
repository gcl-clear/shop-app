import {request} from './request'

export function getHomedata() {
  return request({
    url: "home/multidata"
    // url: '/home/data?page=1&type=sell'
  })
}
