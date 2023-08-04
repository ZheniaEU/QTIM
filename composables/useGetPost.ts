import { Post } from "utils/types/post";

export const useGetPost = (id: string) => {
   return useApiFetch<Post>("/posts/" + id, {
      server: true,
      lazy: false
   });
};
