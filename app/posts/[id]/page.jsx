import { notFound } from "next/navigation";
import { getStoredPostsData } from "../../library/getStoredPostsData";

export default async function Post({ params }) {
    const id = params.id;
    const post = getStoredPostsData(id);

    if (!post.find((post) => post.id === id)) {
        return notFound();
    }
  return (
    <div>
      
    </div>
  )
}
