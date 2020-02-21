import React from "react";

const Notes = props => {
    console.log('this is props in notes.js', props.notes);
  return (
    <div className="note-list">
      {props.notes.map(note => (
        <div key={note.id}>
          <h2>{note.title}</h2>
          <p>Porque quiero ser miembro: {note.body}</p>
          <p>Email: {note.email}</p>
          
        </div>
      ))}
    </div>
  );
};

export default Notes;
