import { PostType } from "@/types/post";
import matter from "gray-matter";
import { PostCard } from "./post-card";

export const PostsBoard = ({ posts }: { posts: PostType[] }) => {
  return (
    <ul className="posts-board w-full p-24">
      {posts.map((post) => {
        const postData = matter(post.content).data;
        return (
          <PostCard
            key={post._id}
            description={postData.description}
            title={postData.title}
            image={postData.image}
          ></PostCard>
        );
      })}
    </ul>
  );
};
