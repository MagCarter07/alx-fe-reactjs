import { useQuery } from "@tanstack/react-query";

function PostsComponent() {
  const fetchPosts = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/posts");

    if (!response.ok) {
      throw new Error("Failed to fetch posts");
    }

    return response.json();
  };

  const { data, error, isLoading, isError, refetch, isFetching } = useQuery({
    queryKey: ["posts"],
    queryFn: fetchPosts,
    staleTime: 1000 * 60 * 5, // 5 minutes cache
  });

  if (isLoading) {
    return (
      <div className="text-center py-10 text-lg font-medium">
        Loading posts...
      </div>
    );
  }

  if (isError) {
    return (
      <div className="text-center py-10 text-red-500">
        Error: {error.message}
      </div>
    );
  }

  return (
    <div className="bg-white rounded-xl shadow-lg p-6">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-semibold text-gray-800">Posts</h2>

        <button
          onClick={() => refetch()}
          className="px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700 transition"
        >
          {isFetching ? "Refreshing..." : "Refetch Posts"}
        </button>
      </div>

      <div className="space-y-4">
        {data.slice(0, 10).map((post) => (
          <div
            key={post.id}
            className="p-4 border rounded-lg hover:shadow-md transition"
          >
            <h3 className="font-bold text-lg text-blue-600">{post.title}</h3>
            <p className="text-gray-600 mt-2">{post.body}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default PostsComponent;
