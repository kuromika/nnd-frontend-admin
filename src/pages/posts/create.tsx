import { notificationType } from "@/components/notification";
import { Protected } from "@/components/protected";
import { AuthContext } from "@/contexts/auth-context";
import { PostEditor, postDataType } from "@/features/write-post/post-editor";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";

const CreatePost = () => {
  const [postData, setPostData] = useState<postDataType>({
    isPublished: false,
    content: "",
  });

  const [notification, setNotification] = useState<notificationType>({
    type: "",
    message: "",
  });

  const auth = useContext(AuthContext);
  const router = useRouter();

  const updateData = (field: string, value: string | boolean) => {
    setPostData((prev) => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const response = await fetch("https://nnd-backend.up.railway.app/posts", {
      method: "POST",
      mode: "cors",
      headers: new Headers({
        Authorization: `Bearer ${auth.token}`,
        "Content-Type": "application/json",
      }),
      body: JSON.stringify(postData),
    });

    if (response.status === 200) {
      const data = await response.json();
      setNotification({
        type: "success",
        message: `Post ${data._id} created successfully, you will be redirect soon...`,
      });
      setTimeout(() => {
        router.push("/posts");
      }, 2000);
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
        handleSubmit={handleSubmit}
        updateData={updateData}
        notification={notification}
        postData={postData}
        action="Create"
      ></PostEditor>
    </Protected>
  );
};

export default CreatePost;
