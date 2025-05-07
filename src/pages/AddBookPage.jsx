import { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { addBook } from "../redux/booksSlice";
import { useNavigate } from "react-router-dom";
import { v4 as uuidv4 } from "uuid";

const AddBookPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [fadeIn, setFadeIn] = useState(false);
    
  useEffect(() => {
    const timeout = setTimeout(() => setFadeIn(true), 10);
    return () => clearTimeout(timeout);
  }, []);

  const [form, setForm] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: ""
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { title, author, category, description, rating } = form;
    if (!title || !author || !category || !description || !rating) {
      return setError("All fields are required.");
    }

    dispatch(addBook({ ...form, id: uuidv4() }));
    navigate(`/books/${category.toLowerCase()}`);
  };

  return (
    <div className={`p-6 max-w-7xl mx-auto min-h-screen border-amber-50 bg-gray-900 text-gray-200${
      fadeIn ? "opacity-100" : "opacity-10"
    }`}>
      <h2 className="text-2xl border-amber-50 text-amber-100 font-bold mb-4">Add a New Book</h2>
      {error && <p className="text-red-500 mb-2">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        {["title", "author", "category", "description", "rating"].map((field) => (
          <input
            key={field}
            name={field}
            placeholder={field.charAt(0).toUpperCase() + field.slice(1)}
            value={form[field]}
            onChange={handleChange}
            className="w-full p-2 border-amber-50 text-amber-50 rounded"
          />
        ))}
        <button type="submit" className="bg-gradient-to-r from-indigo-700 via-purple-600 to-purple-800 text-white px-4 py-2 rounded-lg">
          Add Book
        </button>
      </form>
    </div>
  );
};

export default AddBookPage;
