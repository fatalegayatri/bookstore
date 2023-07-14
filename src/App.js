import React from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
import { useState } from "react";
const App = () => {
  const [books, setBooks] = useState([]);
  const newbook = [...books];
  const HandleBookCreate = (book) => {
    console.log(book);
  };
  return (
    <>
      <CreateBook onCreate={HandleBookCreate} />
    </>
  );
};

export default App;
