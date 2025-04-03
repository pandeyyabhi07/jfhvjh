import { useState, useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import { useNavigate } from "react-router-dom";

const CreateNote = () => {
  const [title, setTitle] = useState("");
  const [body, setBody] = useState("");
  const { addNote } = useContext(NotesContext);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    addNote({ id: Date.now(), title, body });
    navigate("/");
  };

  return (
    <form onSubmit={handleSubmit} className="p-6 space-y-4">
      <h2 className="text-2xl font-bold">Create Note</h2>
      <input type="text" placeholder="Title" value={title} onChange={(e) => setTitle(e.target.value)}
        className="p-2 border rounded w-full" required />
      <textarea placeholder="Body" value={body} onChange={(e) => setBody(e.target.value)}
        className="p-2 border rounded w-full" required />
      <button type="submit" className="p-2 bg-green-500 text-white rounded">Add Note</button>
    </form>
  );
};

export default CreateNote;
