import React from 'react';
import { render } from '@testing-library/react';
import Gifs from './Gifs';

test('renders gifs', () => {
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

  const { getByAltText } = render(<Gifs gifs={gifs}/>);
  const gifImg = getByAltText(gifs[0].title);
  expect(gifImg).toBeInTheDocument();
});
