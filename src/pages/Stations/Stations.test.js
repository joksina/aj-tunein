import { render, screen, fireEvent } from '@testing-library/react';
import StationsPage from './Stations';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


describe('Page/Stations', () => {
  test('renders Stations', () => {
    render(<Router><StationsPage /></Router>);
    const element = screen.getByText(/TuneIn/);
    expect(element).toBeInTheDocument();
  });

  test('stations with data', () => {
    let data = [{
      id: 1,
      imgUrl: "test",
      name: "CNN",
      Popularity: 5,
      tags: ["music"]
    }];
    render(<Router><StationsPage data={data}/></Router>);
    const element = screen.getByText(/Loading.../);
    expect(element).toBeInTheDocument();
  });

  test('filtered button by tags', async () => {
    const handleClick = jest.fn()
    let data = [{
      id: 1,
      imgUrl: "test",
      name: "CNN",
      Popularity: 5,
      tags: ["news"]
    },{
      id: 1,
      imgUrl: "test",
      name: "Hip",
      Popularity: 5,
      tags: ["music"]
    },{
      id: 1,
      imgUrl: "test",
      name: "top",
      Popularity: 5,
      tags: ["music"]
    }]
    render(<Router><StationsPage data={data} /></Router>);
    const button = await screen.getByText(/music/i)
    await fireEvent.click(button);
    expect(button).toBeInTheDocument();
  })
});


