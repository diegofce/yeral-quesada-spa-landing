import { render, screen } from '@testing-library/react';
import PaginaContacto from './contacto/page';
import PaginaInicio from './page';
import PaginaServicios from './servicios/page';

describe('Render de paginas clave', () => {
  test('renderiza home', () => {
    render(<PaginaInicio />);
    expect(
      screen.getAllByRole('heading', {
        name: /est[eé]tica integral yeral quesada/i,
      }).length,
    ).toBeGreaterThan(0);
  });

  test('renderiza servicios', () => {
    render(<PaginaServicios />);
    expect(
      screen.getByRole('heading', { name: /nuestros servicios/i }),
    ).toBeInTheDocument();
  });

  test('renderiza contacto', () => {
    render(<PaginaContacto />);
    expect(
      screen.getByRole('heading', { name: /cont[aá]ctanos/i }),
    ).toBeInTheDocument();
  });
});
