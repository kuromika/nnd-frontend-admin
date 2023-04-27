import { SwitchButton } from "@/components/switch-button";
import { PostForm } from "@/features/create-post/post-form";
import { useState } from "react";

enum modes {
  write = 0,
  preview = 1,
}

const CreatePost = () => {
  const [mode, setMode] = useState(modes.write);

  const switchMode = () => {
    setMode((prev) => (prev === modes.write ? modes.preview : modes.write));
  };

  return (
    <section className="pt-10">
      <SwitchButton
        selected={mode === modes.write}
        text="Write"
        handleClick={switchMode}
      ></SwitchButton>
      <SwitchButton
        selected={mode === modes.preview}
        text="Preview"
        handleClick={switchMode}
      ></SwitchButton>
      <PostForm></PostForm>
    </section>
  );
};

export default CreatePost;
