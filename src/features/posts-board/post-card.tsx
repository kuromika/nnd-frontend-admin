export type PostCardProps = {
  image?: string;
  title?: string;
  description?: string;
};

const DEFAULT_IMAGE = "/saya.png";

export const PostCard = ({ title, description, image }: PostCardProps) => {
  return (
    <li className="flex flex-col gap-2">
      <img
        src={image ? image : DEFAULT_IMAGE}
        alt="Post image"
        loading="lazy"
        className="h-96 object-cover"
      />
      <h2>{title ? title : "No title"}</h2>
      <p> {description ? description : "No description"} </p>
    </li>
  );
};
