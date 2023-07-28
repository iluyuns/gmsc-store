import axios from 'axios';
import { httpResponse } from './types';

// 配合 axios 拦截 重新定义axios的返回值类型 以便于后续的类型推断，这里的 data 实际上是后端返回的数据
async function post(path: string, body?: any) {
  const res = await axios.post(path, body);
  const data = res as unknown as httpResponse;
  return new Promise<httpResponse>((resolve) => {
    resolve(data);
  });
}
async function get(path: string) {
  const res = await axios.get(path);
  const data = res as unknown as httpResponse;
  return new Promise<httpResponse>((resolve) => {
    resolve(data);
  });
}
async function put(path: string, body?: any) {
  const res = await axios.put(path, body);
  const data = res as unknown as httpResponse;
  return new Promise<httpResponse>((resolve) => {
    resolve(data);
  });
}
async function del(path: string) {
  const res = await axios.delete(path);
  const data = res as unknown as httpResponse;
  return new Promise<httpResponse>((resolve) => {
    resolve(data);
  });
}

// 上传文件
async function uploadFile(
  path: string,
  file: File,
  body = {} as { [key: string]: string }
) {
  const formData = new FormData();
  formData.append('file', file);
  Object.keys(body).forEach((key) => {
    formData.append(key, body[key]);
  });
  const res = await axios.post(path, formData, {
    headers: {
      'Content-Type': 'multipart/form-data',
    },
  });
  const data = res as unknown as httpResponse;
  return new Promise<httpResponse>((resolve) => {
    resolve(data);
  });
}

export default {
  post,
  get,
  put,
  del,
  uploadFile,
};
