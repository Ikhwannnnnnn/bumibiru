import L from "leaflet";
import LocateControl from "leaflet.locatecontrol";

// Attach plugin secara manual ke L.control
L.control.locate = function (opts) {
  return new LocateControl(opts);
};
