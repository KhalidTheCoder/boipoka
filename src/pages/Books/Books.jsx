import React, { useEffect, useState } from "react";
import Book from "../Book/Book";

const Books = () => {
  const [allbooks, setAllBooks] = useState([]);
  useEffect(() => {
    fetch("booksData.json")
      .then((res) => res.json())
      .then((data) => {
        setAllBooks(data);
      });
  }, []);
  return (
    <div>
      <h1 className="text-3xl text-center font-bold p-6">Books</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 mb-5">
        {allbooks.map((singleBook) => (
          <Book key={singleBook.bookId} singleBook={singleBook}></Book>
        ))}
      </div>
    </div>
  );
};

export default Books;
