import Link from "next/link";

export type PostCardProps = {
  image?: string;
  title?: string;
  description?: string;
  id: string;
};

const DEFAULT_IMAGE = "/saya.png";

export const PostCard = ({ title, description, image, id }: PostCardProps) => {
  return (
    <li className="flex flex-col gap-2 b-[#FFFFFF] border-4 rounded bg-[#040402]">
      <img
        src={image ? image : DEFAULT_IMAGE}
        alt="Post image"
        loading="lazy"
        className="h-96 object-cover"
      />
      <div className="text-[#FFFFFF] p-5">
        <h2 className="text-xl">{title ? title : "No title"}</h2>
        <p className="mt-2"> {description ? description : "No description"} </p>
      </div>
      <div className="pl-5 pr-5 pb-5 flex justify-between">
        <Link
          className=" bg-[#FFFFFF] p-3  rounded text-xl uppercase"
          href={`posts/update/${id}`}
        >
          Update
        </Link>
      </div>
    </li>
  );
};
