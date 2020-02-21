import React, {useState} from 'react';
import Notes from "../src/Components/Notes"
import NoteForm from "../src/Components/NoteForm";
function App() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      title: "El Pirata de Culiacan",
      body:
        "A mi el Mencho me pela la verga ",
        email: "piratita69@gmail.com",
    }
  ]);
  const addNewNote = note => {
    const newNote = {
      id: Date.now(),
      title: note.title,
      body: note.body,
      email: note.email,
      ocupacion: note.ocupacion
    };
    setNotes([...notes, newNote]);
  };
  return (
    <div className="App">
      <h1>Cartel de Sinaloa</h1>
      <h1>Add a new Member</h1>
      <NoteForm addNewNote={addNewNote} />
      <Notes notes={notes} />
    </div>
  );
}

export default App;
