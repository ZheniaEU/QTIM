export const useApiFetch: typeof useFetch = (path, options = {}) => {
   const config = useRuntimeConfig();
   options.baseURL = config.public.baseURL as string;
   return useFetch(path, options);
};
