import { fireEvent, render, screen, waitFor } from '@testing-library/react';
import FormularioContacto from './FormularioContacto';

describe('FormularioContacto', () => {
  test('muestra errores de validacion al enviar vacio', async () => {
    render(<FormularioContacto />);

    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    expect(
      await screen.findByText(/el nombre debe tener al menos 2 caracteres/i),
    ).toBeInTheDocument();
    expect(
      await screen.findByText(/ingresa un n[úu]mero de tel[eé]fono v[aá]lido/i),
    ).toBeInTheDocument();
  });

  test('muestra error si falta endpoint de envio', async () => {
    render(<FormularioContacto />);

    fireEvent.change(screen.getByLabelText(/nombre completo/i), {
      target: { value: 'Diego' },
    });

    fireEvent.change(screen.getByLabelText(/tel[eé]fono/i), {
      target: { value: '3113634058' },
    });

    fireEvent.click(screen.getByRole('button', { name: /enviar mensaje/i }));

    await waitFor(() => {
      expect(
        screen.getByText(
          /formulario no configurado\. define NEXT_PUBLIC_CONTACT_FORM_ENDPOINT/i,
        ),
      ).toBeInTheDocument();
    });
  });
});
