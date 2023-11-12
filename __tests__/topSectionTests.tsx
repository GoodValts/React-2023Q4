import '@testing-library/jest-dom';
import { fireEvent, render } from '@testing-library/react';
import React from 'react';
import TopSection from '../src/modules/top-section';

describe('TopSection', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('должен сохранять введенное значение в локальное хранилище при нажатии на кнопку "Search"', () => {
    const { getByPlaceholderText, getByText } = render(<TopSection />);

    const searchInput = getByPlaceholderText('Search here...');
    const searchButton = getByText('Search');

    fireEvent.change(searchInput, { target: { value: 'test value' } });
    fireEvent.click(searchButton);

    const storedValue = localStorage.getItem('searchInputValue');
    expect(storedValue).toBe('test value');
  });

  it('должен извлекать значение из локального хранилища при монтировании компонента', () => {
    localStorage.setItem('searchInputValue', 'stored value');

    const { getByPlaceholderText } = render(<TopSection />);

    const searchInput = getByPlaceholderText('Search here...');
    expect((searchInput as HTMLInputElement).value).toBe('stored value');
  });
});
