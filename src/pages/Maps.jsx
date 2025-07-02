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
    left: "50%",
    transform: "translateX(-50%)",
    zIndex: 1000,
    display: "flex",
    alignItems: "center",
    width: "90%",
    justifyContent: "space-between",
  };

  const buttonStyle = {
    display: "flex",
    alignItems: "center",
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
      <div style={headerStyle}>
        <Button variant="danger" onClick={handleBackClick} style={buttonStyle}>
          <FaArrowLeft style={{ marginRight: "5px" }} /> Kembali
        </Button>
        <SearchComponent />
        <div style={{ width: "10%" }}></div>
      </div>
      <MapComponent mentors={maps} />
    </div>
  );
}

export default Maps;
