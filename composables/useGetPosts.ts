import { Post } from "utils/types/post";

export const useGetPosts = () => {
   return useApiFetch<Post[]>("/posts", {
      server: true,
      lazy: false
   });
};
