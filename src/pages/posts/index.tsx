import Link from "next/link";

const Posts = () => {
  return (
    <section className="flex flex-col items-center mt-10">
      <Link
        href="/posts/create"
        className="text-xl font-bold bg-[#4465A1] text-white p-3 rounded-sm"
      >
        Create a new post
      </Link>
    </section>
  );
};

export default Posts;
