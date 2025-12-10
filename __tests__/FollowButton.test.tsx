// __tests__/FollowButton.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import FollowButton from '../app/components/FollowButton';

describe('FollowButton', () => {
  const mockOnClick = jest.fn();
  const user = userEvent.setup();

  beforeEach(() => {
    mockOnClick.mockClear();
  });

  it('deve renderizar estado inicial com acessibilidade correta', () => {
    render(<FollowButton isFollowing={false} onClick={mockOnClick} name="Ana" />);

    // Busca pelo nome acessível (o que o leitor de tela lê), não apenas o texto visual
    const button = screen.getByRole('button', { name: /Seguir Ana/i });
    
    expect(button).toBeInTheDocument();
    // Verifica se o estado semântico está "desligado"
    expect(button).toHaveAttribute('aria-pressed', 'false');
    expect(screen.getByText('Seguir')).toBeInTheDocument();
  });

  it('deve renderizar estado "Seguindo" com feedback visual e semântico', () => {
    render(<FollowButton isFollowing={true} onClick={mockOnClick} name="Ana" />);

    // O label deve mudar para indicar a ação de "Deixar de seguir" ou estado atual
    const button = screen.getByRole('button', { name: /Deixar de seguir Ana/i });
    
    expect(button).toBeInTheDocument();
    // Verifica se o estado semântico está "ligado"
    expect(button).toHaveAttribute('aria-pressed', 'true');
    expect(screen.getByText('Seguindo')).toBeInTheDocument();
  });

  it('deve disparar evento de clique', async () => {
    render(<FollowButton isFollowing={false} onClick={mockOnClick} />);
    
    await user.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});