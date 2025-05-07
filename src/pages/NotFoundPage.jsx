import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-indigo-600 via-purple-600 to-pink-500 text-white px-6 text-center">
      <div className="text-7xl animate-bounce mb-4">🚫</div>
      <h1 className="text-6xl font-extrabold tracking-wide mb-2 drop-shadow-lg">404</h1>
      <p className="text-xl font-light mb-6">Oops! The page you're looking for doesn't exist.</p>
      <Link
        to="/"
        className="inline-block bg-white text-amber-100 font-semibold px-6 py-2 rounded-full shadow-md bg-gradient-to-r from-purple-200 via-teal-600 to-purple-800 hover:bg-indigo-100 transition duration-300"
      >
         Go to Home
      </Link>
    </div>
  );
};

export default NotFoundPage;


