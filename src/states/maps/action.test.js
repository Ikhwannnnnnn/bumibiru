import { describe, beforeEach, afterEach, it, vi, expect } from 'vitest';
import { hideLoading, showLoading } from 'react-redux-loading-bar';
import api from '../../utils/api';
import { getDataMaps, searchMentorsInMaps, getDataMapsActionCreated, searchMentorsInMapsActionCreated } from './action';

const fakeData = [
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
];

const fakeDataSearch = [
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
    },
    {
        "id": 2,
        "name": "Mentor 2",
        "image": "https://via.placeholder.com/150x150",
        "description": "Mentor 2 description",
        "skills": "Skill 3, Skill 4",
        "phone": "081234567890",
        "cv": "https://via.placeholder.com/150x150",
        "latitude": 0.0,
        "longitude": 0.0,
        "created_at": "2023-01-01T00:00:00.000000Z",
        "updated_at": "2023-01-01T00:00:00.000000Z"
    }
];

const fakeErrorResponse = new Error('Ups, something went wrong');

describe('getDataMaps', () => {
    beforeEach(() => {
        api.__getDataMaps = api.getDataMaps;
        api.__searchMentorsInMaps = api.searchMentorsInMaps;
        window.alert = vi.fn();
    })

    afterEach(() => {
        api.getDataMaps = api.__getDataMaps;
        api.searchMentorsInMaps = api.__searchMentorsInMaps;
        delete api.__getDataMaps;
        window.alert.mockRestore();
    })

    it('should call getDataMaps', async () => {
        api.getDataMaps = () => Promise.resolve(fakeData);
        const dispatch = vi.fn();
        await getDataMaps()(dispatch);
        
        expect(dispatch).toBeCalledWith(showLoading());
        expect(dispatch).toBeCalledWith(getDataMapsActionCreated(fakeData));
        expect(dispatch).toBeCalledWith(hideLoading());
    })

    it('should call getDataMaps with error', async () => {
        api.getDataMaps = () => Promise.reject(fakeErrorResponse);
        const dispatch = vi.fn();

        await getDataMaps()(dispatch);
        
        expect(dispatch).toBeCalledWith(showLoading());
        expect(dispatch).toBeCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    })

    it('should call searchMentorsInMaps and dispatch actions on success', async () => {
        api.searchMentorsInMaps = () => Promise.resolve(fakeDataSearch);

        const dispatch = vi.fn();
        const params = { search: 'mentor', latitude: 0.0, longitude: 0.0, radius: 10 };

        await searchMentorsInMaps(params)(dispatch);

        expect(dispatch).toBeCalledWith(showLoading());
        expect(dispatch).toBeCalledWith(searchMentorsInMapsActionCreated(fakeDataSearch));
        expect(dispatch).toBeCalledWith(hideLoading());
    });

    it('should call searchMentorsInMaps and handle error', async () => {
        api.searchMentorsInMaps = () => Promise.reject(fakeErrorResponse);

        const dispatch = vi.fn();
        const params = { search: 'mentor', latitude: 0.0, longitude: 0.0, radius: 10 };

        await searchMentorsInMaps(params)(dispatch);

        expect(dispatch).toBeCalledWith(showLoading());
        expect(dispatch).toBeCalledWith(hideLoading());
        expect(window.alert).toHaveBeenCalledWith(fakeErrorResponse.message);
    });
})
