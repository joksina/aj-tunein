import { render, screen, getByText, fireEvent } from '@testing-library/react';
import StationDetails from './StationDetails';
import { BrowserRouter as Router, Routes, Route, MemoryRouter } from "react-router-dom";
import { useNavigate } from "react-router"

beforeEach(() => {
  useNavigate: () => ({
    navigate: jest.fn().mockImplementation(() => ({})),
  })
})

const data = {
      id: 1,
      imgUrl: "test",
      name: "CNN",
      Popularity: 5,
      tags: ["music"]
    }

describe('StationDetails', () => {
  test('renders StationDetails button length', () => {
    render(
      <MemoryRouter initialEntries={[{ 
          pathname: '/station/details',
          state: data
        }]}>
        <StationDetails />
      </MemoryRouter>
    );
    const linkElement = screen.getAllByRole('button');
    expect(linkElement.length).toEqual(1);
  });

  test('render StationDetails content page', () => {
    render(
      <MemoryRouter initialEntries={[{ 
          pathname: '/station/details',
          state: data
        }]}>
        <StationDetails />
      </MemoryRouter>
    );
    const header = screen.getByText("CNN");
    expect(header).toBeInTheDocument();
  });

  test('render go Back button', () => {
    const handleClick = jest.fn();
    render(
      <MemoryRouter initialEntries={[{ 
          pathname: '/station/details',
          state: {
            id: 1,
            imgUrl: "test",
            name: "CNN",
            Popularity: 5,
            tags: ["music"]
          }
        }]}>
        <StationDetails />
      </MemoryRouter>
    );
    const button = screen.getByText(/Back/);
    expect(button).toBeInTheDocument();
    fireEvent.click(screen.getByText(/back/i))
    expect(handleClick).toHaveBeenCalledTimes(0)
  });

});
