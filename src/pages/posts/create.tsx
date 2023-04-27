import { Notification, notificationType } from "@/components/notification";
import { SwitchButton } from "@/components/switch-button";
import { AuthContext } from "@/contexts/auth-context";
import { MarkdownPreview } from "@/features/create-post/markdown-preview";
import { PostForm } from "@/features/create-post/post-form";
import { useRouter } from "next/router";
import { FormEvent, useContext, useState } from "react";

enum modes {
  write = 0,
  preview = 1,
}

export type postDataType = {
  isPublished: boolean;
  content: string;
};

const CreatePost = () => {
  const [postData, setPostData] = useState<postDataType>({
    isPublished: false,
    content: "",
  });

  const [notification, setNotification] = useState<notificationType>({
    type: "",
    message: "",
  });

  const [mode, setMode] = useState(modes.write);
  const auth = useContext(AuthContext);

  const router = useRouter();

  const updateData = (field: string, value: string | boolean) => {
    setPostData((prev) => ({ ...prev, [field]: value }));
  };

  const setWriteMode = () => {
    setMode(modes.write);
  };

  const setPreviewMode = () => {
    setMode(modes.preview);
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

    const data = await response.json();
    console.log(data);

    if (response.status === 200) {
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
    <section className="flex flex-col pt-10 pb-5">
      <div className="flex justify-center mb-5">
        <SwitchButton
          selected={mode === modes.write}
          text="Write"
          handleClick={setWriteMode}
        ></SwitchButton>
        <SwitchButton
          selected={mode === modes.preview}
          text="Preview"
          handleClick={setPreviewMode}
        ></SwitchButton>
      </div>
      {mode === modes.write ? (
        <PostForm
          data={postData}
          update={updateData}
          submit={handleSubmit}
        ></PostForm>
      ) : (
        <MarkdownPreview markdown={postData.content}></MarkdownPreview>
      )}
      {notification.message && (
        <Notification
          message={notification.message}
          type={notification.type}
        ></Notification>
      )}
    </section>
  );
};

export default CreatePost;
