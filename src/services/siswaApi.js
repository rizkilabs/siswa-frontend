import axios from "axios";

// Base URL for backend API
const api = axios.create({
  baseURL: "http://localhost:3000/api", // change this if your backend URL is different
});

// Create siswa
export const createSiswa = async (payload) => {
  // payload = { kodeSiswa, namaSiswa, alamatSiswa, tglSiswa, jurusanSiswa }
  const res = await api.post("/siswa", payload);
  return res.data;
};

// Get all siswa
export const getAllSiswa = async () => {
  const res = await api.get("/siswa");
  return res.data;
};

// Get siswa by ID
export const getSiswaById = async (id) => {
  const res = await api.get(`/siswa/${id}`);
  return res.data;
};

// Update siswa
export const updateSiswa = async (id, payload) => {
  const res = await api.put(`/siswa/${id}`, payload);
  return res.data;
};

// Delete siswa
export const deleteSiswa = async (id) => {
  const res = await api.delete(`/siswa/${id}`);
  return res.data;
};
