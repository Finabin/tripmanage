import { request } from "../utils/request";

// 用户登录
export function userLoginAPI(data) {
  return request({
    url: `${GLOBAL_HOST}:${GLOBAL_POST}/auth/user/open/doLogin`,
    method: 'POST',
    data: data,
  })
}
