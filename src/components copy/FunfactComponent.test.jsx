import React from 'react';
import { describe, it, afterEach } from 'vitest';
import { cleanup, render, screen } from '@testing-library/react';
import FunfactComponent from './FunfactComponent';

describe('FunfactComponent', () => {
    afterEach(() => {
        cleanup();
    });

    it('should render the component', () => {
        render(<FunfactComponent />);
         expect(screen.getAllByText('Fun Fact')).toHaveLength(2);
    });

    it('should display fun fact content', () => {
        render(<FunfactComponent />);
        expect(screen.getByText('HTML')).toBeInTheDocument();
        expect(screen.getByText('CSS')).toBeInTheDocument();
    });

    it('should display an image', () => {
        render(<FunfactComponent />);
        const image = screen.getByRole('img');
        expect(image).toBeInTheDocument();
        expect(image).toHaveAttribute('src', '/src/assets/funfact.png');
    });
});
