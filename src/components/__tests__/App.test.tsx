// import React from 'react';
// import { render, screen } from '@testing-library/react';
// import App from '../../App';

// test('renders learn react link', () => {
//   // expect(true).toBe(true)
//   render(<App />);
//   // const linkElement = screen.getByText(/learn react/i);
//   // expect(linkElement).toBeInTheDocument();
// });

import renderer from 'react-test-renderer';
import App from '../../App';
// describe("snapshot testing", () => {
//   expect(true).toBe(true)
// })

describe('my test', () => {
  it('some text', () => {
    const renderedComponent = renderer.create(<App />).toJSON()
    expect(renderedComponent).toMatchSnapshot()
  })
});
