import React, { useState } from 'react';
import Number from './Number';
import { isMultipleOf } from '../utils/utils';

interface MultiplesProps {
  numbers: number[];
}

const Multiples = ({ numbers }: MultiplesProps) => {
  const [selectedNumber, setSelectedNumber] = useState<number | undefined>(
    undefined
  );

  function handleSelected(num: number) {
    if (selectedNumber) {
      setSelectedNumber(num);
      return;
    }

    setSelectedNumber(num); // for the first selection only
  }

  return (
    <div className="grid">
      {numbers.map(number => (
        <div key={number} data-testid="number">
          <Number
            isActive={Boolean(
              selectedNumber && isMultipleOf(selectedNumber, number)
            )}
            number={number}
            handleSelected={handleSelected}
          />
        </div>
      ))}
    </div>
  );
};

export default Multiples;
