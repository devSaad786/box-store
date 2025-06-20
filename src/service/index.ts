import axios, {
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
  AxiosRequestHeaders,
} from 'axios';
import {
  hideLoader,
  hideRefreshing,
  showLoader,
  showRefreshing,
} from '../redux/slices/loaderSlice';
import {CommonActions} from '@react-navigation/native';
import {navigationRef} from '../utilities';
import { store } from '../redux/store';

export const ASSET_URL =
  'http://25.25.25.138:3011/';

const instance = axios.create({
  baseURL: 'http://25.25.25.138:3011/api/v1/',
  timeout: 20000,
});

instance.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const token = store.getState().role.token;
    console.log(token);
    // Ensuring headers are of type AxiosRequestHeaders
    if (token) {
      (config.headers as AxiosRequestHeaders).Authorization = `Bearer ${token}`;
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

instance.interceptors.response.use(
  (response: AxiosResponse) => {
    return response;
  },
  error => {
    store.dispatch(hideLoader());
    console.error('API Error:', error.response?.data || error.message);
    if (error.response?.data?.message.includes('Unauthenticated')) {
      navigationRef.dispatch(
        CommonActions.reset({
          index: 0,
          routes: [{name: 'preLogin'}],
        }),
      );
    }
    return Promise.reject(
      error.response?.data?.message ||
        'Something went wrong. Please try again.',
    );
  },
);

type HttpMethod = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface ApiResponse<T = any> {
  error: string | null;
  response: AxiosResponse<T> | null;
}

export const apiHelper = async <T = any>(
  method: HttpMethod,
  endPoint: string,
  customHeaders: Record<string, string> = {},
  body: any = null,
  refreshing = false,
): Promise<ApiResponse<T>> => {
  !refreshing ? store.dispatch(showLoader()) : store.dispatch(showRefreshing());
  try {
    store.dispatch(showLoader())
    const config: AxiosRequestConfig = {
      method,
      url: endPoint,
      headers: {
        'Content-Type': 'application/json',
        ...customHeaders,
      },
      ...(method !== 'GET' && {data: body}),
    };

    const response = await instance.request<T>(config);
    !refreshing
      ? store.dispatch(hideLoader())
      : store.dispatch(hideRefreshing());
    return {
      error: null,
      response,
    };
  } catch (error: any) {
    !refreshing
      ? store.dispatch(hideLoader())
      : store.dispatch(hideRefreshing());
    return {
      error: error,
      response: null,
    };
  }
};
