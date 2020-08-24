import React from 'react';
import { render } from '@testing-library/react';
import Search from './Search';
import SearchBar from './SearchBar'
import Gifs from './Gifs'

describe('Search', () => {
  test('renders SearchBar component', () => {
    render(<SearchBar />);
  });

  test('renders Gifs component', () => {
    const gifs = [
      {
        id: 1,
        title: "Funny Title",
        images: {
          downsized: {
            url: "gif.com/funny.gif",
            width: "100",
            height: "200",
          }
        }
      }
    ]

    render(<Gifs gifs={gifs} />);
  });
});

