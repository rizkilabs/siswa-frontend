import { useEffect, useState } from "react";
import { getAllSiswa, deleteSiswa } from "../services/siswaApi";
import { Link } from "react-router-dom";

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
      fetchData(); // refresh table
    } catch (err) {
      console.error("Error deleting siswa:", err);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  if (loading) return <p>Loading...</p>;

  return (
    <div>
      <h2 className="mb-3">Data Siswa</h2>

      <Link to="/siswa/create" className="btn btn-primary mb-3">
        + Tambah Siswa
      </Link>

      <table className="table table-bordered table-striped">
        <thead className="table-dark">
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
          {data.length === 0 ? (
            <tr>
              <td colSpan="6" className="text-center">
                Tidak ada data
              </td>
            </tr>
          ) : (
            data.map((s) => (
              <tr key={s.id}>
                <td>{s.kodeSiswa}</td>
                <td>{s.namaSiswa}</td>
                <td>{s.alamatSiswa}</td>
                <td>{s.tglSiswa}</td>
                <td>{s.jurusanSiswa}</td>
                <td>
                  <Link
                    to={`/siswa/edit/${s.id}`}
                    className="btn btn-sm btn-warning me-2"
                  >
                    Edit
                  </Link>

                  <button
                    onClick={() => handleDelete(s.id)}
                    className="btn btn-sm btn-danger"
                  >
                    Hapus
                  </button>
                </td>
              </tr>
            ))
          )}
        </tbody>
      </table>
    </div>
  );
}

export default SiswaList;
