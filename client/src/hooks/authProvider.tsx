import {
  createContext,
  useContext,
  useEffect,
  useLayoutEffect,
  useState,
} from "react";

import { api } from "../services/api/api";

const AuthContext = createContext(undefined);

export const useAuth = () => {
  const authContext = useContext(AuthContext);

  if (!authContext) {
    throw new Error("useAuth must be used within a AuthProvider");
  }

  return authContext;
};

const AuthProvider = ({ children }: any) => {
  const [token, setToken] = useState<string | null>();

  useEffect(() => {
    const fetchMe = async () => {
      try {
        const response = await api.get("JWT API HERE");
      } catch {
        setToken(null);
      }
    };

    fetchMe();
  }, []);

  useLayoutEffect(() => {
    const authInterceptor = api.interceptors.request.use((config) => {
      config.headers.Authorization = token
        ? `Bearer ${token}`
        : config.headers.Authorization;
      return config
    });

    return () => {
      api.interceptors.request.eject(authInterceptor);
    };
  }, [token]);

  useLayoutEffect(() => {
    const refreshInterceptor = api.interceptors.response.use(
      (response) => response,
      async (error) => {
        const originalRequest = error.config;

        if (error.response.status === 401 && error.response.data.message === "Unauthorized") {
          try {
            const response = await api.get('api/refreshToken');

            setToken(response.data.accessToken)

            originalRequest.headers.Authorization = `Bearer ${response.data.accessToken}`
            originalRequest._retry = true;

            return api(originalRequest)
          } catch {
            setToken(null)
          }

          return Promise.reject(error)
        }
        
        return () => {
          api.interceptors.response.eject(refreshInterceptor);
        }
      }
    )
  })
};
