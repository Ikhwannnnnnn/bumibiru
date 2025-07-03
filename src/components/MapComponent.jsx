import { useEffect, useState, useRef } from "react";
import PropTypes from "prop-types";
import { Modal, Button } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "leaflet-measure/dist/leaflet-measure.css";
import "leaflet-measure";
import "leaflet.heat";

const MapComponent = ({ mentors }) => {
  const [map, setMap] = useState(null);
  const [selectedMentor, setSelectedMentor] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [heatmapVisible, setHeatmapVisible] = useState(false);
  const markersRef = useRef(null);
  const adminLayerRef = useRef(null);
  const sangattaLayerRef = useRef(null);
  const heatmapLayerRef = useRef(null);
  const heatmapOverlayAddedRef = useRef(false);
  const measureControlRef = useRef(null);
  const layerControlRef = useRef(null);
  const overlaysAddedRef = useRef(false);
  const BASE_URL = "http://lapor-bumibiru.web.id";

  useEffect(() => {
    const L = window.L;
    if (!L) {
      console.error("Leaflet belum tersedia, cek script CDN di index.html");
      return;
    }

    const mapInstance = L.map("map", {
      zoomControl: false,
    }).setView([0, 0], 5);

    // Tile Layers (base maps)
    const osm = L.tileLayer(
      "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      {
        attribution: "© OpenStreetMap contributors",
      }
    );
    const satellite = L.tileLayer(
      "https://{s}.google.com/vt/lyrs=s&x={x}&y={y}&z={z}",
      {
        maxZoom: 20,
        subdomains: ["mt0", "mt1", "mt2", "mt3"],
        attribution: "© Google Satellite",
      }
    );
    const penTopoMap = L.tileLayer(
      "https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png",
      {
        maxZoom: 19,
        attribution:
          "Map data: © OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap (CC-BY-SA)",
      }
    );
    const lidarBase = L.tileLayer.wms(
      "https://elevation.nationalmap.gov/arcgis/services/3DEPElevation/ImageServer/WMSServer?",
      {
        layers: "3DEPElevation:Hillshade Gray",
        className: "lidarBase",
      }
    );

    penTopoMap.addTo(mapInstance);

    const baseMaps = {
      OpenStreetMap: osm,
      Satellite: satellite,
      Topographic: penTopoMap,
      "Lidar Base": lidarBase,
    };

    layerControlRef.current = L.control.layers(
      baseMaps,
      {},
      { collapsed: false }
    );
    layerControlRef.current.addTo(mapInstance);

    L.control.zoom({ position: "bottomleft" }).addTo(mapInstance);

    L.control
      .scale({ position: "bottomright", metric: true, imperial: false })
      .addTo(mapInstance);

    if (typeof L.control.fullscreen === "function") {
      L.control
        .fullscreen({
          position: "topright",
          title: "Toggle fullscreen",
          titleCancel: "Exit fullscreen",
        })
        .addTo(mapInstance);
    }

    if (typeof L.control.locate === "function") {
      L.control
        .locate({
          position: "topright",
          strings: { title: "Show me where I am" },
          flyTo: true,
          keepCurrentZoomLevel: false,
        })
        .addTo(mapInstance);
    } else {
      console.warn("Plugin locatecontrol tidak tersedia");
    }

    if (typeof L.control.measure === "function") {
      const measureControl = L.control.measure({
        position: "topleft",
        primaryLengthUnit: "meters",
        secondaryLengthUnit: "kilometers",
        primaryAreaUnit: "sqmeters",
        secondaryAreaUnit: "hectares",
        activeColor: "#db4a29",
        completedColor: "#9b2d14",
      });
      measureControl.addTo(mapInstance);
      measureControlRef.current = measureControl;
    } else {
      console.warn("Plugin leaflet-measure tidak tersedia");
    }

    setMap(mapInstance);

    return () => {
      if (measureControlRef.current) {
        measureControlRef.current.remove();
        measureControlRef.current = null;
      }
      mapInstance.remove();
    };
  }, []);

  useEffect(() => {
    if (map && "geolocation" in navigator) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          const { latitude, longitude } = position.coords;
          map.setView([latitude, longitude], 13);
          window.L.marker([latitude, longitude])
            .addTo(map)
            .bindPopup("Your location")
            .openPopup();
        },
        (error) => {
          console.error("Error getting user location:", error);
        }
      );
    }
  }, [map]);

  useEffect(() => {
    if (!map) return;
    const L = window.L;

    if (markersRef.current) {
      markersRef.current.clearLayers();
      markersRef.current = null;
    }

    const customIcon = L.icon({
      iconUrl: "/icons/custom-marker.svg",
      iconSize: [40, 40],
      iconAnchor: [20, 40],
      popupAnchor: [0, -40],
    });

    const markerClusterGroup = L.markerClusterGroup();

    mentors.forEach((mentor) => {
      const { latitude, longitude, name } = mentor;
      if (!latitude || !longitude || isNaN(latitude) || isNaN(longitude)) {
        console.warn(`Data mentor tidak memiliki koordinat valid: ${name}`);
        return;
      }
      const marker = L.marker([latitude, longitude], { icon: customIcon });
      const popupContent = `
        <div style="min-width:150px;">
          <strong>${name}</strong><br/>
          <button id="btn-popup-${name.replace(
            /\s/g,
            ""
          )}" style="margin-top:5px; cursor:pointer;">
            Detail
          </button>
        </div>`;
      marker.bindPopup(popupContent);
      marker.on("popupopen", () => {
        const btn = document.getElementById(
          `btn-popup-${name.replace(/\s/g, "")}`
        );
        if (btn) {
          btn.onclick = () => {
            setSelectedMentor(mentor);
            setShowModal(true);
          };
        }
      });
      markerClusterGroup.addLayer(marker);
    });

    markerClusterGroup.addTo(map);
    markersRef.current = markerClusterGroup;

    return () => {
      if (markersRef.current) {
        markersRef.current.clearLayers();
        markersRef.current = null;
      }
    };
  }, [map, mentors]);

  useEffect(() => {
    if (!map) return;
    const L = window.L;

    function getColor(Ket_PL) {
      switch (Ket_PL) {
        case "Area Bervegetasi":
          return "#006400";
        case "Area Permukiman":
          return "#8B008B";
        case "Area Terbuka":
          return "#FFFF00";
        case "Lahan Terbuka":
          return "#FFA500";
        case "Tubuh Air":
          return "#FF0000";
        default:
          return "#808080";
      }
    }

    function style(feature) {
      return {
        color: "transparent",
        fillColor: getColor(feature.properties.Ket_PL),
        weight: 0,
        opacity: 0,
        fillOpacity: 0.5,
      };
    }

    const highlightStyle = {
      weight: 0,
      fillOpacity: 0.8,
    };

    function onEachFeature(feature, layer) {
      const name = feature.properties?.Ket_PL || "Wilayah";
      layer.bindPopup(`<strong>${name}</strong>`);
      layer.on({
        mouseover: (e) => {
          const lyr = e.target;
          lyr.setStyle(highlightStyle);
          lyr.bringToFront();
        },
        mouseout: (e) => {
          e.target.setStyle(style(e.target.feature));
        },
        click: (e) => {
          layer.openPopup();
          map.fitBounds(layer.getBounds());
        },
      });
    }

    fetch("https://lapor-bumibiru.web.id/data/Admin_Kota_Sangatta.json")
      .then((res) => res.json())
      .then((adminData) => {
        const adminLayer = L.geoJSON(adminData, {
          style: {
            color: "#FF0000",
            fillColor: "#808080",
            weight: 2,
            opacity: 1,
            fillOpacity: 0.5,
          },
        });

        fetch("http://localhost:5173/data/PL_Sangatta.json")
          .then((res) => res.json())
          .then((plData) => {
            const sangattaLayer = L.geoJSON(plData, {
              style: style,
              onEachFeature: onEachFeature,
            });

            if (layerControlRef.current && !overlaysAddedRef.current) {
              layerControlRef.current.addOverlay(
                adminLayer,
                "Admin Kota Sangatta"
              );
              layerControlRef.current.addOverlay(sangattaLayer, "PL Sangatta");
              overlaysAddedRef.current = true;
            }

            if (!map.hasLayer(adminLayer)) {
              adminLayer.addTo(map);
            }
            if (!map.hasLayer(sangattaLayer)) {
              sangattaLayer.addTo(map);
            }

            adminLayerRef.current = adminLayer;
            sangattaLayerRef.current = sangattaLayer;
          })
          .catch((err) => console.error("Error loading PL_Sangatta:", err));
      })
      .catch((err) => console.error("Error loading Admin_Kota_Sangatta:", err));
  }, [map]);

  useEffect(() => {
    if (!map || !mentors.length) return;
    const L = window.L;

    if (heatmapLayerRef.current) {
      map.removeLayer(heatmapLayerRef.current);
      heatmapLayerRef.current = null;
    }

    const validMentors = mentors.filter(
      (m) =>
        m.latitude &&
        m.longitude &&
        !isNaN(m.latitude) &&
        !isNaN(m.longitude) &&
        Math.abs(m.latitude) <= 90 &&
        Math.abs(m.longitude) <= 180
    );

    if (validMentors.length === 0) {
      console.warn(
        "Tidak ada data mentor dengan koordinat valid untuk heatmap"
      );
      return;
    }

    const heatData = validMentors.map((m) => [m.latitude, m.longitude, 1]);

    const heatmapLayer = L.heatLayer(heatData, {
      radius: 25,
      blur: 15,
      maxZoom: 17,
      minOpacity: 0.5,
      gradient: {
        0.4: "blue",
        0.6: "cyan",
        0.7: "lime",
        0.8: "yellow",
        1.0: "red",
      },
    });

    heatmapLayerRef.current = heatmapLayer;

    if (layerControlRef.current && !heatmapOverlayAddedRef.current) {
      layerControlRef.current.addOverlay(heatmapLayer, "Heatmap Monitor");

      map.on("overlayadd overlayremove", (e) => {
        if (e.name === "Heatmap Mentors") {
          setHeatmapVisible(e.type === "overlayadd");
        }
      });

      heatmapOverlayAddedRef.current = true;
    }

    return () => {
      if (heatmapLayerRef.current) {
        map.removeLayer(heatmapLayerRef.current);
        heatmapLayerRef.current = null;
      }
    };
  }, [map, mentors]);

  useEffect(() => {
    if (!map || !heatmapLayerRef.current) return;

    if (heatmapVisible) {
      map.addLayer(heatmapLayerRef.current);
    } else {
      map.removeLayer(heatmapLayerRef.current);
    }
  }, [heatmapVisible, map]);

  const closeModal = () => setShowModal(false);

  return (
    <>
      <div id="map" style={{ width: "100%", height: "100vh" }}></div>

      {selectedMentor && (
        <Modal show={showModal} onHide={closeModal} centered size="lg">
          <Modal.Header closeButton>
            <Modal.Title style={{ fontSize: "1.5rem", color: "#333" }}>
              Details
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <div className="row">
              <div
                className="col-md-5 text-center"
                style={{ paddingRight: "2rem" }}
              >
                <img
                  src={
                    selectedMentor.image === "img_empty.gif"
                      ? `${BASE_URL}/img/img_empty.gif`
                      : `${BASE_URL}/mentor/img/${selectedMentor.image}`
                  }
                  alt={selectedMentor.name}
                  className="img-fluid"
                  style={{
                    maxHeight: "100%",
                    width: "100%",
                    objectFit: "cover",
                    borderRadius: "5px",
                    marginBottom: "1rem",
                  }}
                />
                <h5 style={{ color: "#333", fontSize: "1.25rem" }}>
                  {selectedMentor.name}
                </h5>
                <p style={{ color: "#666", fontSize: "0.9rem" }}>
                  <a
                    href={`https://www.google.com/maps?q=${selectedMentor.latitude},${selectedMentor.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: "none", color: "#007bff" }}
                  >
                    Alamat
                  </a>
                </p>
              </div>

              <div className="col-md-7" style={{ paddingLeft: "2rem" }}>
                <p
                  style={{ fontSize: "1rem", color: "#444", lineHeight: "1.5" }}
                >
                  {selectedMentor.description}
                </p>
                <div>
                  <strong style={{ fontSize: "1.1rem", color: "#333" }}>
                    Jenis Kebakaran:
                  </strong>
                  <p style={{ fontSize: "0.95rem", color: "#555" }}>
                    {selectedMentor.skills}
                  </p>
                </div>
                <div>
                  <strong style={{ fontSize: "1.1rem", color: "#333" }}>
                    Informasi Kontak:
                  </strong>
                  <p style={{ fontSize: "0.95rem", color: "#555" }}>
                    <a
                      href={`https://wa.me/${selectedMentor.phone}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      style={{ textDecoration: "none", color: "#007bff" }}
                    >
                      {selectedMentor.phone}
                    </a>
                  </p>
                </div>
                <div>
                  <strong style={{ fontSize: "1.1rem", color: "#333" }}>
                    Keterangan Tambahan:
                  </strong>
                  <p style={{ fontSize: "0.95rem", color: "#555" }}>
                    <a
                      href={`${BASE_URL}/mentor/file/${selectedMentor.cv}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="btn btn-outline-primary btn-sm"
                    >
                      Download
                    </a>
                  </p>
                </div>
              </div>
            </div>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={closeModal}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      )}
    </>
  );
};

MapComponent.propTypes = {
  mentors: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      latitude: PropTypes.number,
      longitude: PropTypes.number,
      description: PropTypes.string,
      skills: PropTypes.string,
      phone: PropTypes.string,
      image: PropTypes.string,
      cv: PropTypes.string,
    })
  ).isRequired,
};

export default MapComponent;
