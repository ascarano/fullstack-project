import React from 'react';
import { render } from '@testing-library/react';
 
import App from './App';
import Search from './components/Search'
 
describe('App', () => {
  test('renders Search component', () => {
    render(<Search />);
  });
});