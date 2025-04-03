import { useParams } from "react-router-dom";
import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteDetails = () => {
  const { id } = useParams();
  const { notes } = useContext(NotesContext);
  const note = notes.find((n) => n.id === parseInt(id));

  return note ? <div><h2>{note.title}</h2><p>{note.body}</p></div> : <p>Note not found</p>;
};

export default NoteDetails;
