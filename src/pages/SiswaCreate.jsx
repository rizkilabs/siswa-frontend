import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { createSiswa } from "../services/siswaApi";
import toast from "react-hot-toast";

export default function SiswaCreate() {
  const navigate = useNavigate();
  const [form, setForm] = useState({
    kodeSiswa: "",
    namaSiswa: "",
    alamatSiswa: "",
    tglSiswa: "",
    jurusanSiswa: "",
  });

  const [loading, setLoading] = useState(false);

  // handle input change
  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // handle submit
  const onSubmit = async (e) => {
    e.preventDefault();

    // simple validation
    if (
      !form.kodeSiswa ||
      !form.namaSiswa ||
      !form.tglSiswa ||
      !form.jurusanSiswa
    ) {
      toast.error("Semua field wajib diisi");
      return;
    }

    try {
      setLoading(true);
      await createSiswa(form);
      toast.success("Data berhasil ditambahkan");
      navigate("/siswa");
    } catch (err) {
      toast.error("Gagal menambahkan data");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mt-4">
      <h2 className="page-title">Tambah Data Siswa</h2>

      {/* wrapper card premium */}
      <div className="card card-soft p-4 mt-3">
        <form onSubmit={onSubmit}>
          {/* kode siswa */}
          <div className="mb-3">
            <label className="form-label">Kode Siswa</label>
            <input
              type="text"
              className="form-control"
              name="kodeSiswa"
              value={form.kodeSiswa}
              onChange={onChange}
              placeholder="contoh: S001"
            />
          </div>

          {/* nama siswa */}
          <div className="mb-3">
            <label className="form-label">Nama Siswa</label>
            <input
              type="text"
              className="form-control"
              name="namaSiswa"
              value={form.namaSiswa}
              onChange={onChange}
              placeholder="Masukkan nama"
            />
          </div>

          {/* alamat */}
          <div className="mb-3">
            <label className="form-label">Alamat</label>
            <textarea
              className="form-control"
              rows="3"
              name="alamatSiswa"
              value={form.alamatSiswa}
              onChange={onChange}
              placeholder="Masukkan alamat"
            ></textarea>
          </div>

          {/* tanggal */}
          <div className="mb-3">
            <label className="form-label">Tanggal</label>
            <input
              type="date"
              className="form-control"
              name="tglSiswa"
              value={form.tglSiswa}
              onChange={onChange}
            />
          </div>

          {/* jurusan */}
          <div className="mb-3">
            <label className="form-label">Jurusan</label>
            <select
              className="form-select"
              name="jurusanSiswa"
              value={form.jurusanSiswa}
              onChange={onChange}
            >
              <option value="">-- pilih jurusan --</option>
              <option value="RPL">RPL</option>
              <option value="TKJ">TKJ</option>
              <option value="MM">MM</option>
              <option value="AKL">AKL</option>
            </select>
          </div>

          {/* tombol submit */}
          <button type="submit" className="btn btn-primary" disabled={loading}>
            {loading ? "Menyimpan..." : "Simpan"}
          </button>
        </form>
      </div>
    </div>
  );
}
