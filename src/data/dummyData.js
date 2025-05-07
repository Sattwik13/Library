
const dummyBooks = [
  {
    id: 1,
    title: "Dune",
    author: "Frank Herbert",
    category: "Sci-Fi",
    description: "A science fiction saga set in a distant desert planet of Arrakis.",
    rating: 4.8,
  },  
  {
    id: 2,
    title: "1984",
    author: "George Orwell",
    category: "Fiction",
    description: "A dystopian novel presenting a future under total surveillance.",
    rating: 4.6,
  },
  {
    id: 3,
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    category: "Fantasy",
    description: "Bilbo Baggins embarks on an adventure to reclaim a lost treasure.",
    rating: 4.9,
  },
  {
    id: 4,
    title: "Sapiens",
    author: "Yuval Noah Harari",
    category: "Non-Fiction",
    description: "A brief history of humankind, evolution, and cultural development.",
    rating: 4.7,
  },
  {
    id: 5,
    title: "The Martian",
    author: "Andy Weir",
    category: "Sci-Fi",
    description: "An astronaut stranded on Mars fights to survive using science.",
    rating: 4.5,
  },
  {
    id: 6,
    title: "Sherlock Holmes",
    author: "Arthur Conan Doyle",
    category: "Mystery",
    description: "A collection of detective stories starring Sherlock Holmes.",
    rating: 4.4,
  },
  {
    id: 7,
    title: "Becoming",
    author: "Michelle Obama",
    category: "Non-Fiction",
    description: "The memoir of the former First Lady of the United States.",
    rating: 4.9,
  },
  {
    id: 8,
    title: "The Name of the Wind",
    author: "Patrick Rothfuss",
    category: "Fantasy",
    description: "A coming-of-age story of a gifted young man in a mythical world.",
    rating: 4.7,
  },
  {
    id: 9,
    title: "Brave New World",
    author: "Aldous Huxley",
    category: "Fiction",
    description: "A futuristic society built on conditioning and conformity.",
    rating: 4.3,
  },
  {
    id: 10,
    title: "The Silent Patient",
    author: "Alex Michaelides",
    category: "Mystery",
    description: "A psychological thriller about a woman's act of violence.",
    rating: 4.6,
  },
  {
    id: 11,
    title: "Project Hail Mary",
    author: "Andy Weir",
    category: "Sci-Fi",
    description: "A man wakes up alone in space with no memory and a mission to save Earth.",
    rating: 4.8,
  },

  {
    id: 12,
    title: "1984",
    author: "John Smith",
    category: "Mystery",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.83,
  },
  {
    id: 13,
    title: "The Great Gatsby",
    author: "Michael Johnson",
    category: "Mystery",
    description: "A heartwarming story of love and friendship",
    rating: 4.74,
  },
  {
    id: 14,
    title: "1984",
    author: "David Wilson",
    category: "Mystery",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.52,
  },
  {
    id: 15,
    title: "To Kill a Mockingbird",
    author: "David Wilson",
    category: "Non-Fiction",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.07,
  },
  {
    id: 16,
    title: "To Kill a Mockingbird",
    author: "David Wilson",
    category: "Mystery",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.54,
  },
  {
    id: 17,
    title: "To Kill a Mockingbird",
    author: "Emily Brown",
    category: "Romance",
    description: "A heartwarming story of love and friendship",
    rating: 4.72,
  },
  {
    id: 18,
    title: "Pride and Prejudice",
    author: "Sarah Davis",
    category: "Biography",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.45,
  },
  {
    id: 19,
    title: "The Catcher in the Rye",
    author: "David Wilson",
    category: "Fiction",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.81,
  },
  {
    id: 20,
    title: "To Kill a Mockingbird",
    author: "David Wilson",
    category: "Science Fiction",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.96,
  },
  {
    id: 21,
    title: "1984",
    author: "David Wilson",
    category: "Self-Help",
    description: "A heartwarming story of love and friendship",
    rating: 4.57,
  },
  {
    id: 22,
    title: "The Catcher in the Rye",
    author: "Emily Brown",
    category: "Non-Fiction",
    description: "A heartwarming story of love and friendship",
    rating: 4.79
  },
  {
    id: 23,
    title: "1984",
    author: "Emily Brown",
    category: "Sci-Fi",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.41
  },
  {
    id: 24,
    title: "Pride and Prejudice",
    author: "Emily Brown",
    category: "Fantasy",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.56
  },
  {
    id: 25,
    title: "The Catcher in the Rye",
    author: "Emily Brown",
    category: "Non-Fiction",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.52
  },
  {
    id: 26,
    title: "1984",
    author: "Sarah Davis",
    category: "Fiction",
    description: "A heartwarming story of love and friendship",
    rating: 4.43
  },
  {
    id: 27,
    title: "To Kill a Mockingbird",
    author: "John Smith",
    category: "Non-Fiction",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.7
  },
  {
    id: 28,
    title: "To Kill a Mockingbird",
    author: "Emily Brown",
    category: "Non-Fiction",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.36
  },
  {
    id: 29,
    title: "To Kill a Mockingbird",
    author: "John Smith",
    category: "Mystery",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.07
  },
  {
    id: 30,
    title: "The Great Gatsby",
    author: "Michael Johnson",
    category: "Fiction",
    description: "A heartwarming story of love and friendship",
    rating: 4.06
  },
  {
    id: 31,
    title: "1984",
    author: "John Smith",
    category: "Non-Fiction",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.87
  },
  {
    id: 32,
    title: "1984",
    author: "John Smith",
    category: "Mystery",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.08
  },
  {
    id: 33,
    title: "The Great Gatsby",
    author: "Michael Johnson",
    category: "Fantasy",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.44
  },
  {
    id: 34,
    title: "The Great Gatsby",
    author: "Michael Johnson",
    category: "Mystery",
    description: "A heartwarming story of love and friendship",
    rating: 4.83
  },
  {
    id: 35,
    title: "To Kill a Mockingbird",
    author: "Michael Johnson",
    category: "Non-Fiction",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.13
  },
  {
    id: 36,
    title: "1984",
    author: "Sarah Davis",
    category: "Sci-Fi",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.13
  },
  {
    id: 37,
    title: "To Kill a Mockingbird",
    author: "Sarah Davis",
    category: "Fantasy",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.1
  },
  {
    id: 38,
    title: "The Great Gatsby",
    author: "Sarah Davis",
    category: "Sci-Fi",
    description: "A heartwarming story of love and friendship",
    rating: 4.19
  },
  {
    id: 39,
    title: "1984",
    author: "Sarah Davis",
    category: "Sci-Fi",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.64
  },
  {
    id: 40,
    title: "To Kill a Mockingbird",
    author: "Michael Johnson",
    category: "Fiction",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.79
  },
  {
    id: 41,
    title: "The Great Gatsby",
    author: "Emily Brown",
    category: "Fantasy",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.91
  },
  {
    id: 42,
    title: "The Great Gatsby",
    author: "Michael Johnson",
    category: "Mystery",
    description: "A heartwarming story of love and friendship",
    rating: 4.91
  },
  {
    id: 43,
    title: "1984",
    author: "David Wilson",
    category: "Fantasy",
    description: "An epic fantasy adventure filled with magic and intrigue",
    rating: 4.07
  },
  {
    id: 44,
    title: "The Catcher in the Rye",
    author: "Michael Johnson",
    category: "Sci-Fi",
    description: "A thought-provoking exploration of the human condition",
    rating: 4.63
  },
  {
    id: 45,
    title: "The Great Gatsby",
    author: "Sarah Davis",
    category: "Mystery",
    description: "A gripping thriller that will keep you on the edge of your seat",
    rating: 4.49
  },
  {
    id: 46,
    title: "The Catcher in the Rye",
    author: "Emily Brown",
    category: "Mystery",
    description: "A heartwarming story of love and friendship",
    rating: 4.53
  }
];

export default dummyBooks;
