import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchMentorsInMaps } from "../states/maps/action";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState("");
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");

  const fireTypes = [
    "Kebakaran Lahan",
    "Kebakaran Hutan",
    "Kebakaran Gambut",
    "Kebakaran Campuran",
  ];

  const handleSearch = async (e) => {
    e.preventDefault();

    // Validasi sederhana: pastikan endDate tidak lebih awal dari startDate
    if (startDate && endDate && new Date(endDate) < new Date(startDate)) {
      alert("Tanggal akhir tidak boleh lebih awal dari tanggal mulai.");
      return;
    }

    // Kirim data pencarian ke action
    dispatch(
      searchMentorsInMaps({
        search: selectedType,
        latitude,
        longitude,
        radius,
        start_date: startDate,
        end_date: endDate,
      })
    );
  };

  useEffect(() => {
    if ("geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition((position) => {
        setLatitude(position.coords.latitude);
        setLongitude(position.coords.longitude);
      });
    }
  }, []);

  const searchBoxStyle = {
    background: "white",
    padding: "15px",
    borderRadius: "8px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
    maxWidth: "600px",
    margin: "10px auto",
  };

  return (
    <div style={searchBoxStyle}>
      <form id="search-form" onSubmit={handleSearch}>
        <div className="input-group mb-2">
          <select
            className="form-control"
            name="search"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
            required
          >
            <option value="">Pilih Jenis Kebakaran</option>
            {fireTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
        </div>

        <div className="input-group mb-2">
          <input
            type="number"
            className="form-control"
            name="radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            placeholder="Radius (km)"
            required
          />
        </div>

        <div className="input-group mb-2">
          <input
            type="date"
            className="form-control"
            name="start_date"
            value={startDate}
            onChange={(e) => setStartDate(e.target.value)}
            placeholder="Tanggal Mulai"
          />
          <input
            type="date"
            className="form-control"
            name="end_date"
            value={endDate}
            onChange={(e) => setEndDate(e.target.value)}
            placeholder="Tanggal Akhir"
          />
        </div>

        {/* Hidden inputs untuk koordinat */}
        <input type="hidden" name="latitude" value={latitude} />
        <input type="hidden" name="longitude" value={longitude} />

        <div className="input-group">
          <button className="btn btn-primary w-100" type="submit">
            <i className="fas fa-search"></i> Cari
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
