import { useState } from "react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import PostsComponent from "./components/PostsComponent";

const queryClient = new QueryClient();

function App() {
  const [showPosts, setShowPosts] = useState(true);

  return (
    <QueryClientProvider client={queryClient}>
      <div className="min-h-screen bg-gray-100 p-6">
        <div className="max-w-4xl mx-auto">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-blue-600">
              React Query Demo
            </h1>

            <button
              onClick={() => setShowPosts(!showPosts)}
              className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
            >
              Toggle Posts
            </button>
          </div>

          {showPosts && <PostsComponent />}
        </div>
      </div>
    </QueryClientProvider>
  );
}

export default App;
