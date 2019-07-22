import apisauce from 'apisauce';
import API_ROOT from '../config/config';

export const api = apisauce.create({
    baseURL: API_ROOT,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    responseType: 'json',
    timeout: 1800000,
  });

export const addHeader = (accessToken) => api.setHeader('Authorization', accessToken);
export const removeHeader = () => api.deleteHeader('Authorization');

export const signUpApiCall = userDetails => {
  return api.post('/user', userDetails);
};