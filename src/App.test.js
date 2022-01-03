import { render, screen } from '@testing-library/react';
import App from './App';

test('renders General tab', () => {
  render(<App />);
  const linkElement = screen.getByText("General");
  expect(linkElement).toBeInTheDocument();
});
