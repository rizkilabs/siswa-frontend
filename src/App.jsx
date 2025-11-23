import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import SiswaList from "./pages/SiswaList";
import SiswaCreate from "./pages/SiswaCreate";
import SiswaEdit from "./pages/SiswaEdit";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />

      <div className="container mt-4">
        <Routes>
          {/* Home */}
          <Route path="/" element={<Home />} />

          {/* Siswa CRUD */}
          <Route path="/siswa" element={<SiswaList />} />
          <Route path="/siswa/create" element={<SiswaCreate />} />
          <Route path="/siswa/edit/:id" element={<SiswaEdit />} />
        </Routes>
      </div>
    </>
  );
}

export default App;
