
 import { render, screen } from '@testing-library/react';
import App from './App';
import LandingPage from './components/LandingPage/LandingPage';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/home/i);
  expect(linkElement).toBeInTheDocument();
 
}); 