import React from 'react';

interface NumberProps {
  isActive: boolean;
  number: number;
  handleSelected: (num: number) => void;
}

const Number = ({ isActive, number, handleSelected }: NumberProps) => (
  <label
    className={`number${isActive ? ' active' : ''}`}
    data-testid="number-label"
  >
    <input
      checked={isActive}
      name="number"
      type="checkbox"
      value={number}
      onChange={(evt: any) => {
        handleSelected(number);
      }}
    />
    {number}
  </label>
);

export default Number;
