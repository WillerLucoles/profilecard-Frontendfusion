// __tests__/MessageButton.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MessageButton from '../app/components/MessageButton';

describe('MessageButton', () => {
  it('deve ter label acessível personalizado', () => {
    render(<MessageButton name="Ana" />);

    // Garante que o botão é encontrável pelo seu propósito específico
    const button = screen.getByRole('button', { name: /Enviar mensagem para Ana/i });
    expect(button).toBeInTheDocument();
  });

  it('deve interagir corretamente com o usuário', async () => {
    const mockOnClick = jest.fn();
    const user = userEvent.setup();

    render(<MessageButton onClick={mockOnClick} />);

    await user.click(screen.getByRole('button'));
    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});