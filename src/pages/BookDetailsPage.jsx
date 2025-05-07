import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { useSelector } from "react-redux";

const BookDetailsPage = () => {
  const { id } = useParams();
  const [fadeIn, setFadeIn] = useState(false);
  
    useEffect(() => {
      const timeout = setTimeout(() => setFadeIn(true), 10);
      return () => clearTimeout(timeout);
    }, []);
  const book = useSelector((state) =>
    state.books.list.find((b) => b.id.toString() === id)
  );

  if (!book)
    return (
      <div className={`min-h-screen bg-gray-900 flex items-center justify-center"${
        fadeIn ? "opacity-100" : "opacity-10"
      }`}>
        <p className="text-center text-gray-300 animate-fadeIn">
          Book not found.
        </p>
      </div>
    );

  return (
    <div className="min-h-screen bg-gray-900 flex items-center justify-center">
      <div className="p-12 max-w-3xl bg-gray-800 text-gray-100 rounded-lg shadow-lg animate-fadeIn transition duration-700 ease-in-out">
        <h1 className="font-mono text-4xl font-bold text-indigo-400 mb-4 transition-all duration-500 hover:text-indigo-300">
          {book.title}
        </h1>
        <div className="space-y-3 text-lg">
          <p>
            <span className="font-semibold text-gray-200">Author:</span>
            <span className="font-mono text-gray-200"> {book.author}</span>
          </p>

          <p>
            <span className="font-semibold text-gray-300">Category:</span>
            <span className="font-serif text-gray-300"> {book.category}</span>
          </p>

          <p>
            <span className="font-semibold text-gray-300">Description:</span>
            <span className="font-serif text-gray-300"> {book.description}</span>
          </p>

          <p>
            <span className="font-semibold text-gray-300">Rating:</span>
            <span className="font-serif text-gray-300"> {book.rating}/5</span>
          </p>
        </div>

        <Link
          to={`/books/all`}
          className="inline-block mt-6 text-indigo-400 hover:text-indigo-300 hover:underline transition duration-300"
        >
          ← Back to Browse
        </Link>
      </div>
    </div>
  );
};

export default BookDetailsPage;

