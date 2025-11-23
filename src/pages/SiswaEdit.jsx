import { useEffect, useState } from "react";
import { getSiswaById, updateSiswa } from "../services/siswaApi";
import { useNavigate, useParams } from "react-router-dom";

function SiswaEdit() {
  const navigate = useNavigate();
  const { id } = useParams(); // get id from URL

  const [form, setForm] = useState({
    kodeSiswa: "",
    namaSiswa: "",
    alamatSiswa: "",
    tglSiswa: "",
    jurusanSiswa: "",
  });

  const [loading, setLoading] = useState(true);

  // Fetch detail siswa
  const fetchDetail = async () => {
    try {
      const res = await getSiswaById(id);
      setForm(res.data);
    } catch (err) {
      console.error("Error fetching detail:", err);
      alert("Gagal mengambil detail siswa");
    } finally {
      setLoading(false);
    }
  };

  // Auto load detail ketika halaman dibuka
  useEffect(() => {
    fetchDetail();
  }, []);

  // Handle input
  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value,
    });
  };

  // Submit Update
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await updateSiswa(id, form);
      alert("Data siswa berhasil diupdate!");
      navigate("/siswa");
    } catch (err) {
      console.error("Error updating siswa:", err);
      alert("Gagal update siswa");
    }
  };

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="mb-3">Edit Siswa</h2>

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

        <button className="btn btn-success">Update</button>
      </form>
    </div>
  );
}

export default SiswaEdit;
