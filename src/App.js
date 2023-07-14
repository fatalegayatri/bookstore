import React from "react";
import CreateBook from "./components/CreateBook";
import BookList from "./components/BookList";
const App = () => {
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
