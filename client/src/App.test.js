import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { render } from "@testing-library/react";

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
  ReactDOM.unmountComponentAtNode(div);
});

test("Nav title renders correctly", () => {
  //arrange - define which query you will be using
  const{ getByText } = render(<App/>)
  //act
  const  Title = getByText(/Men's Soccer Players - World Ranking/i) // i = ignore casing
  //assert
  expect(Title).toBeInTheDocument();
} )