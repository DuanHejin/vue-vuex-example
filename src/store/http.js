import axios from "axios"
import { CommonTypes } from "../constants";
import store from './index';

let requestPool = 0;
/**
 * addReq为true表示开启请求，值为false表示请求关闭
 * @param {*} addReq 
 */
const toggleLoading = (addReq = false) => {
  if (addReq) {
    requestPool++;
    // show loading icon
    store.commit(CommonTypes.TOGGLE_LOADING);

  } else {
    requestPool--;
    if (requestPool === 0) {
      // hide loading icon
      store.commit(CommonTypes.TOGGLE_LOADING);
    }
  }
}

axios.interceptors.request.use((config) => {
  toggleLoading(true);
  return config;
}, (error) => {
  toggleLoading();
  return Promise.reject(error);
});

axios.interceptors.response.use((response) => {
  toggleLoading();
  return response;
}, (error) => {
  toggleLoading();
  return Promise.reject(error);
});

const get = (url, params) => {
  return axios.get(url, params);
}

const post = (url, params) => {
  return axios.post(url, params);
}

const deleteObj = (url) => {
  return axios.delete(url);
}

export default {
  get,
  post,
  deleteObj,
};