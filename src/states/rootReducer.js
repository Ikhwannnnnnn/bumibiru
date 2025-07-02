import { loadingBarReducer } from "react-redux-loading-bar";
import mapsReducer from "./maps/reducer";

export default function rootReducer(state = {}, action = {}) {
    return {
        loadingBar: loadingBarReducer(state.loadingBar, action),
        maps: mapsReducer(state.maps, action)
    }
}