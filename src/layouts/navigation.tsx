import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex flex-col gap-5 p-5 bg-[#04070A] text-white w-40 font-bold">
      <Link href="/auth/login">Login</Link>
      <Link href="/posts">Posts</Link>
    </nav>
  );
};
