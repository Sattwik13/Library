import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
import BookCard from "../components/BookCard";
import SearchBar from "../components/SearchBar";

const BrowseBooksPage = () => {
  const { category } = useParams();
  const books = useSelector((state) => state.books.list);
  const [searchTerm, setSearchTerm] = useState("");
  const [fadeIn, setFadeIn] = useState(false);

  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const filteredBooks = books.filter((book) => {
    const matchesCategory =
      category === "all" || book.category.toLowerCase() === category.toLowerCase();
    const matchesSearch =
      book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      book.author.toLowerCase().includes(searchTerm.toLowerCase());

    return matchesCategory && matchesSearch;
  });

  return (
    <div
      className={`p-6 max-w-7xl mx-auto min-h-screen bg-gray-900 text-gray-200 transition-opacity duration-700 ${
        fadeIn ? "opacity-100" : "opacity-10"
      }`}
    >
      <h2 className="text-3xl font-bold text-indigo-400 mb-6 animate-fade-in-down">
        📖 Browse Books
      </h2>

      <div className="mb-6">
        <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      </div>

      {filteredBooks.length > 0 ? (
        <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {filteredBooks.map((book, index) => (
            <div
              key={book.id}
              className="transition-transform duration-300 hover:scale-105 hover:shadow-xl"
              style={{ transitionDelay: `${index * 50}ms` }}
            >
              <BookCard book={book} />
            </div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-400 mt-10">
          No books found matching your search.
        </p>
      )}
    </div>
  );
};

export default BrowseBooksPage;
