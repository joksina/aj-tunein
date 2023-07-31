import { render, screen, fireEvent } from '@testing-library/react';
import Stations from './Stations';
import { BrowserRouter as Router } from "react-router-dom";
import * as router from 'react-router'
const navigate = jest.fn()

beforeEach(() => {
  jest.spyOn(router, 'useNavigate').mockImplementation(() => navigate)
})



describe('Stations', () => {
  test('should render any content passed into Card component', () => {
    let data = [{
      id: 1,
      imgUrl: "test",
      name: "CNN",
      Popularity: 5,
      tags: ["music"]
    }]
    render(<Router><Stations data={data} /></Router>);
    const linkElement = screen.getByText(data[0].name);
    expect(linkElement).toBeInTheDocument();
  });

  test('redirects when div is clicked', async () => {
    let data = [{
      id: 1,
      imgUrl: "test",
      name: "CNN",
      Popularity: 5,
      tags: ["music"]
    }]
    render(<Router><Stations data={data} /></Router>);
    const div = await screen.findByText('CNN')
    await fireEvent.click(div);
    expect(navigate).toHaveBeenCalledTimes(1)
  })

})
