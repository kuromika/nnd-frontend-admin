import { SwitchButton } from "@/components/switch-button";
import { FormEvent, useState } from "react";
import { PostForm } from "./post-form";
import { MarkdownPreview } from "./markdown-preview";
import { Notification, notificationType } from "@/components/notification";

enum modes {
  write = 0,
  preview = 1,
}

export type postDataType = {
  isPublished: boolean;
  content: string;
};

export type postEditorProps = {
  action: string;
  updateData: (field: string, value: string | boolean) => void;
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
  postData: postDataType;
  notification: notificationType;
};

export const PostEditor = ({
  action,
  updateData,
  handleSubmit,
  postData,
  notification,
}: postEditorProps) => {
  const [mode, setMode] = useState(modes.write);
  const setWriteMode = () => {
    setMode(modes.write);
  };

  const setPreviewMode = () => {
    setMode(modes.preview);
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
          action={action}
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
