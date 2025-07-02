import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { searchMentorsInMaps } from "../states/maps/action";

const SearchComponent = () => {
  const dispatch = useDispatch();
  const [selectedType, setSelectedType] = useState("");
  const [latitude, setLatitude] = useState("");
  const [longitude, setLongitude] = useState("");
  const [radius, setRadius] = useState("");

  const fireTypes = [
    "Kebakaran Lahan",
    "Kebakaran Hutan",
    "Kebakaran Gambut",
    "Kebakaran Campuran",
  ];

  const handleSearch = async (e) => {
    e.preventDefault();
    dispatch(
      searchMentorsInMaps({ search: selectedType, latitude, longitude, radius })
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
    padding: "10px",
    borderRadius: "5px",
    boxShadow: "0 0 15px rgba(0, 0, 0, 0.2)",
  };

  return (
    <div style={searchBoxStyle}>
      <form id="search-form" onSubmit={handleSearch}>
        <div className="input-group">
          <select
            className="form-control"
            name="search"
            value={selectedType}
            onChange={(e) => setSelectedType(e.target.value)}
          >
            <option value="">Pilih Jenis Kebakaran</option>
            {fireTypes.map((type, index) => (
              <option key={index} value={type}>
                {type}
              </option>
            ))}
          </select>
          <input type="hidden" name="latitude" value={latitude} />
          <input type="hidden" name="longitude" value={longitude} />
          <input
            type="number"
            className="form-control"
            name="radius"
            value={radius}
            onChange={(e) => setRadius(e.target.value)}
            placeholder="Radius (km)"
          />
          <button className="btn btn-primary" type="submit">
            <i className="fas fa-search"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default SearchComponent;
