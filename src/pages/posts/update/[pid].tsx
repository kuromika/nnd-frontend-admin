import { useRouter } from "next/router";

const UpdatePost = () => {
  const router = useRouter();
  const { pid } = router.query;
  return <h1>{pid}</h1>;
};

export default UpdatePost;
