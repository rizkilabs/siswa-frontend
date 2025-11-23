import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getSiswaById, updateSiswa } from "../services/siswaApi";
import toast from "react-hot-toast";

export default function SiswaEdit() {
  const navigate = useNavigate();
  const { id } = useParams(); // get kodeSiswa from URL

  const [form, setForm] = useState({
    kodeSiswa: "",
    namaSiswa: "",
    alamatSiswa: "",
    tglSiswa: "",
    jurusanSiswa: "",
  });

  const [loading, setLoading] = useState(true);
  const [updateLoading, setUpdateLoading] = useState(false);

  // fetch data saat halaman dibuka
  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getSiswaById(id);
        setForm(res.data); // fill form with existing data
      } catch (err) {
        toast.error("Gagal memuat data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  const onChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const onSubmit = async (e) => {
    e.preventDefault();

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
      setUpdateLoading(true);
      await updateSiswa(id, form);
      toast.success("Data berhasil diperbarui");
      navigate("/siswa");
    } catch (err) {
      toast.error("Gagal memperbarui data");
    } finally {
      setUpdateLoading(false);
    }
  };

  if (loading) return <div className="container mt-4">Loading data...</div>;

  return (
    <div className="container mt-4">
      <h2 className="page-title">Edit Data Siswa</h2>

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
              disabled // kodeSiswa tidak boleh diubah
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

          {/* tombol update */}
          <button
            type="submit"
            className="btn btn-warning"
            disabled={updateLoading}
          >
            {updateLoading ? "Mengupdate..." : "Update"}
          </button>
        </form>
      </div>
    </div>
  );
}
