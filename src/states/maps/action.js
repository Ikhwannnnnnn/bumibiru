import { hideLoading, showLoading } from "react-redux-loading-bar";
import api from "../../utils/api";

export const ActionType = {
  GET_DATA_MAPS: "GET_DATA_MAPS",
  SEARCH_MENTORS_IN_MAPS: "SEARCH_MENTORS_IN_MAPS",
};

export function getDataMapsActionCreated(data) {
  return {
    type: ActionType.GET_DATA_MAPS,
    payload: {
      data,
    },
  };
}

export function searchMentorsInMapsActionCreated(data) {
  return {
    type: ActionType.SEARCH_MENTORS_IN_MAPS,
    payload: {
      data,
    },
  };
}

export const getDataMaps = () => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const data = await api.getDataMaps();
      dispatch(getDataMapsActionCreated(data));
    } catch (error) {
      alert("Ups, something went wrong");
      console.log(error);
    }
    dispatch(hideLoading());
  };
};

export const searchMentorsInMaps = ({
  search,
  latitude,
  longitude,
  radius,
}) => {
  return async (dispatch) => {
    dispatch(showLoading());
    try {
      const data = await api.searchMentorsInMaps({
        search,
        latitude,
        longitude,
        radius,
      });
      console.log("Hasil pencarian:", data);
      dispatch(searchMentorsInMapsActionCreated(data));
    } catch (error) {
      alert("Ups, something went wrong");
      console.log(error);
    }
    dispatch(hideLoading());
  };
};
