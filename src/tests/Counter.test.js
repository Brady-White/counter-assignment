// Import necessary React Testing Library helpers
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';

// Import the Counter component
import Counter from '../components/Counter';

beforeEach(() => {
  // Render the Counter component before each test
  render(<Counter />);
});

test('renders counter message', () => {
  // Verify the Counter component displays the counter message
  expect(screen.getByText(/counter/i)).toBeInTheDocument();
});

test('should render initial count with value of 0', () => {
  // Verify that the initial count is displayed as 0
  const countElement = screen.getByTestId('count');
  expect(countElement).toHaveTextContent('0');
});

test('clicking + increments the count', () => {
  // Simulate clicking the + button and verify the count increments
  const countElement = screen.getByTestId('count');
  const incrementButton = screen.getByText('+');
  userEvent.click(incrementButton);
  expect(countElement).toHaveTextContent('1');
});

test('clicking - decrements the count', () => {
  // Simulate clicking the - button and verify the count decrements
  const countElement = screen.getByTestId('count');
  const decrementButton = screen.getByText('-');
  userEvent.click(decrementButton);
  expect(countElement).toHaveTextContent('-1');
});
