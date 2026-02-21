import { useNavigate } from "react-router-dom";

function Login({ setIsAuthenticated }) {
  const navigate = useNavigate();

  const handleLogin = () => {
    setIsAuthenticated(true);
    navigate("/profile");
  };

  return (
    <div className="p-6">
      <h2 className="text-2xl mb-4">Login</h2>
      <button
        onClick={handleLogin}
        className="px-4 py-2 bg-green-600 text-white rounded"
      >
        Simulate Login
      </button>
    </div>
  );
}

export default Login;
