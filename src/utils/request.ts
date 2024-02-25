import axios, { AxiosInstance, AxiosResponse, AxiosRequestConfig } from 'axios';

const baseURL = process.env.NEXT_PUBLIC_BASE_URL;

const request: AxiosInstance = axios.create({
  baseURL,
  timeout: 30000,
  withCredentials: true,
});

export const initRequestInterceptor = (req: AxiosRequestConfig): AxiosRequestConfig => {
  req.headers = {
    ...(req.headers || {}),
    'Content-Type': 'application/json',
  };

  return req;
};

const refreshToken = async (baseURL: string) => {
  const refreshTokenAPI: AxiosInstance = axios.create({
    baseURL,
    withCredentials: true,
  });

  refreshTokenAPI.interceptors.request.use(initRequestInterceptor as any);

  await refreshTokenAPI.post('/users/refresh-token');
};

const initResponseInterceptor = () => {
  return [
    (response: AxiosResponse) => {
      return response;
    },
    async (error: any) => {
      const config = error.config;
      const errorCode = error?.response?.data?.error?.code;

      if (errorCode === 'TOKEN_EXPIRED' && !config._attempted) {
        config._attempted = true;

        await refreshToken(baseURL as string);

        return axios(config);
      }

      return Promise.reject(errorCode);
    },
  ];
};

request.interceptors.request.use(initRequestInterceptor as any);
request.interceptors.response.use(...initResponseInterceptor());

export const httpClient: AxiosInstance = request;
