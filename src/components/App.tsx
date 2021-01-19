import React from 'react';
import Header from './Header';
import Multiples from './Multiples';

export const App = () => {
  const numbers = Array(144)
    .fill(undefined)
    .map((_, index: number) => index + 1);

  return (
    <>
      <Header />
      <div className="container">
        <div className="row">
          <Multiples numbers={numbers} />
        </div>
      </div>
    </>
  );
};

export default App;
