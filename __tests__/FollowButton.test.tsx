// __tests__/FollowButton.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FollowButton from '../app/components/FollowButton.tsx'


describe('FollowButton', () => {

    const mockOnClick = jest.fn();
    const user = userEvent.setup();


    beforeEach(() => {
        mockOnClick.mockClear();
    });

    it('deve renderizar o estado "Seguir" (isFollowing = false)', () => {
        render(<FollowButton isFollowing={false} onClick={mockOnClick} />);


        expect(screen.getByRole('button', { name: /Seguir/i })).toBeInTheDocument();


        expect(screen.queryByText(/Seguindo/i)).not.toBeInTheDocument();
    });

    it('deve renderizar o estado "Seguindo" (isFollowing = true)', () => {
        render(<FollowButton isFollowing={true} onClick={mockOnClick} />);


        expect(screen.getByRole('button', { name: /Seguindo/i })).toBeInTheDocument();


        expect(screen.queryByText(/Seguir/i)).not.toBeInTheDocument();


        const buttonElement = screen.getByRole('button');
        expect(buttonElement).toHaveClass('bg-green-500');
    });

    it('deve chamar onClick quando clicado (em qualquer estado)', async () => {
        render(<FollowButton isFollowing={false} onClick={mockOnClick} />);

        await user.click(screen.getByRole('button', { name: /Seguir/i }));

        expect(mockOnClick).toHaveBeenCalledTimes(1);
    });
});