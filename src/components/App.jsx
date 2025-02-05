import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import CreateArea from "./CreateArea";
import { v4 as uuid } from "uuid";

function App() {
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [notes, setNotes] = useState([]);

  function addTitle(event) {
    const newTitle = event.target.value;
    setTitle(newTitle);
  }

  function addTextArea(event) {
    const newText = event.target.value;
    setText(newText);
  }

  function addNote(event) {
    event.preventDefault();
    const newNote = { id: uuid(), title: title, content: text };

    setNotes((preValues) => {
      return [...preValues, newNote];
    });
    setTitle("");
    setText("");
  }

  function deleteNote(id) {
    setNotes((prevItems) => {
      return prevItems.filter((item) => {
        return item.id !== id;
      });
    });
  }

  return (
    <div>
      <Header />
      <CreateArea
        title={title}
        text={text}
        addTitle={addTitle}
        addTextArea={addTextArea}
        addNote={addNote}
      />
      {notes.map((note) => (
        <Note
          id={note.id}
          key={note.id}
          title={note.title}
          content={note.content}
          delete={deleteNote}
        />
      ))}
      <Footer />
    </div>
  );
}

export default App;
