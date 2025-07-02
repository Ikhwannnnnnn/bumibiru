import React from 'react';
import { describe, it, afterEach } from 'vitest';
import { cleanup, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Provider } from 'react-redux';
import store from '../states';
import SearchComponent from './SearchComponent';

describe('SearchComponent', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render the component', () => {
        render(
          <Provider store={store}>
            <SearchComponent />
          </Provider>
        );
        expect(screen.getByPlaceholderText('Cari berdasarkan kejadian')).toBeInTheDocument();
    });

    it('should handle search input change', async () => { // Add async keyword
        render(
          <Provider store={store}>
            <SearchComponent />
          </Provider>
        );

        const searchInput = screen.getByPlaceholderText('Cari berdasarkan kejadian');
        userEvent.type(searchInput, 'test');
        
        await waitFor(() => { // Wait for the input value to update
            expect(searchInput).toHaveValue('test');
        });
    });
});
