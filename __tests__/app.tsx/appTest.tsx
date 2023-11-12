import React from 'react';
import { render, screen } from '@testing-library/react';
import App from '../../src/App';
import { MemoryRouter } from 'react-router-dom';

jest.mock('../../src/common/API/apiFunc', () => ({
  getFromApi: jest.fn().mockResolvedValue({
    products: [
      {
        id: 3,
        title: 'Samsung Universe 9',
        description:
          "Samsung's new variant which goes beyond Galaxy to the Universe",
        price: 1249,
        discountPercentage: 15.46,
        rating: 4.09,
        stock: 36,
        brand: 'Samsung',
        category: 'smartphones',
        thumbnail: 'https://i.dummyjson.com/data/products/3/thumbnail.jpg',
        images: ['https://i.dummyjson.com/data/products/3/1.jpg'],
      },
    ],
    total: 1,
    skip: 0,
    limit: 1,
  }),
}));

describe('App', () => {
  test('renders header with correct text', async () => {
    render(
      <MemoryRouter>
        <App />
      </MemoryRouter>
    );

    const headerElement = await screen.findByText(/Some crap/i);
    expect(headerElement).toBeInTheDocument();
  });
});
