import { WithLabel } from "@/components/with-label";

export const PostForm = () => {
  return (
    <div className="flex flex-col items-center gap-10 h-full">
      <h1 className="text-2xl text-white">What are you thinking about?</h1>
      <form className="min-w-full  flex flex-col items-center gap-10">
        <textarea
          className="w-[80%] h-[450px] bg-[#030407] resize-none text-[#FFFFFF] p-5 text-xl"
          name="content"
          placeholder="write the coolest blog post"
        ></textarea>
        <WithLabel for="isPublished" text="Publish?">
          <input
            type="checkbox"
            name="isPublished"
            id="isPublished"
            className="w-7 h-7"
          ></input>
        </WithLabel>
        <button
          type="submit"
          className=" p-3 text-[#FFFFFF] bg-[#4465A1] rounded font-bold text-xl"
        >
          Create
        </button>
      </form>
    </div>
  );
};
