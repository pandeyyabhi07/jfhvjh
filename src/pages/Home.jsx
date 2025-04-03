import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";
import NoteCard from "../components/NoteCard";

const Home = () => {
  const { notes, loading } = useContext(NotesContext);

  return (
    <div className="p-4">
      <section className="text-center p-6 bg-blue-300 dark:bg-blue-900 text-white rounded-lg">
        <h2 className="text-2xl font-bold">Welcome to Notes App</h2>
        <p>Store and manage your notes easily.</p>
      </section>
      <h2 className="mt-6 text-xl font-bold">All Notes</h2>
      {loading ? <p>Loading...</p> : notes.map((note) => <NoteCard key={note.id} note={note} />)}
    </div>
  );
};

export default Home;
