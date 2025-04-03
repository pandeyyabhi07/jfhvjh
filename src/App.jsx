import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ThemeProvider } from "./context/ThemeContext";
import { NotesProvider } from "./context/NotesContext";
import Home from "./pages/Home";
import CreateNote from "./pages/CreateNote";
import NoteDetails from "./pages/NoteDetails";
import Navbar from "./components/Navbar";

function App() {
  return (
    <ThemeProvider>
      <NotesProvider>
        <Router>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/create" element={<CreateNote />} />
            <Route path="/note/:id" element={<NoteDetails />} />
          </Routes>
        </Router>
      </NotesProvider>
    </ThemeProvider>
  );
}

export default App;
