import React from 'react';
import { describe, it, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import ContactComponent from './ContactComponent';

describe('ContactComponent', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render the component', () => {
        render(<ContactComponent />);
        
        expect(screen.getByText('Tentang Kami')).toBeInTheDocument();

        expect(screen.getByText(/Tim kami memilih project dengan judul/)).toBeInTheDocument();

        const contactLink = screen.getByText('Hubungi Kami');
        expect(contactLink).toBeInTheDocument();
    });
});
