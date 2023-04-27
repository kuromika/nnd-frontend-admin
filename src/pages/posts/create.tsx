import { SwitchButton } from "@/components/switch-button";
import { MarkdownPreview } from "@/features/create-post/markdown-preview";
import { PostForm } from "@/features/create-post/post-form";
import { useState } from "react";

enum modes {
  write = 0,
  preview = 1,
}

const CreatePost = () => {
  const [mode, setMode] = useState(modes.write);

  const setWriteMode = () => {
    setMode(modes.write);
  };

  const setPreviewMode = () => {
    setMode(modes.preview);
  };

  return (
    <section className="flex flex-col pt-10 pb-10">
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
        <PostForm></PostForm>
      ) : (
        <MarkdownPreview></MarkdownPreview>
      )}
    </section>
  );
};

export default CreatePost;
