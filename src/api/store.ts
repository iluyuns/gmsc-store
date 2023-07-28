import http from "./http";
import { pageQuery, httpResponse } from "./types";

export function getOrderList(page: pageQuery, status: number) {
  return http.get(`/v1/store/order_list?page=${page.page}&page_size=${page.page_size}&status=${status}`) as  Promise<httpResponse>;
}

export interface storeLogin {
  name: string;
  pwd: string;
}

export function login(sl: storeLogin) {
  return http.post(`/v1/store/login`, sl) as  Promise<httpResponse>;
}

export interface loginByCode {
  code: string;
}

export function loginByCode(sl: loginByCode) {
  return http.post(`/v1/store/login_by_code`, sl) as  Promise<httpResponse>;
}