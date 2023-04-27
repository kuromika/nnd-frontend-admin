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
    <nav className="flex flex-col gap-5 p-5 bg-[#04070A] text-white w-40 font-bold text-xl text-center">
      {!auth?.isAuthenticated() && <Link href={"/auth/login"}>Log in</Link>}
      {auth?.isAuthenticated() && (
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
