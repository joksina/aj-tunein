import { render, screen } from '@testing-library/react';
import Card from './Card';

test('should render any content passed into Card component', () => {
  let content = "Hello World"
  render(<Card> <div>{content} </div></Card>);
  const linkElement = screen.getByText(content);
  expect(linkElement).toBeInTheDocument();
});

