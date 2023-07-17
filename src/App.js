import React from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import { useEffect } from "react";
import useBookContext from "./Hooks/Custom-hook-book";
const App = () => {
  const { fetchBooks } = useBookContext();
  console.log(fetchBooks);
  useEffect(() => {
    fetchBooks();
  }, []);

  return (
    <>
      <CreateBook />

      <>
        <BookList />
      </>
    </>
  );
};

export default App;
