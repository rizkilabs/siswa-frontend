import { useEffect, useState } from "react";
import { getAllSiswa, deleteSiswa } from "../services/siswaApi";
import { Link } from "react-router-dom";
import toast from "react-hot-toast";

function SiswaList() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data
  const fetchData = async () => {
    try {
      const res = await getAllSiswa();
      setData(res.data); // backend lu kirim { data: [...] }
    } catch (err) {
      console.error("Error fetching data:", err);
    } finally {
      setLoading(false);
    }
  };

  // Delete siswa
  const handleDelete = async (id) => {
    const confirmDelete = confirm("Yakin mau hapus?");
    if (!confirmDelete) return;

    try {
      await deleteSiswa(id);
      toast.success("Data berhasil dihapus");
      fetchData(); // refresh table
    } catch (err) {
      toast.error("Gagal menghapus data");
      console.error("Error deleting siswa:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div className="container mt-4">
      <h2 className="page-title">Data Siswa</h2>

      <div className="text-end mb-3">
        <Link to="/siswa/create" className="btn btn-primary">
          Tambah Data
        </Link>
      </div>

      {/* WRAPPER DI SINI */}
      <div className="card card-soft p-3">
        <table className="table table-bordered table-striped table-hover mt-2">
          <thead>
            <tr>
              <th>Kode</th>
              <th>Nama</th>
              <th>Alamat</th>
              <th>Tanggal</th>
              <th>Jurusan</th>
              <th>Aksi</th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr key={item.kodeSiswa}>
                <td>{item.kodeSiswa}</td>
                <td>{item.namaSiswa}</td>
                <td>{item.alamatSiswa}</td>
                <td>{new Date(item.tglSiswa).toLocaleDateString("id-ID")}</td>
                <td>{item.jurusanSiswa}</td>
                <td>
                  <Link
                    to={`/siswa/edit/${item.id}`}
                    className="btn btn-warning btn-sm me-2"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(item.id)}
                    className="btn btn-danger btn-sm"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {/* END WRAPPER */}
    </div>
  );
}

export default SiswaList;
