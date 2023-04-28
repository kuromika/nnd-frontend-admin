import { PostType } from "@/types/post";
import matter from "gray-matter";
import { PostCard } from "./post-card";

export type PostBoardProps = {
  posts: PostType[];
  remove: (id: string) => void;
};

export const PostsBoard = ({ posts, remove }: PostBoardProps) => {
  return (
    <ul className="posts-board w-full p-24 pt-12 pb-12">
      {posts.map((post) => {
        const postData = matter(post.content).data;
        return (
          <PostCard
            key={post._id}
            description={postData.description}
            title={postData.title}
            image={postData.image}
            id={post._id}
            remove={remove}
          ></PostCard>
        );
      })}
    </ul>
  );
};
