import http from "./http";
import { pageQuery, httpResponse, storeLogin } from "./types";

export function getOrderList(page: pageQuery, status: number) {
  return http.get(`/v1/store/order_list?page=${page.page}&page_size=${page.page_size}&status=${status}`) as  Promise<httpResponse>;
}

export function login(sl: storeLogin) {
  return http.post(`/v1/store/login`, sl) as  Promise<httpResponse>;
}

export function loginByCode(code: string) {
  return http.post(`/v1/store/login_by_code`, {code}) as  Promise<httpResponse>;
}

export function writeoff_order(order_id: number) {
  return http.post(`/v1/store/writeoff_order`, {order_id}) as  Promise<httpResponse>;
}