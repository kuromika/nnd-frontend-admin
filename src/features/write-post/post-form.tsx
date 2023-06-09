import { WithLabel } from "@/components/with-label";
import { ChangeEvent, FormEvent } from "react";
import { postDataType } from "./post-editor";

export const PostForm = (props: {
  update: (field: string, value: string | boolean) => void;
  data: postDataType;
  submit: (e: FormEvent<HTMLFormElement>) => void;
  action: string;
}) => {
  const handleChange = (
    e: ChangeEvent<HTMLTextAreaElement | HTMLInputElement>
  ) => {
    if (e.target.name === "isPublished") {
      props.update(e.target.name, (e.target as HTMLInputElement).checked);
      return;
    }
    props.update(e.target.name, e.target.value);
  };

  return (
    <div className="flex flex-col items-center gap-10 h-full">
      <h1 className="text-2xl text-white">What are you thinking about?</h1>
      <form
        className="min-w-full  flex flex-col items-center gap-10"
        onSubmit={props.submit}
      >
        <textarea
          className="w-[80%] h-[400px] bg-[#030407] resize-none text-[#FFFFFF] p-5 text-xl"
          name="content"
          placeholder="write the coolest blog post"
          onChange={handleChange}
          value={props.data.content}
        ></textarea>
        <WithLabel for="isPublished" text="Publish?">
          <input
            type="checkbox"
            name="isPublished"
            id="isPublished"
            className="w-7 h-7"
            checked={props.data.isPublished}
            onChange={handleChange}
          ></input>
        </WithLabel>
        <button
          type="submit"
          className=" p-3 text-[#FFFFFF] bg-[#4465A1] rounded font-bold text-xl"
        >
          {props.action}
        </button>
      </form>
    </div>
  );
};
