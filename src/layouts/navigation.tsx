import { AuthContext } from "@/contexts/auth-context";
import Link from "next/link";
import { useRouter } from "next/router";
import { useContext } from "react";

export const Navigation = () => {
  const auth = useContext(AuthContext);
  const router = useRouter();

  const handleLogOut = () => {
    auth?.logOut();
    router.push("/");
  };

  return (
    <nav className="flex flex-col gap-5 p-5 bg-[#04070A] text-white w-52 font-bold text-2xl items-center w-full md:w-52">
      {!auth.isAuthenticated() && <Link href={"/auth/login"}>Log in</Link>}
      {auth.isAuthenticated() && (
        <>
          <Link href="/posts">Posts</Link>
          <button type="button" onClick={handleLogOut}>
            Log out
          </button>
        </>
      )}
    </nav>
  );
};
