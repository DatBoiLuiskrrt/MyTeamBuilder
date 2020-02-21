import React, { useState } from "react";

const NoteForm = props => {
  // console.log("this is our props",props);
  const [note, setNote] = useState({
    title: "",
    body: "",
    email:"",

  });
  // onChange handler to control inputs
  const handleChanges = e => {
    setNote({ ...note, [e.target.name]: e.target.value });
    console.log(note);
  };
  const submitForm = e => {
    e.preventDefault();
    props.addNewNote(note);
    setNote({ title: "", body: "", email:""});
  };
  return (
    <form onSubmit={submitForm}>

      <label htmlFor="title">Nombre de el Sicario</label>
      <input
        id="title"
        type="text"
        name="title"
        onChange={handleChanges}
        placeholder="title"
        value={note.ocupacion}
      />

      <br/>

      <label htmlFor="note">Porque quiere ser miembro </label>
      <textarea
        id="note"
        name="body"
        placeholder="Ex: Pues porque soy la mera verga compa"
        onChange={handleChanges}
        value={note.body}
      />

      <br/>

      <label htmlFor="email">Ponga aqui su correo electronico</label>
      <input 
      name="email"
      id="email"
      type="email"
      onChange={handleChanges}
      placeholder="Ex: ElVerguillas@gmail.com"
      value={note.email}
      />
      <button type="submit">Add Member</button>
    </form>
  );
};

export default NoteForm;
