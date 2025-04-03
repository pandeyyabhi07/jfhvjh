import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { Link } from "react-router-dom";

const NoteCard = ({ note }) => {
  const { deleteNote } = useContext(NotesContext);

  return (
    <div className="p-4 border rounded-lg shadow-md my-4">
      <h3 className="text-lg font-bold">{note.title}</h3>
      <p>{note.body.substring(0, 50)}...</p>
      <div className="mt-2 space-x-2">
        <Link to={`/note/${note.id}`} className="text-blue-500">View</Link>
        <button onClick={() => deleteNote(note.id)} className="text-red-500">Delete</button>
      </div>
    </div>
  );
};

export default NoteCard;
