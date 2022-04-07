/**
 * Author:    Janaka Jati Lasmana
 * Created:   06.04.2022
 *
 * (c) Copyright by Janaka Jati Lasmana.
 **/

import axios from 'axios';
import { Config } from './index';
const err = {
  status: 408,
  data: {},
  message: 'Error: Network Error',
};
type ErrorFetch = {
  response: any;
};
export type ApiSuccessResponse<T> = {
  status: number;
  success: boolean;
  message: string;
  code?: number;
  stack?: string;
  data: T;
};
class Api {
  static post<Res>(
    baseURL: string,
    route: string,
    params: any = {},
    headers = {},
  ): Promise<ApiSuccessResponse<Res>> {
    return this.xhr(baseURL, headers)
      .post(route, params)
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error: ErrorFetch) => {
        if (!error.response) {
          console.warn(error);
          return err;
        } else {
          console.warn(error);
          return { ...error.response.data, status: error.response.status };
        }
      }) as any;
  }
  static put<Res>(
    baseURL: string,
    route: string,
    params: any = {},
    headers = {},
  ): Promise<ApiSuccessResponse<Res>> {
    return this.xhr(baseURL, headers)
      .put(route, params)
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error: ErrorFetch) => {
        if (!error.response) {
          console.warn(error);
          return err;
        } else {
          console.warn(error);
          return { ...error.response.data, status: error.response.status };
        }
      }) as any;
  }
  static patch<Res>(
    baseURL: string,
    route: string,
    params: any = {},
    headers = {},
  ): Promise<ApiSuccessResponse<Res>> {
    return this.xhr(baseURL, headers)
      .patch(route, params)
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error: ErrorFetch) => {
        if (!error.response) {
          console.warn(error);
          return err;
        } else {
          console.warn(error);
          return { ...error.response.data, status: error.response.status };
        }
      }) as any;
  }
  static get<Res>(
    baseURL: string,
    route: string,
    headers = {},
  ): Promise<ApiSuccessResponse<Res>> {
    return this.xhr(baseURL, headers)
      .get(route)
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error: ErrorFetch) => {
        if (!error.response) {
          console.warn(error);
          return err;
        } else {
          console.warn(error);
          return { ...error.response.data, status: error.response.status };
        }
      }) as any;
  }
  static delete<Res>(
    baseURL: string,
    route: string,
    headers = {},
  ): Promise<ApiSuccessResponse<Res>> {
    return this.xhr(baseURL, headers)
      .delete(route)
      .then((response) => {
        return { data: response.data, status: response.status };
      })
      .catch((error: ErrorFetch) => {
        if (!error.response) {
          console.warn(error);
          return err;
        } else {
          console.warn(error);
          return { ...error.response.data, status: error.response.status };
        }
      }) as any;
  }

  static xhr(baseURL: string, headers: object) {
    const instance = axios.create({
      baseURL,
      timeout: 15000,
      headers: {
        ...Config.API_HEADER.CONTENT_TYPE.APP_JSON,
        ...Config.API_HEADER.ACCEPT.APP_JSON,
        ...Config.API_HEADER.CACHE_CONTROL.NO_CACHE,
        ...headers,
      },
      onUploadProgress: function (progressEvent: number) {
        if (__DEV__) {
          console.log({ onUploadProgress: progressEvent });
        }
      },
      onDownloadProgress: function (progressEvent: number) {
        if (__DEV__) {
          console.log({ onDownloadProgress: progressEvent });
        }
      },
    });
    return instance;
  }
}

export default Api;
