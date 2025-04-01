import { render, screen } from '@testing-library/react';
import App from './App';

test('renders Intro section', () => {
  render(<App />);
  const introElement = screen.getByText(/hi.*ermanno/i);
  expect(introElement).toBeInTheDocument();
});
