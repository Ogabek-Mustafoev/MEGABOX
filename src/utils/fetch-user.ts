// 'use client';
//
// import { fetchUserFailure, fetchUserStart, fetchUserSuccess } from '@/features';
// import { httpClient } from '@/utils';
//
// import jsCookie from 'js-cookie';
// import { jwtDecode } from 'jwt-decode';
//
// export const fetchUser = () => async (dispatch: any) => {
//   try {
//     dispatch(fetchUserStart());
//     const token = jsCookie.get('w_at');
//     if (!token) throw new Error('Token not found');
//     const decodedToken = jwtDecode<any>(token);
//     if (!decodedToken?._id) throw new Error('User ID not found in token');
//
//     const response = await httpClient.get(`users/${decodedToken._id}`);
//     dispatch(fetchUserSuccess(response.data));
//   } catch (error: any) {
//     dispatch(fetchUserFailure(error.message));
//   }
// };
