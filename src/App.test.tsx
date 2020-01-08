import React from 'react';
import { render } from '@testing-library/react';
import App from './App';

test('renders the terminal', () => {
  window.HTMLElement.prototype.scrollIntoView = function() {};
  const dom = render(<App />);

  const terminal = dom.container.getElementsByClassName('terminal');
  expect(terminal).toBeTruthy();
});
