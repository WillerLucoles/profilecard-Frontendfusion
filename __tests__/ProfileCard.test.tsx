// __tests__/ProfileCard.test.tsx

import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileCard from '../app/components/profilecard';
import userAvatar from '../assests/Container.png';

describe('ProfileCard', () => {
    const user = userEvent.setup();

    // Props de exemplo para o card
    const cardProps = {
        name: "Ana Silva",
        role: "Desenvolvedora Full Stack",
        followers: 980,
        following: 180,
        projects: 42,
        description: "Apaixonada por criar experiências digitais incríveis.",
        specialties: "Especialista em React e Node.js.",
        profileImage: userAvatar,
    };

    it('deve renderizar todas as informações corretamente', () => {
        render(<ProfileCard {...cardProps} />);

        expect(screen.getByText('Ana Silva')).toBeInTheDocument();
        expect(screen.getByText('Desenvolvedora Full Stack')).toBeInTheDocument();
        expect(screen.getByText('980')).toBeInTheDocument();
        expect(screen.getByText('180')).toBeInTheDocument();
        expect(screen.getByText('42')).toBeInTheDocument();
    });

    it('deve atualizar o estado de "Seguir" para "Seguindo" e incrementar seguidores', async () => {
        render(<ProfileCard {...cardProps} />);

        const followButton = screen.getByRole('button', { name: /Seguir/i });
        expect(followButton).toBeInTheDocument();
        expect(screen.getByText('980')).toBeInTheDocument();


        await user.click(followButton);

        expect(screen.getByRole('button', { name: /Seguindo/i })).toBeInTheDocument();

        expect(screen.getByText('981')).toBeInTheDocument();
        expect(screen.queryByText('980')).not.toBeInTheDocument();
    });

    it('deve alternar de volta para "Seguir" e decrementar seguidores', async () => {
        render(<ProfileCard {...cardProps} />);

        const followButton = screen.getByRole('button', { name: /Seguir/i });
        await user.click(followButton);

        const followingButton = screen.getByRole('button', { name: /Seguindo/i });
        expect(followingButton).toBeInTheDocument();
        expect(screen.getByText('981')).toBeInTheDocument();

        await user.click(followingButton);


        expect(screen.getByRole('button', { name: /Seguir/i })).toBeInTheDocument();
        expect(screen.getByText('980')).toBeInTheDocument();
        expect(screen.queryByText('981')).not.toBeInTheDocument();
    });
});