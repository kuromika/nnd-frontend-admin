import { Notification, notificationType } from "@/components/notification";
import { Protected } from "@/components/protected";
import { PostsBoard } from "@/features/posts-board/board";
import { PostType } from "@/types/post";
import Link from "next/link";
import { useEffect, useState } from "react";

const Posts = () => {
  const [posts, setPosts] = useState<PostType[]>([]);
  const [notification, setNotification] = useState<notificationType>({
    type: "",
    message: "",
  });

  useEffect(() => {
    const fetchPosts = async () => {
      const response = await fetch("https://nnd-backend.up.railway.app/posts", {
        mode: "cors",
      });
      if (response.status === 200) {
        const data = await response.json();
        setPosts(data);
      } else {
        setNotification({
          type: "error",
          message: `There was a ${response.status} error while retrieving the post`,
        });
      }
    };
    fetchPosts();
  }, []);

  return (
    <Protected mustBeAuth={true}>
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
        ></Notification>
      )}
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
