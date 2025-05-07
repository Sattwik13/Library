import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";

const categories = ["Fiction", "Non-Fiction", "Sci-Fi", "Mystery", "Fantasy", "Self-Help"];
const popularBooks = [
  { id: 1, title: "Dune", author: "Frank Herbert" },
  { id: 2, title: "1984", author: "George Orwell" },
  { id: 3, title: "The Hobbit", author: "J.R.R. Tolkien" },
];

const HomePage = () => {
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <div
      className={`py-15 px-8 max-w-full mx-auto bg-gray-900 min-h-screen text-gray-200 transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-10"
      }`}
    >
      <h1 className="text-5xl font-bold text-indigo-400 mb-6">
        Welcome to the <span className="text-4xl text-gray-200 animate-pulse">Online Library</span>
      </h1>


      {/* Categories Section */}
      <section className="mb-10">
        <h2 className="display: inline-flex items-center px-4 py-2  rounded-3xl center text-2xl font-bold text-gray-100 mb-6 bg-gradient-to-r from-indigo-700 via-purple-600 to-pink-800">
         📚 Book Categories
        </h2>
        <div className="flex flex-wrap gap-4">
          {categories.map((props) => (
            <Link
              key={props}
              to={`/books/${props.toLowerCase()}`}
              className="bg-gray-800 font-mono text-indigo-300 font-medium px-4 py-2 mb-4 rounded-full shadow-sm transition-all duration-300 hover:bg-gray-600 hover:scale-105"
            >
              {props}
            </Link>
          ))}
        </div>
      </section>

      {/* Popular Books Section */}
      <section>
        <h2 className="flex justify-center rounded-3xl text-3xl font-serif text-gray-100 mb-4 p-2 bg-gradient-to-r from-indigo-700 via-pink-800 to-purple-600 animate-bounce">
          🌟 Popular Books
        </h2>
        <ul className="space-y-3">
          {popularBooks.map((book) => (
            <li
              key={book.id}
              className="border border-gray-700 rounded-lg p-4 bg-gray-800 transition-all duration-300 hover:shadow-xl hover:bg-gray-700 hover:scale-[1.02]"
            >
              <Link
                to={`/book/${book.id}`}
                className="text-lg font-serif text-indigo-300 hover:underline transition-colors"
              >
                {book.title}
              </Link>
              <p className="text-sm text-gray-400">by {book.author}</p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default HomePage;
