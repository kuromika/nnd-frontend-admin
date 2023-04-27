import { Protected } from "@/components/protected";
import { PostsBoard } from "@/features/posts-board/board";
import { PostCard, PostCardProps } from "@/features/posts-board/post-card";
import { PostType } from "@/types/post";
import matter from "gray-matter";
import Link from "next/link";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://nnd-backend.up.railway.app/posts", {
        mode: "cors",
      });
      const data = await response.json();
      if (response.status === 200) {
        setPosts(data);
      }
    };
    fetchPosts();
  }, []);

  return (
    <Protected mustBeAuth={true}>
      <section className="flex flex-col items-center mt-10">
        <Link
          href="/posts/create"
          className="text-xl font-bold bg-[#4465A1] text-white p-3 rounded-sm"
        >
          Create a new post
        </Link>
        <PostsBoard posts={posts}></PostsBoard>
      </section>
    </Protected>
  );
};

export default Posts;
