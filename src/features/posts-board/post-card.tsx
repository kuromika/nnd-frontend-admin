export type PostCardProps = {
  image?: string;
  title?: string;
  description?: string;
};

const DEFAULT_IMAGE = "/saya.png";

export const PostCard = ({ title, description, image }: PostCardProps) => {
  return (
    <li className="flex flex-col gap-2 b-[#FFFFF] border-4 rounded bg-[#040402]">
      <img
        src={image ? image : DEFAULT_IMAGE}
        alt="Post image"
        loading="lazy"
        className="h-96 object-cover"
      />
      <div className="text-[#FFFF] p-5">
        <h2 className="text-xl">{title ? title : "No title"}</h2>
        <p className="mt-2"> {description ? description : "No description"} </p>
      </div>
    </li>
  );
};
