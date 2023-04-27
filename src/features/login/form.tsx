import { TextInput } from "@/components/text-input";
import { WithLabel } from "@/components/with-label";
import { FormEvent } from "react";

export const LoginForm = (props: {
  handleSubmit: (e: FormEvent<HTMLFormElement>) => void;
}) => {
  return (
    <>
      <h1 className="text-center mb-10 text-3xl font-bold text-[#FFFFFF]">
        Welcome back!
      </h1>
      <form
        className="flex flex-col gap-5 items-center"
        onSubmit={props.handleSubmit}
      >
        <WithLabel for="username" text="Username:">
          <TextInput id="username" type="text" name="username"></TextInput>
        </WithLabel>
        <WithLabel for="password" text="Password:">
          <TextInput id="password" type="password" name="password"></TextInput>
        </WithLabel>
        <button
          type="submit"
          className="p-2 w-[80%] mt-2 font-bold text-xl hover:bg-[#4465A1] active:bg-[#DD8A06] rounded text-[#070C12] bg-[#FFFFFF]"
        >
          Log in
        </button>
      </form>
    </>
  );
};
