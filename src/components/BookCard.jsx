import { Link } from "react-router-dom";

const BookCard = ({ book }) => {
  return (
    <div className="bg-gray-800 border border-gray-700 rounded-lg shadow hover:shadow-lg transition duration-200 p-4 flex flex-col justify-between">
      <div>
        <h3 className="font-mono text-xl font-semibold text-gray-100 mb-1">
          {book.title}
        </h3>
        <p className="text-sm text-gray-400 mb-2">
          by {book.author}
        </p>
        <p className="font-medium text-sm text-gray-300 line-clamp-3">
          {book.description}
        </p>
      </div>
      <Link
        to={`/book/${book.id}`}
        className="mt-4 text-indigo-400 hover:underline text-sm font-medium self-start"
      >
        View Details →
      </Link>
    </div>
  );
};

export default BookCard;

