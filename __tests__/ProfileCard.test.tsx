// __tests__/ProfileCard.test.tsx
import React from 'react';
import { render, screen, within } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import ProfileCard from '../app/components/profilecard';

// Mock simples para a imagem
const mockProfileImage = {
  src: '/avatar.png',
  height: 100,
  width: 100,
  blurDataURL: 'data:image/png;base64,',
};

describe('ProfileCard Integration', () => {
  const user = userEvent.setup();

  const defaultProps = {
    name: "Ana Silva",
    role: "Dev",
    followers: 100,
    following: 50,
    projects: 10,
    description: "Bio test",
    specialties: "React",
    profileImage: mockProfileImage,
  };

  // Garante um ambiente limpo antes de cada teste
  beforeEach(() => {
    window.localStorage.clear();
  });

  it('deve atualizar contadores e persistir dados ao clicar em Seguir', async () => {
    render(<ProfileCard {...defaultProps} />);

    const followBtn = screen.getByRole('button', { name: /Seguir/i });
    
    // 1. Interação do usuário
    await user.click(followBtn);

    // 2. Verificação Visual (UI)
    // O botão deve mudar para "Seguindo"
    const followButton = await screen.findByRole('button', {
      name: /Deixar de seguir Ana Silva/i, // or the aria-label used after follow
    });
    expect(within(followButton).getByText('Seguindo')).toBeInTheDocument();
    // O contador deve subir de 100 para 101
    expect(screen.getByText('101')).toBeInTheDocument();

    // 3. Verificação de Sistema (Storage)
    // Verifica se a lógica de negócio (persistência) funcionou
    expect(window.localStorage.getItem('followState_Ana Silva')).toBe('true');
  });

  it('deve recuperar estado salvo do localStorage (Simular F5)', async () => {
    // Cenário: Usuário já segue a Ana (dados salvos anteriormente)
    window.localStorage.setItem('followState_Ana Silva', 'true');

    render(<ProfileCard {...defaultProps} />);

    // Como há um useEffect para hidratação, usamos findBy (assíncrono)
    // O componente deve "acordar" já sabendo que segue o usuário
    const activeBtn = await screen.findByRole('button', { name: /Deixar de seguir/i });
    
    expect(activeBtn).toBeInTheDocument();
    // O contador deve renderizar já incrementado (101)
    expect(screen.getByText('101')).toBeInTheDocument();
  });
});