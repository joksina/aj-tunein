import { render, screen } from '@testing-library/react';
import Stations from './Stations';

test('should render any content passed into Card component', () => {
  let data = [{
    id: 1,
    imgUrl: "test",
    name: "CNN",
    Popularity: 5,
    tags: ["music"]
  }]
  render(<Stations data={data} />);
  const linkElement = screen.getByText(data[0].name);
  expect(linkElement).toBeInTheDocument();
});
