# 📚 Online Library System

A React application that simulates an online library system. Users can browse, search, view, and add books categorized into various genres. Built using React, React Router, and Redux Toolkit.

---

## 🔧 Features

- 🏠 **Home Page** with welcome message, book categories, and popular books
- 📚 **Browse Books** by category or search by title/author
- 🔍 **Book Details** page with dynamic routing
- ➕ **Add Book Form** with validation and Redux state management
- ❌ **404 Not Found Page** with redirection link

---

## 🛠️ Technologies Used

- React + Vite
- React Router DOM
- Redux Toolkit + React-Redux
- Tailwind CSS (optional for styling)
- UUID for generating unique book IDs

---

## 🚀 Getting Started

### 1. Clone the Repository

```bash
git clone https://github.com/YOUR_USERNAME/online-library-system.git
cd online-library-system
```
### 2. Install Dependencies

```bash
npm install
```

### 3. Run the Application

```bash
npm run dev
```
The app will run at http://localhost:5173

---


## Project Folder Structure

```bash
src/
├── components/
│   ├── Navbar.js
│   ├── BookCard.js
│   ├── SearchBar.js
├── pages/
│   ├── HomePage.js
│   ├── BrowseBooksPage.js
│   ├── BookDetailsPage.js
│   ├── AddBookPage.js
│   ├── NotFoundPage.js
├── redux/
│   ├── store.js
│   ├── bookSlice.js
├── data/
│   └── dummyData.js
├── App.js
├── index.js
```
---

### Author

Sattwik Manna