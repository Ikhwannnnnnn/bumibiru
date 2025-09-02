import React from 'react';
import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import OurMentorComponent from './OurMentorComponent';
import { mentorItems } from '../data/Data';

describe('OurMentorComponent', () => {
    it('should render the component and display mentor items', () => {
        render(<OurMentorComponent />);
        
        expect(screen.getByText('Mentor Kami')).toBeInTheDocument();
        
        mentorItems.forEach(item => {
            expect(screen.getByText(item.title)).toBeInTheDocument();
        });
    });
});
