import React from 'react';
import { render } from '@testing-library/react';
import Gif from './Gif';

test('renders a gif', () => {
  const gif = {
    id: 1,
    title: "Funny Gif",
    images: {
      downsized: {
        url: "gif.com/funny.gif",
        width: "100",
        height: "200",
      }
    }
  }

  const { getByAltText } = render(<Gif gif={gif}/>);
  const gifImg = getByAltText(gif.title);
  expect(gifImg).toBeInTheDocument();
});
