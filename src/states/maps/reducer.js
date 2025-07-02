import { ActionType } from "./action";

export default function mapsReducer(maps = [], action = {}) {
    switch (action.type) {
        case ActionType.GET_DATA_MAPS:
            return action.payload.data;
        case ActionType.SEARCH_MENTORS_IN_MAPS:
            return action.payload.data;
        default:
            return maps;
    }   
}
