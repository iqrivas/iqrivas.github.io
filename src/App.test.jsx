import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from './App';

describe('App', () => {
  it('renders the main app container', () => {
    render(<App />);
    const appElement = screen.getByRole('navigation');
    expect(appElement).toBeInTheDocument();
  });

  it('renders all tab buttons', () => {
    render(<App />);
    expect(screen.getByText(/Inicio/i)).toBeInTheDocument();
    expect(screen.getByText(/Experiencia/i)).toBeInTheDocument();
    expect(screen.getByText(/Proyectos/i)).toBeInTheDocument();
    expect(screen.getByText(/Contacto/i)).toBeInTheDocument();
  });

  it('displays intro panel by default', () => {
    render(<App />);
    const introPanel = screen.getByText(/¡Hola! Soy Denisse Rivas/i);
    expect(introPanel).toBeInTheDocument();
  });
});
