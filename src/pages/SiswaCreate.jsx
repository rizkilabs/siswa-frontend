import { useState } from "react";
import { createSiswa } from "../services/siswaApi";
import { useNavigate } from "react-router-dom";

function SiswaCreate() {
  const navigate = useNavigate();

  const [form, setForm] = useState({
    kodeSiswa: "",
    namaSiswa: "",
    alamatSiswa: "",
    tglSiswa: "",
    jurusanSiswa: "",
  });

  // Handle input change
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await createSiswa(form);
      alert("Siswa berhasil ditambahkan!");
      navigate("/siswa"); // back to list
    } catch (err) {
      console.error("Error creating siswa:", err);
      alert("Gagal menambahkan siswa");
    }
  };

  return (
    <div>
      <h2 className="mb-3">Tambah Siswa</h2>

      <form onSubmit={handleSubmit} className="card p-4 shadow-sm card-soft">
        <div className="mb-3">
          <label className="form-label fw-bold">Kode Siswa</label>
          <input
            type="text"
            name="kodeSiswa"
            className="form-control"
            value={form.kodeSiswa}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Nama Siswa</label>
          <input
            type="text"
            name="namaSiswa"
            className="form-control"
            value={form.namaSiswa}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Alamat Siswa</label>
          <textarea
            name="alamatSiswa"
            className="form-control"
            value={form.alamatSiswa}
            onChange={handleChange}
          ></textarea>
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Tanggal Siswa</label>
          <input
            type="date"
            name="tglSiswa"
            className="form-control"
            value={form.tglSiswa}
            onChange={handleChange}
            required
          />
        </div>

        <div className="mb-3">
          <label className="form-label fw-bold">Jurusan Siswa</label>
          <input
            type="text"
            name="jurusanSiswa"
            className="form-control"
            value={form.jurusanSiswa}
            onChange={handleChange}
            required
          />
        </div>

        <button className="btn btn-primary">Simpan</button>
      </form>
    </div>
  );
}

export default SiswaCreate;
