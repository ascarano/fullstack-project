import React from 'react';
import { render } from '@testing-library/react';
import SearchBar from './SearchBar';

test('renders search bar', () => {
  const { getByText } = render(<SearchBar />);
  const searchButton = getByText(/SEARCH/i);
  expect(searchButton).toBeInTheDocument();
});
