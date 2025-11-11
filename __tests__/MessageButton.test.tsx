// __tests__/MessageButton.test.tsx
import React from 'react';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import MessageButton from '../app/components/MessageButton';

describe('MessageButton', () => {
  it('deve renderizar o texto "Mensagem" e o ícone', () => {
    render(<MessageButton />);

    const buttonElement = screen.getByRole('button', { name: /Mensagem/i });
    expect(buttonElement).toBeInTheDocument();
    expect(buttonElement.querySelector('svg')).toBeInTheDocument();
  });

  it('deve chamar a função onClick quando clicado', async () => {

    const mockOnClick = jest.fn();
    const user = userEvent.setup();


    render(<MessageButton onClick={mockOnClick} />);


    const buttonElement = screen.getByRole('button', { name: /Mensagem/i });
    await user.click(buttonElement);

    expect(mockOnClick).toHaveBeenCalledTimes(1);
  });
});