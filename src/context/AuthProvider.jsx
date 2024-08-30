// import React, {
//     createContext,
//     useContext,
//     useEffect,
//     useLayoutEffect, 
//     useState,
//   } from 'react';
//   import { api } from '../utils/requestHandler';
//   import storage from '../utils/storage';
//   import { GET_ACCESS_TOKEN } from '../utils/ApiEndPoint';
  
//   const AuthContext = createContext();
  
//   export const useAuth = () => {
//     const authContext = useContext(AuthContext);
//     if (!authContext) {
//       throw new Error('useAuth must be used within a AuthProvider');
//     }
//     return authContext;
//   };
  
//   const AuthProvider = ({ children }) => {
//     const [token, setToken] = useState();
  
//     const fetchMe = async () => {
//       try {
//         const response = await api.get('/auth/admin/me');
//         if (response.data.status) {
//           setToken(response.data?.data?.accessToken);
//         }
//       } catch (error) {
//         setToken(null);
//       }
//     };
  
//     useEffect(() => {
//       fetchMe();
//     }, []);
  
//     useLayoutEffect(() => {
//       const authInterceptor = api.interceptors.request.use((config) => {
//         config.headers.Authorization =
//           !(config)._retry && token
//             ? `Bearer ${token}`
//             : config.headers.Authorization;
//         return config;
//       });
  
//       return () => {
//         api.interceptors.request.eject(authInterceptor);
//       };
//     }, [token]);
  
//     useLayoutEffect(() => {
//       const token = storage.get('auth');
  
//       if (!token) return;
  
//       const refreshInterceptor = api.interceptors.response.use(
//         (response) => response,
//         async (error) => {
//           const originalRequest = error.config;
//           if (error.response.status === 401) {
//             try {
//               const response = await api.get(GET_ACCESS_TOKEN, {
//                 headers: { Authorization: `Bearer ${token}` },
//               });
//               setToken(response.data.data.accessToken);
//               originalRequest.headers.Authorization = `Bearer ${response.data.data.accessToken}`;
//               originalRequest._retry = true;
//               return api(originalRequest);
//             } catch (err) {
//               setToken(null);
//             }
//           }
//           return Promise.reject(error);
//         }
//       );
//       return () => {
//         api.interceptors.response.eject(refreshInterceptor);
//       };
//     }, []);
  
//     return (
//       <AuthContext.Provider value={{ token, setToken }}>
//         {children}
//       </AuthContext.Provider>
//     );
//   };
  
//   export default AuthProvider;
  