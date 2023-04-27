import Link from "next/link";

export const Header = () => {
  return (
    <header className=" text-white bg-[#04070A] p-5 h-24 flex items-center">
      <Link href={"/"}>
        <h1 className="font-mincho text-4xl font-bold">
          夏の大三角 <span className="font-normal">Natsu no Daisankaku</span>
        </h1>
      </Link>
    </header>
  );
};
