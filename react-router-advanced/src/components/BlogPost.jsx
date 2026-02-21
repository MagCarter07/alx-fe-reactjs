import { useParams } from "react-router-dom";

function BlogPost() {
  const { id } = useParams();

  return (
    <div className="p-6">
      <h2 className="text-2xl font-bold">Blog Post ID: {id}</h2>
    </div>
  );
}

export default BlogPost;
