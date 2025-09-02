import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchMentorsInMaps } from "../states/maps/action";

const SearchComponent = () => {
  const dispatch = useDispatch();

  // State
  const [selectedType, setSelectedType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState("");
  const [startDate, setStartDate] = useState(""); // Format: YYYY-MM-DD
  const [endDate, setEndDate] = useState("");
  const [errors, setErrors] = useState({});
  const [isSearchOpen, setIsSearchOpen] = useState(false); // Untuk mengontrol tampilan form

  // Daftar jenis kebakaran
  const fireTypes = [
    "Kebakaran Lahan",
    "Kebakaran Hutan",
    "Kebakaran Gambut",
    "Kebakaran Campuran",
  ];

  // Validasi form
  const validateForm = () => {
    const newErrors = {};

    // Validasi rentang tanggal
    if (startDate && endDate) {
      const start = new Date(startDate);
      const end = new Date(endDate);
      if (isNaN(start) || isNaN(end)) {
        newErrors.date = "Format tanggal tidak valid.";
      } else if (end < start) {
        newErrors.date =
          "Tanggal akhir tidak boleh lebih awal dari tanggal mulai.";
      }
    }

    // Validasi radius
    if (radius && (isNaN(radius) || parseFloat(radius) <= 0)) {
      newErrors.radius = "Radius harus berupa angka positif.";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  // Handle pencarian
  const handleSearch = (e) => {
    e.preventDefault();

    if (!validateForm()) return;

    // Kirim ke action — pastikan format YYYY-MM-DD
    dispatch(
      searchMentorsInMaps({
        search: selectedType || "",
        latitude: latitude || "",
        longitude: longitude || "",
        radius: radius ? parseFloat(radius) : "",
        start_date: startDate || "",
        end_date: endDate || "",
      })
    );

    // Opsional: tutup form setelah pencarian
    // setIsSearchOpen(false);
  };

  // Ambil lokasi pengguna
  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setLatitude(position.coords.latitude);
          setLongitude(position.coords.longitude);
        },
        (error) => {
          console.error("Error getting location:", error);
        }
      );
    }
  }, []);

  // Gaya untuk tombol toggle pencarian
  const toggleButtonStyle = {
    position: "absolute",
    top: "10px",
    left: "10px",
    zIndex: 1000,
    background: "#128C7E",
    color: "white",
    border: "none",
    borderRadius: "8px",
    padding: "10px 15px",
    cursor: "pointer",
    fontSize: "14px",
    fontWeight: "bold",
    display: "flex",
    alignItems: "center",
    gap: "8px",
    boxShadow: "0 0 10px rgba(0,0,0,0.2)",
  };

  // Gaya kotak pencarian — muncul saat dibuka
  const searchBoxStyle = {
    position: "absolute",
    top: "60px", // Di bawah tombol toggle
    left: "10px",
    zIndex: 1000,
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "400px",
    width: "300px",
    fontFamily: "Arial, sans-serif",
  };

  return (
    <>
      {/* Tombol untuk membuka form pencarian */}
      <button style={toggleButtonStyle} onClick={() => setIsSearchOpen(!isSearchOpen)}>
        <i className="fas fa-search"></i> {isSearchOpen ? "Tutup" : "Cari"}
      </button>

      {/* Form pencarian — hanya muncul jika isSearchOpen = true */}
      {isSearchOpen && (
        <div style={searchBoxStyle}>
          <form onSubmit={handleSearch}>
            {/* Header dengan tombol close */}
            <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: "10px" }}>
              <h6 style={{ margin: 0, fontWeight: "bold" }}>Pencarian</h6>
              <button
                type="button"
                onClick={() => setIsSearchOpen(false)}
                style={{
                  background: "#f0f0f0",
                  border: "none",
                  borderRadius: "50%",
                  width: "24px",
                  height: "24px",
                  cursor: "pointer",
                  fontSize: "14px",
                }}
                aria-label="Tutup"
              >
                ×
              </button>
            </div>

            {/* Pilih Jenis Kebakaran */}
            <div className="input-group mb-2">
              <select
                className="form-control"
                value={selectedType}
                onChange={(e) => setSelectedType(e.target.value)}
                aria-label="Pilih jenis kebakaran"
              >
                <option value="">Pilih Jenis Kebakaran (opsional)</option>
                {fireTypes.map((type, index) => (
                  <option key={index} value={type}>
                    {type}
                  </option>
                ))}
              </select>
            </div>

            {/* Radius */}
            <div className="input-group mb-2">
              <input
                type="number"
                className="form-control"
                value={radius}
                onChange={(e) => setRadius(e.target.value)}
                placeholder="Radius (km) - opsional"
                min="0"
                step="0.1"
                aria-label="Radius dalam km"
              />
              {errors.radius && (
                <div className="text-danger small mt-1">{errors.radius}</div>
              )}
            </div>

            {/* Rentang Tanggal */}
            <div className="input-group mb-2 d-flex">
              <input
                type="date"
                className="form-control"
                value={startDate}
                onChange={(e) => setStartDate(e.target.value)}
                max={endDate || ""}
                placeholder="YYYY-MM-DD"
                aria-label="Tanggal mulai"
              />
              <span className="mx-1 d-flex align-items-center">sampai</span>
              <input
                type="date"
                className="form-control"
                value={endDate}
                onChange={(e) => setEndDate(e.target.value)}
                min={startDate || ""}
                placeholder="YYYY-MM-DD"
                aria-label="Tanggal akhir"
              />
            </div>
            {errors.date && (
              <div className="text-danger small mb-2 text-center">
                {errors.date}
              </div>
            )}

            {/* Input tersembunyi */}
            <input type="hidden" name="latitude" value={latitude} />
            <input type="hidden" name="longitude" value={longitude} />
            <input type="hidden" name="start_date" value={startDate} />
            <input type="hidden" name="end_date" value={endDate} />

            {/* Tombol Cari */}
            <div className="input-group mt-3">
              <button className="btn btn-primary w-100" type="submit">
                <i className="fas fa-search"></i> Cari
              </button>
            </div>
          </form>
        </div>
      )}
    </>
  );
};

export default SearchComponent;