import { useDispatch, useSelector } from "react-redux";
import MapComponent from "../components/MapComponent";
import SearchComponent from "../components/SearchComponent";
import { useEffect } from "react";
import { getDataMaps } from "../states/maps/action";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";

function Maps() {
  const dispatch = useDispatch();
  const maps = useSelector((state) => state.maps);
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(getDataMaps());
  }, [dispatch]);

  const handleBackClick = () => {
    navigate("/");
  };

  const headerStyle = {
    position: "absolute",
    top: "20px",
    left: "20px", // Posisi ke kiri
    zIndex: 1000,
    width: "auto", // Sesuaikan dengan konten
  };

  return (
    <div
      style={{
        position: "fixed",
        top: 0,
        left: 0,
        width: "100%",
        height: "100%",
        zIndex: 1,
      }}
    >
      {/* Search Component di kiri atas */}
      <div style={headerStyle}>
        <SearchComponent />
      </div>

      {/* MapComponent mengisi seluruh layar */}
      <MapComponent mentors={maps} />
    </div>
  );
}

export default Maps;
