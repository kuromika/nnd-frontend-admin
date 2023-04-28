import { notificationType } from "@/components/notification";
import { Protected } from "@/components/protected";
import { AuthContext } from "@/contexts/auth-context";
import { PostEditor, postDataType } from "@/features/write-post/post-editor";
import { PostType } from "@/types/post";
import { useRouter } from "next/router";
import { FormEvent, useContext, useEffect, useState } from "react";

const UpdatePost = () => {
  const router = useRouter();
  const auth = useContext(AuthContext);
  const [postData, setPostData] = useState<postDataType>({
    isPublished: false,
    content: "",
  });
  const [notification, setNotification] = useState<notificationType>({
    type: "",
    message: "",
  });

  const { pid } = router.query;

  useEffect(() => {
    const fetchPost = async () => {
      const response = await fetch(
        `https://nnd-backend.up.railway.app/posts/${pid}`,
        { mode: "cors" }
      );
      if (response.status === 200) {
        const data: PostType = await response.json();
        setPostData({
          isPublished: data.isPublished,
          content: data.content,
        });
      } else {
        setNotification({
          type: "error",
          message: `There was a ${response.status} error while retrieving the post`,
        });
      }
    };
    fetchPost();
  }, [pid]);

  const updateData = (field: string, value: string | boolean) => {
    setPostData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch(
      `https://nnd-backend.up.railway.app/posts/${pid}`,
      {
        method: "PUT",
        mode: "cors",
        headers: new Headers({
          Authorization: `Bearer ${auth.token}`,
          "Content-Type": "application/json",
        }),
        body: JSON.stringify(postData),
      }
    );
    if (response.status === 200) {
      const data = await response.json();
      setNotification({
        type: "success",
        message: `Post ${data._id} updated successfully, you will be redirect soon...`,
      });
      setTimeout(() => {
        router.push("/posts");
      });
    } else {
      setNotification({
        type: "error",
        message: `There was an error with status ${response.status}`,
      });
    }
  };

  return (
    <Protected mustBeAuth={true}>
      <PostEditor
        postData={postData}
        updateData={updateData}
        notification={notification}
        handleSubmit={handleSubmit}
        action="Update"
      ></PostEditor>
    </Protected>
  );
};

export default UpdatePost;
