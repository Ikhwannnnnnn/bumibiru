/*
Scenario test for mapsReducer

- mapsReducer function
    - should return initial state when action type is unknown
    - should return new state when action type is GET_DATA_MAPS
    - should return new state when action type is SEARCH_MENTORS_IN_MAPS

*/

import { describe, it, expect } from 'vitest';
import mapsReducer from './reducer';


describe('mapsReducer', () => {
    it('should return initial state when action type is unknown', () => {
        const initialState = [];
        const action = { type: 'UNKNOWN' };

        const nextState = mapsReducer(initialState, action);

        expect(nextState).toEqual(initialState);
    });

    it('should return new state when action type is GET_DATA_MAPS', () => {
        const initialState = [];
        const action = {
            type: 'GET_DATA_MAPS',
            payload: {
                data: [
                    {
                        "id": 1,
                        "name": "Mentor 1",
                        "image": "https://via.placeholder.com/150x150",
                        "description": "Mentor 1 description",
                        "skills": "Skill 1, Skill 2",
                        "phone": "081234567890",
                        "cv": "https://via.placeholder.com/150x150",
                        "latitude": 0.0,
                        "longitude": 0.0,
                        "created_at": "2023-01-01T00:00:00.000000Z",
                        "updated_at": "2023-01-01T00:00:00.000000Z"
                    }
                ]
            }
        };

        const nextState = mapsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.data);
    });
    
    it('should return new state when action type is SEARCH_MENTORS_IN_MAPS', () => {
        const initialState = [];
        const action = {
            type: 'SEARCH_MENTORS_IN_MAPS',
            payload: {
                data: [
                    {
                        "id": 1,
                        "name": "Mentor 1",
                        "image": "https://via.placeholder.com/150x150",
                        "description": "Mentor 1 description",
                        "skills": "Skill 1, Skill 2",
                        "phone": "081234567890",
                        "cv": "https://via.placeholder.com/150x150",
                        "latitude": 0.0,
                        "longitude": 0.0,
                        "created_at": "2023-01-01T00:00:00.000000Z",
                        "updated_at": "2023-01-01T00:00:00.000000Z"
                    }
                ]
            }
        };

        const nextState = mapsReducer(initialState, action);

        expect(nextState).toEqual(action.payload.data);
    });
})