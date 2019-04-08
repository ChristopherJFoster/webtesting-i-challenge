import { useState } from 'react';

export const useInput = () => {
  const [value, setValue] = useState('');

  const updateValue = e => {
    if (e.target.type === 'number') {
      setValue(parseInt(e.target.value, 10));
    } else {
      setValue(e.target.value);
    }
  };

  return {
    value,
    setValue,
    updateValue
  };
};
